import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import useFirebase from "../../hooks/useFirebase";
import useAuth from "../../hooks/useAuth";
import {Helmet} from "react-helmet";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase.init";

const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  const { user,logOut } = useAuth();
  const [eUser] = useAuthState(auth);
  //console.log(eUser);

  // console.log(user)
  // ===================

  

  // ===================

  return (
    <>
    <nav className="navbar sticky-top navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/">
      <p className="px-5">
         <img className="fh-logo" src="https://i.ibb.co/fXqh9J0/favicon-fh.png" alt="Logo" />
        </p>
      </NavLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              <i className="fas fa-home"></i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/donation">
              <i className="fas fa-hand-holding-usd"></i>Donation
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/events">
              <i className="fas fa-calendar-alt"></i>Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blogs">
              <i className="fas fa-scroll"></i>Blog
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              <i className="fas fa-address-book"></i>Contact Us
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              <i className="fas fa-user"></i>About Us
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              <i className="fas fa-thumbtack"></i>Register
            </NavLink>
          </li>

          <li>
          {user?.displayName ? (
                <NavLink to="/">
                <button onClick={logOut} className="btn btn-danger">
                  Log Out
                </button>
                </NavLink>
              ) :
            (<NavLink to="/login">
              <button className="btn btn-primary">Login</button>
            </NavLink>)}
          </li>
          <li>
            <NavLink to="/admin">
              <button className="btn btn-info">Admin</button>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/user">
              <i className="fas fa-user"></i>{user?.displayName}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};
export default Navbar;
