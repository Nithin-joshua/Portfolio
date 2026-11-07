import React from 'react';

function SiteFooter({ logo }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-inner">
        <div className="footer-brand-side">
          <img
            src={logo?.src || '/logo-transparent.png'}
            alt={logo?.alt || 'Nithin V'}
            className="footer-signature-logo"
            loading="lazy"
          />
          <span className="footer-role-label">Backend &amp; Applied AI Systems Engineer</span>
        </div>

        <div className="footer-copyright-side">
          <p className="footer-copyright-text">
            &copy; {currentYear} {logo?.alt || 'Nithin V'}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
