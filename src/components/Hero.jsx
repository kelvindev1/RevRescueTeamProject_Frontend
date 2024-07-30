import React from 'react';
import './Hero.css'; // Create and import your CSS file

const Hero = () => (
  <section className="hero has-bg-image" aria-label="home" style={{ backgroundImage: "url('src/assets/images/hero-bg.jpg')" }}>
    <div className="container">
      <div className="hero-content">
        <p className="section-subtitle :dark">We have talented engineers & mechanics</p>
        <h1 className="h1 section-title">Auto Maintenance & Repair Service</h1>
        <p className="section-text">We guarantee our customers fast and efficient car repair and maintenance</p>
        <a href="#" className="btn">
          <span className="span">Our Services</span>
          <span className="material-symbols-rounded">arrow_forward</span>
        </a>
      </div>
      <figure className="hero-banner" style={{ '--width': 1228, '--height': 789 }}>
        <img src="src/assets/images/hero-banner.png" width="1228" height="789" alt="red motor vehicle" className="move-anim" />
      </figure>
    </div>
  </section>
);

export default Hero;
