// This file renders the responsive header: logo left, desktop centered dock, and mobile hamburger drawer.
import { useState, useEffect } from 'react';
import scrollToSection from '../utils/scrollToSection';

function SiteHeader({ logo, navigation, activeSectionId, resume }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header className="site-header-wrapper">
        <div className="header-left">
          <button
            type="button"
            className="brand-standalone-btn"
            onClick={() => handleNavClick('hero')}
            aria-label="Nithin V - Back to top"
          >
            <div className="signature-brand-wrapper">
              <img
                src={logo?.src || '/logo-transparent.png'}
                alt="Nithin V"
                className="standalone-signature-logo"
              />
              <div className="signature-light-beam" aria-hidden="true" />
            </div>
          </button>
        </div>

        {/* Desktop Navigation Dock (Hidden on mobile) */}
        <div className="header-center desktop-nav-center">
          <nav className="floating-nav-dock" aria-label="Primary navigation">
            <div className="nav-dock-links">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`nav-dock-btn ${activeSectionId === item.id ? 'is-active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Desktop Header Right CTA */}
        <div className="header-right desktop-nav-right">
          {resume?.url && (
            <a
              href={resume.url}
              download={resume.downloadName}
              className="header-resume-cta"
            >
              Resume <span className="header-resume-arrow">↓</span>
            </a>
          )}
        </div>

        {/* Mobile Hamburger Button (Hidden on desktop) */}
        <div className="mobile-toggle-wrapper">
          <button
            type="button"
            className={`mobile-menu-toggle ${isOpen ? 'is-active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
          >
            <svg
              className="hamburger-icon-svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen / Slide-Down Menu Drawer */}
      <div
        className={`mobile-menu-drawer ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <div className="signature-brand-wrapper">
              <img
                src={logo?.src || '/logo-transparent.png'}
                alt="Nithin V"
                className="mobile-drawer-logo"
              />
              <div className="signature-light-beam" aria-hidden="true" />
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="mobile-nav-list">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`mobile-nav-item ${activeSectionId === item.id ? 'is-active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.label}</span>
                <span className="mobile-nav-arrow">→</span>
              </button>
            ))}
          </nav>

          {resume?.url && (
            <div className="mobile-menu-footer">
              <a
                className="mobile-resume-btn"
                href={resume.url}
                download={resume.downloadName}
                onClick={() => setIsOpen(false)}
              >
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SiteHeader;
