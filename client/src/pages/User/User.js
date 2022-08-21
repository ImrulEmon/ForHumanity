import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import UserCard from "../../components/UserCard/UserCard";
import useAuth from "../../hooks/useAuth";
import "./user.css";

const User = () => {
  const { user, isLoading, setIsLoading } = useAuth({});
  const [myevents, setMyevents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  if (user.email == null) {
    user.email = user?.uid;
  }

  useEffect(() => {
    fetch(
      `https://forhumanity-server.herokuapp.com/myevents?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          navigate("/login");
        }
      })
      .then((data) => {
        setMyevents(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const url = ` https://forhumanity-server.herokuapp.com/dltmyevent/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = myevents.filter(
            (myevent) => myevent._id !== id
          );
          setMyevents(remaining);
        }
      });
  };


  console.log(myevents);

  //console.log(user?.email);

  return (
    <div className="container-fluid" style={{ minHeight: "73vh" }}>
      <img className="user-dp mt-5" src={user?.photoURL} alt="" />
      <h1 className="text-center my-3">{user?.displayName.toUpperCase()}</h1>
      {loading ? (
        <LoadingSpinner />
      ) : myevents.length === 0 ? (
        <div className="text-center" style={{ minHeight: "5vh" }}>
          <h1 className="text-center" style={{ color: "gray" }}>
            You didn't register to any event! Please Register ! ! !
          </h1>
          <Link to="/register"> Go to Register </Link>
        </div>
      ) : (
        <div className="container">
          <div className="table-responsive-lg">
          <table class="table table-striped text-center table table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Event</th>
                <th scope="col">Date</th>
                <th scope="col">Email</th>
                <th scope="col">Delete</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody>
            {myevents?.map((myevent,index) => (
              <UserCard  handleDelete={handleDelete} key={myevent._id} myevent={myevent}></UserCard>
            ))}
            </tbody>
          </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
