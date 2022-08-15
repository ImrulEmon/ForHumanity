import React from "react";
import "./InfoCounter.css";
import useEvents from "../../hooks/useEvents";

const InfoCounter = ({volunteers}) => {
    // {volunteers } ==  props.volunteers
    const [events]=useEvents()
  return (
    <div class="container-fluid">
    <div class="row">
    <div class="col-12 col-md-6 col-lg-3 col-xl-3">
      <div class="card-counter info">
        <i class="fa fa-heart"></i>
        <span class="count-numbers my-auto">{volunteers?.length}</span>
        <span class="count-name">Active Participation</span>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-3 col-xl-3">
      <div class="card-counter danger">
        <i class="fa fa-book"></i>
        <span class="count-numbers">{events?.length}</span>
        <span class="count-name">Events</span>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-3 col-xl-3">
      <div class="card-counter success">
        <i class="fa fa-database"></i>
        <span class="count-numbers later">Will be added later</span>
        <span class="count-name">Data</span>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-3 col-xl-3">
      <div class="card-counter primary">
        <i class="fa fa-users"></i>
        <span class="count-numbers later">Will be added late</span>
        <span class="count-name">Users</span>
      </div>
    </div>
  </div>
</div>
  );
};

export default InfoCounter;
