import React from "react";
import Header from "./images/Header.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <img className="header" src={Header} alt="Header" />
      <div className="navbar-links">
        <div className='navLink'><Link to="/">Home</Link></div>
        <div className='navLink'><Link to="/profile">Profile</Link></div>
        <div className='navLink'><Link to="/about">About</Link></div>
        <div className='navLink'><Link to="/contact">Contact</Link></div>
      </div>
    </div>
  );
}
