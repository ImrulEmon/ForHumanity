import React from "react";
import "./Event.css";
import 'animate.css';

const Event = (props) => {
    const {title,img,bgc}=props?.event;

  return (
    <div className="item animate__animated animate__fadeIn">
          <a href="#0" aria-labelledby="person3"></a>
          <img
            src={img}
            alt={title}
            className='animate__animated animate__fadeIn'
          />
          <div className="item__overlay">
            <h3 style={{backgroundColor:`${bgc}`}} id="person3" aria-hidden="true">
             {title}
            </h3>
            <div className="item__body animate__animated animate__fadeInLeft">
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
