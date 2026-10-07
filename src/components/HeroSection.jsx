// This file renders the opening section with the oversized headline and preview board.
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import scrollToSection from '../utils/scrollToSection';

function HeroSection({ hero, links }) {
  const [sectionRef, isVisible] = useRevealOnScroll({
    threshold: 0.08,
    once: false, // Re-trigger when scrolling back
  });

  return (
    <section
      id={hero.id}
      ref={sectionRef}
      className={`hero-section reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="hero-top">
        <div className="hero-copy">
          <div className="hero-text-block">
            {hero.availability && (
              <div className="hero-availability-row">
                <span className="availability-pill">
                  <span className="live-status-dot" />
                  {hero.availability}
                </span>
              </div>
            )}

            <h1 className="hero-headline-title">
              {hero.headline || 'Backend & AI Systems Engineer'}
            </h1>

            {hero.subtext && (
              <p className="hero-subtext">{hero.subtext}</p>
            )}

            {hero.intro && (
              <p className="hero-intro desktop-only-text">{hero.intro}</p>
            )}
          </div>

          <div className="hero-cta-block">
            <div className="hero-actions">
              <button
                type="button"
                className="primary-button hero-cta-btn"
                onClick={() => scrollToSection(hero.primaryAction?.target || 'projects')}
              >
                {hero.primaryAction?.label || 'View Projects'}
              </button>

              <button
                type="button"
                className="secondary-button hero-cta-btn"
                onClick={() => scrollToSection(hero.secondaryAction?.target || 'contact')}
              >
                {hero.secondaryAction?.label || 'Contact'}
              </button>
            </div>

            <div className="hero-link-row">
              {links.map((link) => (
                <a
                  key={link.label}
                  className="link-pill"
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.shortLabel}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-board panel">
        <div className="preview-shell">
          <div className="preview-topbar">
            <div className="preview-name">{hero.board.cardTitle}</div>

            <div className="preview-nav">
              {hero.board.sectionTabs.map((tab) => (
                <span key={tab} className="preview-tab">
                  {tab}
                </span>
              ))}
            </div>

            <div className="preview-corner">ARCH</div>
          </div>

          <div className="preview-grid">
            <div className="preview-copy">
              <div>
                <p className="panel-kicker">{hero.board.cardLabel}</p>
                <h2 className="preview-title">{hero.board.cardTitle}</h2>
                <p className="preview-description">{hero.board.cardText}</p>
              </div>

              <div className="preview-cta-row">
                <button
                  type="button"
                  className="preview-pill-button"
                  onClick={() => scrollToSection('projects')}
                >
                  {hero.board.featureAction}
                </button>

                <span className="preview-arrow">-&gt;</span>
              </div>
            </div>

            <div className="preview-project-card">
              <div className="preview-orbit orbit-one" />
              <div className="preview-orbit orbit-two" />
              <p className="panel-kicker">{hero.board.featureLabel}</p>
              <h3 className="project-card-title">{hero.board.featureTitle}</h3>
              <p className="project-card-text">{hero.board.featureText}</p>

              {hero.board.featureTags && (
                <div className="project-card-tags">
                  {hero.board.featureTags.map((tag) => (
                    <span key={tag} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
