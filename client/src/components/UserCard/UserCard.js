import React from "react";
import "./UserCard.css";

const UserCard = (props) => {
 const{Date,Event,FullName,email}=props.myevent;
  return (
    <div className="container col-12 col-md-6 col-lg-3">
      <div className="card d-flex align-items-center justify-content-center">
        <div className="slide slide1">
          <div className="content">
            <div className="icon">
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="slide slide2">
          <div className="content">
            <h4>Hello there! {FullName}</h4>
            <p>Event : {Event}</p>
            <p>{Date}</p>
            <p>Email:{email}</p>
            <p>Trust yourself and keep going.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
