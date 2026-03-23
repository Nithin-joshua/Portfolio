// This file renders the site-wide footer.
import React from 'react';

function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-note">
          Portfolio website by Nithin V &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
