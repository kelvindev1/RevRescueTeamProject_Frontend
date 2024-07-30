import React from 'react';
import './Service.css'; // Create and import your CSS file

const Service = () => (
  <section className="section service has-bg-image" aria-labelledby="service-label" style={{ backgroundImage: "url('src/assets/images/service-bg.jpg')" }}>
    <div className="container">
      <p className="section-subtitle :light" id="service-label">Our services</p>
      <h2 className="h2 section-title">We Provide Great Services For your Vehicle, wherever and whenever around the country</h2>
      <ul className="service-list">
        {/* Repeat this block for each service */}
        <li>
          <div className="service-card">
            <figure className="card-icon">
              <img src="/assets/images/services-1.png" width="110" height="110" loading="lazy" alt="Engine Repair" />
            </figure>
            <h3 className="h3 card-title">Engine Repair</h3>
            <p className="card-text">Have a problem with your engine? Get it fixed in minutes by our skilled Automotive engineers</p>
            <a href="#" className="btn-link">Read more</a>
          </div>
        </li>
        {/* End of repeat block */}
      </ul>
      <a href="#" className="btn">
        <span className="span">View All Services</span>
        <span className="material-symbols-rounded">arrow_forward</span>
      </a>
    </div>
  </section>
);

export default Service;
