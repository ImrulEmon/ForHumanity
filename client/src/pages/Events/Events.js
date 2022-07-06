import React, { useEffect, useState } from 'react';
import Event from '../../components/Card/Event';
import'./Events.css';

const Events = () => {
  const [events,setEvents]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/events')
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      setEvents(data);
    })
  },[])
  console.log(events);
    return (
      <div className="container">
      <div class="grid my-5">
    {
      events.map(event=><Event key={event._id} event={event}></Event>)
    }
  </div>
  </div>
    );
};

export default Events;