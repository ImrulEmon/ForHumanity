import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <section id="home-banner" className="container-fluid py-4 px-5 mb-5">
      <div className="row align-items-center justify-content-center g-3" style={{minHeight:"80vh"}}>
        <div className="col-12 col-md-12 col-lg-6">
          <h1 className="text-white my-4 animate__animated animate__slideInLeft animate__slow" style={{fontSize:"48px"}}>
            Do not show lethargy or negligence in giving alms and charity till
            your last breath.
          </h1>
          <Link to="/events" className="btn btn-dark animate__animated animate__slideInLeft">
            See Events
          </Link>
        </div>
        <div className="col-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center">
          <img
            className="w-md-75 w-lg-50 img-fluid rounded-3 shadow-lg animate__animated animate__slideInRight"
            src="https://i.ibb.co/vhyz44Y/close-up-volunteer-oganizing-stuff-donation.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
