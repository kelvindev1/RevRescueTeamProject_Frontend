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
              <img src="src/assets/images/services-1.png" width="110" height="110" loading="lazy" alt="Engine Repair" />
            </figure>
            <h3 className="h3 card-title">Engine Repair</h3>
            <p className="card-text">Have a problem with your engine? Get it fixed in minutes by our skilled Automotive engineers</p>
            <a href="#" className="btn-link">Read more</a>
          </div>
        </li>
        <li>
              <div className="service-card">

                <figure className="card-icon">
                  <img src="src/assets/images/services-2.png" width="110" height="110" loading="lazy" alt="Brake Repair"></img>
                </figure>

                <h3 className="h3 card-title">Brake Repair</h3>

                <p className="card-text">
                   we've all experienced brake failures; sometimes not in places we wish to experince it.
                   Our teams at Rev_Rescue are determined to fix it and get your brake problems sorted.
                </p>

                <a href="#" className="btn-link">Read more</a>

              </div>
            </li>

            <li>
              <div className="service-card">

                <figure className="card-icon">
                  <img src="src/assets/images/services-3.png" width="110" height="110" loading="lazy" alt="Tire Repair"></img>
                </figure>

                <h3 className="h3 card-title">Tire Repair</h3>

                <p className="card-text">
                  Tire punctures and flats can be stressull, especially when you are in a rush. Get it fixed in minutes at Rev_Rescue
                </p>

                <a href="#" className="btn-link">Read more</a>

              </div>
            </li>

            <li>
              <div className="service-card">

                <figure className="card-icon">
                  <img src="src/assets/images/services-4.png" width="110" height="110" loading="lazy"
                    alt="Battery Repair"></img>
                </figure>

                <h3 className="h3 card-title">Battery Repair</h3>

                <p className="card-text">
                  Our teams are determined to give high quality battery replacements for your vehicles. 
                </p>

                <a href="#" className="btn-link">Read more</a>

              </div>
            </li>

            <li className="service-banner">
              <img src="src/assets/images/services-5.png" width="646" height="380" loading="lazy" alt="Red Car"
                className="move-anim"></img>
            </li>

            <li>
              <div className="service-card">

                <figure className="card-icon">
                  <img src="src/assets/images/services-6.png" width="110" height="110" loading="lazy"
                    alt="Steering Repair"></img>
                </figure>

                <h3 className="h3 card-title">Steering Repair</h3>

                <p className="card-text">
                  We are dedicated to providing the best possible steering solutions for your vehicles.
                </p>

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
