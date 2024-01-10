import React from "react";

import "./NavBar.css";

import { GoHomeFill } from "react-icons/go";
import { CiChat2 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";




const NavBar = () => {
  return (
    <>
      <div className="initial-gradient-backdrop"></div>

      <div className="nav-bar">
      <GoHomeFill className="home-icon"/> 
     
        <h1 className="nav-bar-title"> Kreative</h1>


        <div className="nav-bar-right">

        <CiChat2 className="chat-icon" />

          <h1 className="chat-text">Chat</h1>
          <FaRegUser className="user-icon" />
          <h1 className="user-text">User</h1>

        </div>
       
      </div>


  
    </>
  );
};

export default NavBar;


