import React from "react";
import "./Event.css";

const Event = (props) => {
    const {title,img,bgc}=props.event;
  return (
    <div class="item">
          <a href="#0" aria-labelledby="person3"></a>
          <img
            src={img}
            alt={title}
          />
          <div class="item__overlay">
            <h3 style={{backgroundColor:`${bgc}`}} id="person3" aria-hidden="true">
             {title}
            </h3>
            <div class="item__body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
  );
};

export default Event;
