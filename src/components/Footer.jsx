import React from 'react';
import './Footer.css'; // Ensure this file exists in the same directory

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="left-section">
          <img src="/src/assets/footer-shape-1.png" alt="car" className="car-image" />
        </div>
        <div className="right-section">
          <div className="logo">
            <h1>RevRescue</h1>
          </div>
          <div className="description">
            <p>
              Often, things happen due to necessary circumstances or because of the pleasures of indulgence, and the resulting problems are not always avoided.
            </p>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/yourprofile" aria-label="Facebook" className="social-icon bi bi-facebook" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://www.instagram.com/yourprofile" aria-label="Instagram" className="social-icon bi bi-instagram" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://twitter.com/yourprofile" aria-label="Twitter" className="social-icon bi bi-twitter" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
        <div className="opening-hours">
          <h2>Opening Hours</h2>
          <p>Monday - Saturday <span>12.00 - 14.45</span></p>
          <p>Sunday - Thursday <span>17.30 - 00.00</span></p>
          <p>Friday - Saturday <span>12.00 - 14.45</span></p>
        </div>
        <div className="contact-info">
          <h2>Contact Info</h2>
          <p>
            <a href="tel:+254792182559" className="contact-item">
              <i className="bi bi-telephone-forward-fill"></i> +254 792 182 559
            </a>
          </p>
          <p>
            <a href="mailto:info@reverescue.com" className="contact-item">
              <i className="bi bi-envelope-at-fill"></i> info@reverescue.com
            </a>
          </p>
          <p>
            <i className="bi bi-geo-alt"></i> 21 King Street Melbourne, 3000, Kakamega
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>@Copyright 2024, RevRescue. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
