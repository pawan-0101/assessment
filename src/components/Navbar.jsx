import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <span className="v-logo">V</span>Films
        </Link>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/Services">Services</Link>
        <Link to="/their-stories">Their Stories</Link>
        <Link to="/our-story">Our Story</Link>
        <Link to="/varnan">Varnan</Link>
        <Link to="/contact" className="lets-talk">
          Contact <span className="mail-icon">✉</span>
        </Link>
        <button 
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;