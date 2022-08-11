import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Volunteer from "../../components/Volunteer/Volunteer";
import { useTabtitle } from "../../hooks/useTabtitle";
import "./Admin.css";

const Admin = () => {
  useTabtitle("Admin");

  const [volunteers, setVolunteers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://forhumanity-server.herokuapp.com/member")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setVolunteers(data);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const url = `https://forhumanity-server.herokuapp.com/member/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = volunteers.filter(
            (volunteer) => volunteer._id !== id
          );
          setVolunteers(remaining);
        }
      });
  };

  return (
    <div className="container" style={{ minHeight: "80vh" }}>
      <h1 className="text-center my-5">Registerd Vlounteers</h1>
      <div className="cards my-3">
        {isLoading ? (
          <LoadingSpinner />
        ) : volunteers.length === 0 ? (
          <div
            className="d-flex align-items-center justify-content-center text-center"
            style={{ minHeight: "75vh" }}
          >
            <h1 className="text-center" style={{ color: "gray" }}>
              No Volunteer Available !!!
            </h1>
          </div>
        ) : (
          volunteers.map((volunteer) => (
            <Volunteer
              key={volunteer._id}
              volunteer={volunteer}
              handleDelete={handleDelete}
            ></Volunteer>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
