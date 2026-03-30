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
          {hero.availability && (
            <div className="hero-availability-row">
              <span className="availability-pill">{hero.availability}</span>
            </div>
          )}

          {hero.headline && <p className="hero-headline">{hero.headline}</p>}

          <h1 className="hero-title">
            {hero.titleLines.map((line) => (
              <span key={line} className="hero-title-line">
                {line}
              </span>
            ))}
          </h1>

          <p className="hero-intro">{hero.intro}</p>

          <div className="hero-actions">
            {hero.primaryAction.url ? (
              <a
                className="primary-button"
                href={hero.primaryAction.url}
                download={hero.primaryAction.downloadName}
              >
                {hero.primaryAction.label}
              </a>
            ) : (
              <button
                type="button"
                className="primary-button"
                onClick={() => scrollToSection(hero.primaryAction.target)}
              >
                {hero.primaryAction.label}
              </button>
            )}

            <button
              type="button"
              className="secondary-button"
              onClick={() => scrollToSection(hero.secondaryAction.target)}
            >
              {hero.secondaryAction.label}
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

            <div className="preview-corner">NV</div>
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

              <div className="preview-quote">
                <p>{hero.board.quote}</p>
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

              {hero.board.secondaryFeature && (
                <div className="project-card-subfeature">
                  <div className="project-card-subfeature-head">
                    <p className="panel-kicker">{hero.board.secondaryFeature.label}</p>
                    {hero.board.secondaryFeature.status && (
                      <span className="project-inline-status">
                        {hero.board.secondaryFeature.status}
                      </span>
                    )}
                  </div>

                  <h4 className="project-card-subtitle">
                    {hero.board.secondaryFeature.title}
                  </h4>
                  <p className="project-card-subtext">
                    {hero.board.secondaryFeature.text}
                  </p>

                  {hero.board.secondaryFeature.tags && (
                    <div className="project-card-tags">
                      {hero.board.secondaryFeature.tags.map((tag) => (
                        <span key={tag} className="project-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="preview-stats">
            {hero.board.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
