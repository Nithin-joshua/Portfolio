// This file renders the balanced 3-column header: logo on the left, centered nav dock, resume on the right.
import scrollToSection from '../utils/scrollToSection';

function SiteHeader({ logo, navigation, activeSectionId, resume }) {
  return (
    <header className="site-header-wrapper">
      <div className="header-left">
        <button
          type="button"
          className="brand-standalone-btn"
          onClick={() => scrollToSection('hero')}
          aria-label="Nithin V - Back to top"
        >
          <img
            src={logo?.src || '/logo-transparent.png'}
            alt="Nithin V"
            className="standalone-signature-logo"
          />
        </button>
      </div>

      <div className="header-center">
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

      <div className="header-right" aria-hidden="true" />
    </header>
  );
}

export default SiteHeader;
