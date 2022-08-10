import React from "react";
import Event from "../../components/Card/Event";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useEvents from "../../hooks/useEvents";
import { useTabtitle } from "../../hooks/useTabtitle";
import Events from "../Events/Events";
import "./Home.css";
const Home = () => {
  useTabtitle("ForHumanity | HOME");
  const [events,isLoading]=useEvents();
  const featureEvents = events.slice(0,4)
  return (
    <div
      className="text-center home container-fluid"
      style={{ minHeight: "74vh" }}
    >
      <img
        src="https://i.ibb.co/Qmf1ynF/4327424-18827.webp"
        alt="banner Image"
        className="banner"
      />
      <h1>Recent Events</h1>
      <div className="grid my-4">
        
      {
        isLoading?<LoadingSpinner />:(
          featureEvents.map(featureEvent=><Event key={featureEvent._id} event={featureEvent}></Event>)
        )
      }
      </div>
    </div>
  );
};
export default Home;
