import React from "react";
import Header from "./images/Header.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <img className="header" src={Header} alt="Header" />
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
