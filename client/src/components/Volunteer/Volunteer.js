import React from "react";
import "./Volunteer.css";

const Volunteer = (props) => {
  const { Date, Email, Event, FullName, MobileNumber } = props?.volunteer;
  return (
    <div className="volunteer volunteer-1">
      <div className="volunteer__icon">
        <i className="fas fa-bolt"></i>
      </div>
      <p className="volunteer__exit">
        <i className="fas fa-times"></i>
      </p>
     
      <h2 className="volunteer__title">
        {FullName}
      </h2>
      <p className="date">{Date}</p>
      

      <p className="volunteer__apply">
        <a className="volunteer__link" href="#">
          See More <i className="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
};

export default Volunteer;
