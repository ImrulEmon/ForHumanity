import React, { useEffect, useState } from 'react';
import { useTabtitle } from '../../hooks/useTabtitle';

const ViewPost = () => {
    useTabtitle('View Blogs');
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
      fetch('https://forhumanity-server.herokuapp.com/blog')
      .then(res=>res.json())
      .then(data=>setBlogs(data))
    },[])
    return (
        <div style={{ minHeight: "75vh" }}>
            <h1>Total blogs : {blogs?.length}</h1>
        </div>
    );
};

export default ViewPost;