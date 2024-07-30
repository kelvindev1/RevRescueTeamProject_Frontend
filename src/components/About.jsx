import React from 'react';
import './About.css'; 

const About = () => (
  <section className="section about has-before" aria-labelledby="about-label">
    <div className="container">
      <figure className="about-banner">
        <img src="/assets/images/about-banner.png" width="540" height="540" loading="lazy" alt="vehicle repair equipments" className="w-100" />
      </figure>
      <div className="about-content">
        <p className="section-subtitle :dark">About Us</p>
        <h2 className="h2 section-title">We’re Committed to Meet the quality</h2>
        <p className="section-text">Rev_Rescue is an Automotive repair company committed to delivering the best repair services to our customers.</p>
        <p className="section-text">Our team consists of experienced engineers, mechanics, and technicians who have been working together for over 20 years, therefore, we guarantee our best services.</p>
        <ul className="about-list">
          <li className="about-item">
            <p><strong className="display-1 strong">8K+</strong> Happy Clients</p>
          </li>
          <li className="about-item">
            <p><strong className="display-1 strong">22+</strong> Instruments</p>
          </li>
          <li className="about-item">
            <p><strong className="display-1 strong">50+</strong> Years in market</p>
          </li>
          <li className="about-item">
            <p><strong className="display-1 strong">99%</strong> Projects completed</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
