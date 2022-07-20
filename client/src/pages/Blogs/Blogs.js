import React from 'react';
import { useTabtitle } from '../../hooks/useTabtitle';

const Blogs = () => {
  useTabtitle("Blogs")
    return (
        <div className="container">
    
        <h1 className="text-center" style={{paddingTop: "30%"}}>
          Blogs
        </h1>
        
      </div>
    );
};

export default Blogs;