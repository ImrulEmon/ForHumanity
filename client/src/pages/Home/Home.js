import React from 'react'
import { useTabtitle } from '../../hooks/useTabtitle';
import './Home.css';
const Home = () => {
useTabtitle('ForHumanity');
  return (
    <div className="text-center home" style={{ minHeight: "74vh" }}>
    
    <h1 className='fw-bolder' style={{paddingTop: "30%"}}>
      Home
    </h1>
    
  </div>
  )
}
export default Home;