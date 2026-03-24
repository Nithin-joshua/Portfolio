// This file renders the site-wide footer with a compact design.
import React from 'react';

function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-info">
          <span className="footer-info-item">Based in Bangalore</span>
          <span className="footer-info-item">Fullstack & AI/ML</span>
          <span className="footer-info-item">React • Vite • Node.js</span>
        </div>
        <p className="footer-note">
          Portfolio website by Nithin V &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
