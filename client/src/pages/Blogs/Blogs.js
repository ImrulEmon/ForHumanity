import React from 'react';
import { useTabtitle } from '../../hooks/useTabtitle';

const Blogs = () => {
  useTabtitle("Blogs")
    return (
      <div className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "75vh" }}>
    
        <h1 className="text-center">
          Blogs
        </h1>
        
      </div>
    );
};

export default Blogs;