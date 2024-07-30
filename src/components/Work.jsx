import React from 'react';
import './Work.css'; // Create and import your CSS file

const Work = () => (
  <section className="section work" aria-labelledby="work-label">
    <div className="container">
      <p className="section-subtitle :light" id="work-label">Our Work</p>
      <h2 className="h2 section-title">Latest projects we have done</h2>
      <ul className="has-scrollbar">
        <li className="scrollbar-item">
          <div className="work-card">
            <figure className="card-banner img-holder" style={{ '--width': 350, '--height': 406 }}>
              <img src="src/assets/images/work-1.jpg" width="350" height="406" loading="lazy" alt="Engine Repair" className="img-cover" />
            </figure>
            <div className="card-content">
              <p className="card-subtitle">Auto Repair</p>
              <h3 className="h3 card-title">Engine Repair</h3>
              <a href="#" className="card-btn">
                <span className="material-symbols-rounded">arrow_forward</span>
              </a>
            </div>
          </div>
        </li>
        <li className="scrollbar-item">
          <div className="work-card">
            <figure className="card-banner img-holder" style={{ '--width': 350, '--height': 406 }}>
              <img src="src/assets/images/work-2.jpg" width="350" height="406" loading="lazy" alt="Car Tyre change" className="img-cover" />
            </figure>
            <div className="card-content">
              <p className="card-subtitle">Auto Repair</p>
              <h3 className="h3 card-title">Car Tyre change</h3>
              <a href="#" className="card-btn">
                <span className="material-symbols-rounded">arrow_forward</span>
              </a>
            </div>
          </div>
        </li>
        <li className="scrollbar-item">
          <div className="work-card">
            <figure className="card-banner img-holder" style={{ '--width': 350, '--height': 406 }}>
              <img src="src/assets/images/work-3.jpg" width="350" height="406" loading="lazy" alt="Battery Adjust" className="img-cover" />
            </figure>
            <div className="card-content">
              <p className="card-subtitle">Auto Repair</p>
              <h3 className="h3 card-title">Battery Adjust</h3>
              <a href="#" className="card-btn">
                <span className="material-symbols-rounded">arrow_forward</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Work;
