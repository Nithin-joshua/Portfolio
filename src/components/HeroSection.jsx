// This file renders the focused hero section fitting within the 1280x800 fold.
import { useState, useEffect } from 'react';
import scrollToSection from '../utils/scrollToSection';
import StrokeText from './StrokeText';

function HeroSection({ hero, links }) {
  const [fontSize, setFontSize] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 480) return 32;
      if (window.innerWidth < 768) return 42;
    }
    return 64;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) setFontSize(32);
      else if (window.innerWidth < 768) setFontSize(42);
      else setFontSize(64);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id={hero.id}
      className="hero-section is-visible"
    >
      <div className="hero-top">
        <div className="hero-copy">
          <div className="hero-text-block">
            {hero.availability && (
              <div className="hero-availability-row">
                <span className="availability-pill">
                  <span className="live-status-dot" aria-hidden="true" />
                  {hero.availability}
                </span>
              </div>
            )}

            <h1 className="hero-headline-title">
              <StrokeText
                text={hero.headline || 'Backend & AI Systems Engineer'}
                strokeColor="#93c5fd"
                fillColor="#ffffff"
                strokeWidth={1.4}
                drawDuration={1.4}
                fillDelay={0.15}
                stagger={0.035}
                ease="power2.out"
                trigger="loop"
                fillMode="wipe"
                wipeFrom="left"
                fontSize={fontSize}
                fontWeight={800}
                letterSpacing={fontSize < 48 ? -0.6 : -1.5}
                hoverRedraw={true}
              />
            </h1>

            {hero.intro && (
              <p className="hero-intro">{hero.intro}</p>
            )}
          </div>

          <div className="hero-cta-block">
            <div className="hero-actions">
              <button
                type="button"
                className="primary-button hero-cta-btn"
                onClick={() => scrollToSection(hero.secondaryAction?.target || 'contact')}
              >
                {hero.secondaryAction?.label || 'Get in Touch'}
              </button>

              {hero.resumeAction && (
                <a
                  className="secondary-button hero-cta-btn hero-resume-btn"
                  href={hero.resumeAction.url}
                  download={hero.resumeAction.downloadName}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="btn-icon"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <polyline points="9 15 12 18 15 15" />
                  </svg>
                  <span>{hero.resumeAction.label}</span>
                </a>
              )}
            </div>

            <div className="hero-link-row">
              {links
                .filter((link) => link.shortLabel !== 'Web')
                .map((link) => (
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
    </section>
  );
}

export default HeroSection;
