import React from "react";
import Banner from "../../components/Banner/Banner";
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
    <>
    <Banner />
    <div
      className="text-center home container-fluid"
      
    >
      <h1>Recent Events</h1>
      <div className="grid my-4">
        
      {
        isLoading?<LoadingSpinner />:(
          featureEvents.map(featureEvent=><Event key={featureEvent._id} event={featureEvent}></Event>)
        )
      }
      </div>
    </div>
    </>
  );
};
export default Home;
