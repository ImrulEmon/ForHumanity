import React from "react";
import { useTabtitle } from "../../hooks/useTabtitle";
import "./About.css";

const About = () => {
  useTabtitle("About Us");
  return (
    <section id="aboutPage">
      <div
      className="container text-center font-monospace"
      style={{ minHeight: "69vh" }}
    >
      <h1
        className="text-center about animate__animated animate__fadeIn"
        style={{ paddingTop: "5%" }}
      >
        About
      </h1>
      <img
        className="author w-25 text-center about animate__animated animate__fadeIn"
        src="https://i.ibb.co/6F2qK0y/author.webp"
        alt="imrul emon"
      />
      <h3 className="text-center about animate__animated animate__fadeIn mt-5">
        REACT-NODEJS PROJECT
      </h3>
      <h5 className="text-center about animate__animated animate__fadeIn">
        <a target="_blank" href="https://github.com/ImrulEmon">
          GitHub(Author)
        </a>
      </h5>
    </div>
    </section>
  );
};
export default About;
