// This file renders the fixed navigation used to move smoothly through the page.
import scrollToSection from '../utils/scrollToSection';

function SiteHeader({ brand, navigation, activeSectionId, resume }) {
  return (
    <header className="site-header">
      <button
        type="button"
        className="brand-button"
        onClick={() => scrollToSection('hero')}
      >
        <span className="brand-mark">{brand}</span>
        <span className="brand-text">Portfolio</span>
      </button>

      <div className="header-actions">
        <nav className="header-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-button ${activeSectionId === item.id ? 'is-active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {resume?.url && (
          <a
            className="nav-resume-button"
            href={resume.url}
            download={resume.downloadName}
          >
            {resume.label}
          </a>
        )}
      </div>
    </header>
  );
}

export default SiteHeader;
