import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div
      className="container-fluid mx-auto row footer px-5"
      style={{ backgroundColor: "black", color: "white", textAlign: "left" }}
    >
      <p>
          <NavLink to="/"><img className="fh-logo" src="https://i.ibb.co/fXqh9J0/favicon-fh.png" alt="Logo" /></NavLink>
        </p>
      <div className="fa col-12 col-md-6 col-lg-6 col-xl-6">
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/register">Registration</NavLink>
        </p>
        <p>
          <NavLink to="/donation">Donation</NavLink>
        </p>
        <p>
          <NavLink to="/events">Events</NavLink>
        </p>
      </div>
      <div className="fa col-12 col-md-6 col-lg-6 col-xl-6">
        <p>
          <NavLink to="/admin">Volunteers</NavLink>
        </p>
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
