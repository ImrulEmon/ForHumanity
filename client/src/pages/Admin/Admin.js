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
    fetch("http://localhost:5000/volunteer")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setVolunteers(data);
        setIsLoading(false);
      });
  }, []);
  console.log(volunteers);
  return (
    <div className="container" style={{ minHeight: "80vh" }}>
      <h1 className="text-center">Admin</h1>
      <div className="cards my-3">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          volunteers.map((volunteer) => (
            <Volunteer key={volunteer._id} volunteer={volunteer}></Volunteer>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
