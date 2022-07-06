import React, { useEffect, useState } from 'react';

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
        <div className="container text-center">
    
    <h1 className="" style={{paddingTop: "2%"}}>
      Events
    </h1>
    {
      events.map(e=><h2>{e?.title}</h2>)
    }
  </div>
    );
};

export default Events;