import React from 'react';
import { useTabtitle } from '../../hooks/useTabtitle';
import './Donation.css'

const Donation = () => {
  useTabtitle("Donation")
    return (
       <section id='donationPage'>
         <div className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "75vh" }}>
    
        <h1 className="text-center">
          Donation
        </h1>
        
      </div>
       </section>
    );
};

export default Donation;