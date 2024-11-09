import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // For navigation
import '../styles/NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // state to control the menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="NavBar">
      <div className="NavBar-brand">
        <Link to="/" className="NavBar-logo">
          <img src="./images/logo-light.svg" alt="MishiPay Logo" className="logo" />
        </Link>
      </div>

      <div className="NavBar-toggle" onClick={toggleMenu}>
        <span className="NavBar-icon"></span>
        <span className="NavBar-icon"></span>
        <span className="NavBar-icon"></span>
      </div>

      <ul className={`NavBar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
