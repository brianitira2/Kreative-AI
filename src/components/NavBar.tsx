import React from "react";
import { RiHomeSmileFill } from "react-icons/ri";

import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="initial-gradient-backdrop"></div>

      <div className="nav-bar">
        <RiHomeSmileFill className="nav-bar-icon1" />
        <h1 className="nav-bar-title">Kreative</h1>
      </div>
    </>
  );
};

export default NavBar;
