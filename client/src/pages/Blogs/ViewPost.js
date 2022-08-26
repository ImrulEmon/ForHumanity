import React, { useEffect, useState } from 'react';
import { useTabtitle } from '../../hooks/useTabtitle';
import SingleBlog from './SingleBlog';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import './ViewPost.css';
import { HashLink } from 'react-router-hash-link';

const ViewPost = () => {
    useTabtitle('View Blogs');
    const [blogs,setBlogs]=useState([]);
    const [load,setLoad]=useState(true);
    

    useEffect(()=>{
      fetch('https://forhumanity-server.herokuapp.com/blog')
      .then(res=>res.json())
      .then(data=>{setBlogs(data)
        setLoad(false);
      })
    },[])
    if(load){
        return <div style={{ minHeight: "100vh" }}>
            <LoadingSpinner />
        </div>
    }
    return (
        <div id='top' style={{ minHeight: "100vh" }}>
            <h1>Total Post : {blogs?.length}</h1>
            <hr />
          
            {
                blogs.map(blog=><SingleBlog key={blog._id} blog={blog}></SingleBlog>
                )
            }
             <HashLink id='fixedbutton' className='btn btn-dark' to='#top'><i className="fas fa-arrow-up mx-2" > Go Top</i></HashLink>
        </div>
    );
};

export default ViewPost;