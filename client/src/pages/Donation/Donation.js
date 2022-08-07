import React from 'react';
import { useTabtitle } from '../../hooks/useTabtitle';

const Donation = () => {
  useTabtitle("Donation")
    return (
        <div className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "75vh" }}>
    
        <h1 className="text-center">
          Donation
        </h1>
        
      </div>
    );
};

export default Donation;