import React from 'react';

function SiteFooter({ logo, navigation = [], links = [], resume }) {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const githubUrl =
    links.find((l) => l.shortLabel === 'GitHub')?.url ||
    'https://github.com/Nithin-joshua';
  const linkedinUrl =
    links.find((l) => l.shortLabel === 'LinkedIn')?.url ||
    'https://www.linkedin.com/in/nithin-v-b13949198';
  const emailUrl =
    links.find((l) => l.shortLabel === 'Email')?.url ||
    'mailto:nithinjoshua005@gmail.com';
  const resumeUrl = resume?.url || '/Nithin_V_Resume.pdf';
  const resumeDownload = resume?.downloadName || 'Nithin_V_Resume.pdf';

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-inner">
        <div className="site-footer-top-row">
          <div className="site-footer-brand-block">
            <button
              type="button"
              className="footer-brand-btn"
              onClick={() => scrollTo('hero')}
              aria-label="Nithin V - Back to top"
            >
              <img
                src={logo?.src || '/logo-transparent.png'}
                alt={logo?.alt || 'Nithin V'}
                className="footer-signature-logo"
                loading="lazy"
              />
            </button>
            <p className="footer-brand-tagline">
              Backend &amp; Applied AI Systems Engineer
              <span className="footer-location-text">Bangalore, India</span>
            </p>
          </div>

          <nav className="footer-nav-grid" aria-label="Footer sitemap">
            <div className="footer-nav-col">
              <span className="footer-nav-heading">Navigation</span>
              <ul className="footer-nav-list">
                {navigation.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className="footer-nav-link"
                      onClick={() => scrollTo(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-nav-heading">Connect</span>
              <ul className="footer-nav-list">
                <li>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-nav-link"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-nav-link"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href={emailUrl} className="footer-nav-link">
                    Email ↗
                  </a>
                </li>
                <li>
                  <a
                    href={resumeUrl}
                    download={resumeDownload}
                    className="footer-nav-link"
                  >
                    Resume (PDF) ↗
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="site-footer-divider" aria-hidden="true" />

        <div className="site-footer-bottom-row">
          <p className="footer-copyright-text">
            &copy; {currentYear} {logo?.alt || 'Nithin V'}. All rights reserved.
          </p>
          <button
            type="button"
            className="footer-back-to-top-btn"
            onClick={() => scrollTo('hero')}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
