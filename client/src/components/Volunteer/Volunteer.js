import React, { useEffect, useState } from "react";
import "./Volunteer.css";

const Volunteer = (props) => {
  const { Date, Email, Event, FullName, MobileNumber, _id } = props?.volunteer;

  const confirmDelete=()=>{
    
  }

  return (
    <div className="volunteer volunteer-1">
      <div className="volunteer__icon">
        <i className="fas fa-bolt"></i>
      </div>
      <p className="volunteer__exit" onClick={() => {window.confirm( 'Are you sure you want to delete this Card?', ) && props?.handleDelete(_id)}}>
        <p><i className="fas fa-trash"></i></p>
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
