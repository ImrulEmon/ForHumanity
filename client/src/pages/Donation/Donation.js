import React from 'react';
import { useTabtitle } from '../../hooks/useTabtitle';

const Donation = () => {
  useTabtitle("Donation")
    return (
        <div className="container">
    
        <h1 className="text-center" style={{paddingTop: "30%"}}>
          Donation
        </h1>
        
      </div>
    );
};

export default Donation;