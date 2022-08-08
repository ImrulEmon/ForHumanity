import React from 'react'
import { useTabtitle } from '../../hooks/useTabtitle';
const About = () => {
  useTabtitle("About Us")
  return (
    <div className="container" style={{minHeight:"75vh"}}>
    
      <h1 className="text-center" style={{paddingTop: "5%"}}>
        About
      </h1>
      
    </div>
  )
}
export default About;