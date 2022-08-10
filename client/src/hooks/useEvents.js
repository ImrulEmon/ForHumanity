import { useEffect, useState } from "react";

const useEvents = () =>{
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
  return [events,isLoading]
}

export default useEvents;