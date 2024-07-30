import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          <img src="../assets/images/logo.png" width="128" height="63" alt="RevRescue home" />
        </a>

        <nav className={`navbar ${isNavOpen ? 'open' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li><a href="/" className="navbar-link">Home</a></li>
            <li><a href="/about" className="navbar-link">About</a></li>
            <li><a href="/services" className="navbar-link">Services</a></li>
            <li><a href="/projects" className="navbar-link">Projects</a></li>
            <li><a href="/contact" className="navbar-link">Contact</a></li>
          </ul>
        </nav>

        <a href="#" className="btn btn-primary">
          <span className="span">Get a Quote</span>
          <span className="material-symbols-rounded">arrow_forward</span>
        </a>

        <button className="nav-toggle-btn" aria-label="toggle menu" onClick={handleNavToggle} data-nav-toggler>
          <span className="nav-toggle-icon icon-1"></span>
          <span className="nav-toggle-icon icon-2"></span>
          <span className="nav-toggle-icon icon-3"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
