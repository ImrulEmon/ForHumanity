import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div
      className="row footer px-5"
      style={{ background: "black", color: "white", textAlign: "left" }}
    >
      <div className="col-12 col-md-6 col-lg-6 col-xl-6">
        <p>ForHumanity</p>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/donation">Donation</NavLink>
        </p>
        <p>
          <NavLink to="/events">Events</NavLink>
        </p>
      </div>
      <div className="col-12 col-md-6 col-lg-6 col-xl-6">
        <p>
          <NavLink to="/blogs">Blogs</NavLink>
        </p>
        <p>
          <NavLink to="/contact">Contact Us</NavLink>
        </p>
        <p>
          <NavLink to="/about">About</NavLink>
        </p>
      </div>
      <p className="text-center my-2">©ForHumanity | Imrul Emon,2022</p>
    </div>
  );
};

export default Footer;
