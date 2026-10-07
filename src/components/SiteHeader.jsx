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
            <img
              src={logo?.src || '/logo-transparent.png'}
              alt="Nithin V"
              className="standalone-signature-logo"
            />
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

        {/* Mobile Hamburger Button (Hidden on desktop) */}
        <div className="header-right mobile-toggle-wrapper">
          <button
            type="button"
            className={`mobile-menu-toggle ${isOpen ? 'is-active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
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
            <img
              src={logo?.src || '/logo-transparent.png'}
              alt="Nithin V"
              className="mobile-drawer-logo"
            />
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
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
