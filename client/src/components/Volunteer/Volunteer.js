import React, { useEffect, useState } from "react";
import "./Volunteer.css";

const Volunteer = (props) => {
  const { Date, Email, Event, FullName, MobileNumber, _id } = props?.volunteer;

  return (
    <div className="volunteer volunteer-1">
      <div className="volunteer__icon">
        <i className="fas fa-bolt"></i>
      </div>
      <p className="volunteer__exit" onClick={() => props.handleDelete(_id)}>
        <i className="fas fa-times"></i>
      </p>

      <h2 className="volunteer__title animate__animated.animate__fadeIn">{FullName.toUpperCase()}</h2>
      <h4 className="info animate__animated.animate__fadeIn">{Event}</h4>
      <p className="info animate__animated.animate__fadeIn">{Date}</p>

      <p className="volunteer__apply">
        <a className="volunteer__link" href="#">
          See More <i className="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
};

export default Volunteer;
