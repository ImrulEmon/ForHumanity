import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useTabtitle } from "../../hooks/useTabtitle";
import "./Blog.css";

const Blogs = () => {

  useTabtitle("Blogs");

  return (
    <section id="blog-page"
      className="py-5 row container-fluid gap-2 mx-auto"
      style={{ minHeight: "75vh" }}
    >
      <div
      id="side-nav"
        className="side-bar text-center my-2 col-12 col-md-12 col-lg-2 mx-auto py-4"
      >
          {" "}
          <NavLink
          className='btn w-75 my-3'
            to="/blogs/post"
            style={({ isActive }) =>
              isActive
                ? {
                    color: '#fff',
                    background: '#7600dc',
                  }
                : { color: '#545e6f', background: '#f0f0f0' }
            }
          >
            Write a post
          </NavLink>
        
        <p>
          {" "}
          <NavLink
          className='btn w-75 my-3'
            to="/blogs/viewPost"
            style={({ isActive }) =>
              isActive
                ? {
                    color: '#fff',
                    background: '#7600dc',
                  }
                : { color: '#545e6f', background: '#f0f0f0' }
            }
          >
            View All posts
          </NavLink>
        </p>
      </div>
      <div className=" col-12 col-md-12 col-lg-9 mx-auto">
        <h1 className="text-center">Blogs</h1>
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Blogs;
