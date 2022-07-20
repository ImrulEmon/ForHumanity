import React from 'react';
import { useTabtitle } from '../../hooks/useTabtitle';

const Contact = () => {
  useTabtitle('Contact');
  return (
    <div className="container">
    
      <h1 className="text-center" style={{paddingTop: "30%"}}>
        Contact Us
      </h1>
      
    </div>
  )
}
export default Contact;