import React from "react";

import airbnbLogo from '../assets/airbnb-logo.png'

import './styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar--logo" src={airbnbLogo} alt="airbnb logo" />
    </nav>
  )
}

export default Navbar