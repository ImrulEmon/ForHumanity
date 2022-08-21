import React from "react";
import "./InfoCounter.css";
import useEvents from "../../hooks/useEvents";

const InfoCounter = ({volunteers}) => {
    // {volunteers } ==  props.volunteers
    const [events]=useEvents()
  return (
    <div className="container">
    <div className="row">
    <div className="col-12 col-md-6 col-lg-3 col-xl-3">
      <div className="card-counter info">
        <i className="fa fa-heart"></i>
        <span className="count-numbers my-auto">{volunteers?.length}</span>
        <span className="count-name">Active Participation</span>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 col-xl-3">
      <div className="card-counter danger">
        <i className="fa fa-book"></i>
        <span className="count-numbers">{events?.length}</span>
        <span className="count-name">Events</span>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 col-xl-3">
      <div className="card-counter success">
        <i className="fa fa-database"></i>
        <span className="count-numbers later">Will be added later</span>
        <span className="count-name">Data</span>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 col-xl-3">
      <div className="card-counter primary">
        <i className="fa fa-users"></i>
        <span className="count-numbers later">Will be added later</span>
        <span className="count-name">Users</span>
      </div>
    </div>
  </div>
</div>
  );
};

export default InfoCounter;
