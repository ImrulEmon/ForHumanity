import React, { useEffect, useState } from "react";
import Event from "../../components/Card/Event";
import "./Events.css";
import { useTabtitle } from "../../hooks/useTabtitle";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Events = () => {
  useTabtitle("Events");
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // setIsLoading(true);
  useEffect(() => {
    fetch("https://forhumanity-server.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setEvents(data);
        setIsLoading(false);
      });
  }, []);
 // console.log(events);
  return (
    <div id="eventsPage" >
        <div className="container pt-4" style={{ minHeight: "80vh" }}>
      <h1 className="text-center">Events</h1>
      <div className="grid py-5">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          events.map((event) => <Event key={event._id} event={event}></Event>)
        )}
      </div>
    </div>
    </div>
    
  );
};

export default Events;
