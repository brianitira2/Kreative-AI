import React from 'react'

import robotImage from '../assets/brainsvg.svg';

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">

    <div className="hero-section-left">
    <span className="kreative-span">
    Kreative ai- for
      </span><br></br> 
      <span className="coding-span">coding</span>
      <span className="kreative-span">,
       </span>
      <span className="creation-span">content</span><br></br> <span className="creation-span">creation</span> 
     <span className="kreative-span"> and </span>
      <br></br> 
      <span className="more-span">more</span>
    </div>
    <div className="hero-section-right">


    <img src={robotImage} alt="robot image" className='robot-image'/>

    
    </div>

  </div>
  )
}

export default Hero