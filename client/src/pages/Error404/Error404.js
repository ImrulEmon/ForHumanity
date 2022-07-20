import React from 'react';
import { useTabtitle } from '../../hooks/useTabtitle';

const Error404 = () => {
  useTabtitle("Error404")
    return (
        <div className="container">
    
        <h1 className="text-center" style={{paddingTop: "30%"}}>
         Error404:Not Found!
        </h1>
        
      </div>
    );
};

export default Error404;