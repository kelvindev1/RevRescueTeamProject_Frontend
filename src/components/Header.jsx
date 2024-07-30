import React from 'react'
import "./Header.css"
import logo from '../assets/images/logo.png';
import 

function Header() {
  return (
    <div>
        <header className="header">
    <div className="container">

      <a href="#" className="logo">
        <img src={logo} width="128" height="63" alt="autofix home" />
      </a>

      <nav className="navbar" data-navbar>
        <ul className="navbar-list">

          <li>
            <a href="#" className="navbar-link">Home</a>
          </li>

          <li>
            <a href="#" className="navbar-link">About</a>
          </li>

          <li>
            <a href="#" className="navbar-link">Services</a>
          </li>

          <li>
            <a href="#" className="navbar-link">Projects</a>
          </li>

          <li>
            <a href="#" className="navbar-link">Contact</a>
          </li>

        </ul>
      </nav>

      <a href="#" className="btn btn-primary">
        <span className="span">Get a Quote</span>

        <span className="material-symbols-rounded">arrow_forward</span>
      </a>

      <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
        <span className="nav-toggle-icon icon-1"></span>
        <span className="nav-toggle-icon icon-2"></span>
        <span className="nav-toggle-icon icon-3"></span>
      </button>

    </div>
  </header>
      
    </div>
  )
}

export default Header
