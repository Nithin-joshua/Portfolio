// This file renders internship cards with an interactive glassmorphic fan-out deck.
import { useState, useRef } from 'react';
import SectionShell from './SectionShell';
import formatDateRange from '../utils/formatDateRange';

function RoleCard({ role, index, total, isActive, onCardClick }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisible = 3;
  const hasMore = role.bullets && role.bullets.length > maxVisible;
  const visibleBullets = isExpanded ? role.bullets : role.bullets.slice(0, maxVisible);

  // Rotation formula: spreads cards evenly around center (-9deg, 0deg, 9deg for 3 cards)
  const rotation = total > 1 ? ((index - (total - 1) / 2) * 9).toFixed(1) : 0;
  const zIndex = index + 1;

  return (
    <article
      className={`deck-glass-card panel ${isActive ? 'is-active-card' : ''} ${isExpanded ? 'is-card-expanded' : ''}`}
      style={{
        '--r': `${rotation}`,
        '--z': zIndex,
      }}
      data-text={role.company}
      onClick={onCardClick}
    >
      <div className="role-top">
        <div className="role-title-block">
          <p className="panel-kicker">{role.company}</p>
          <h3 className="role-title">{role.role}</h3>
        </div>

        <div className="role-date-block">
          <p className="role-date">{formatDateRange(role.start, role.end)}</p>
          <p className="role-location">{role.location}</p>
        </div>
      </div>

      <p className="role-summary">{role.summary}</p>

      <div className="role-badges">
        {role.tools.map((tool) => (
          <span key={tool} className="skill-pill muted-pill">
            {tool}
          </span>
        ))}
      </div>

      {/* Bullets: on mobile hidden when collapsed, shown when expanded */}
      <div className="role-bullets-wrapper">
        <ul className="role-list">
          {visibleBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        {hasMore && (
          <button
            type="button"
            className="role-toggle-btn desktop-toggle-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show less' : `Show more (${role.bullets.length - maxVisible} more)`}
          </button>
        )}
      </div>

      {/* Mobile-only expand toggle: small like projects in mobile view */}
      <button
        type="button"
        className="mobile-role-expand-btn"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Hide Details ▲' : 'View Details ▼'}
      </button>
    </article>
  );
}

function ExperienceSection({ experience }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isSeparated, setIsSeparated] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  // Pointer drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 12);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 12);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      if (!isSeparated) setIsSeparated(true);
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
      const step = isMobile ? 220 : 380;
      const offset = direction === 'left' ? -step : step;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
      setTimeout(checkScroll, 350);
    }
  };

  const toggleSeparation = () => {
    setIsSeparated((prev) => !prev);
    setTimeout(checkScroll, 100);
  };

  const handleCardClick = (idx) => {
    if (hasDragged.current) return;
    setActiveCardIndex(idx);
    if (!isSeparated) {
      setIsSeparated(true);
    }
    setTimeout(checkScroll, 100);
  };

  const handlePointerDown = (e) => {
    if (e.button && e.button !== 0) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX;
    startScrollLeft.current = scrollRef.current ? scrollRef.current.scrollLeft : 0;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.pageX - startX.current;
    if (Math.abs(dx) > 6) {
      hasDragged.current = true;
      if (!isSeparated) setIsSeparated(true);
      scrollRef.current.scrollLeft = startScrollLeft.current - dx;
      checkScroll();
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    setTimeout(() => {
      hasDragged.current = false;
    }, 50);
  };

  return (
    <SectionShell
      id={experience.id}
      kicker={experience.kicker}
      title={experience.title}
      intro={experience.intro}
    >
      <div className="experience-deck-wrapper">
        <div className="deck-hint-bar">
          <button
            type="button"
            className="deck-hint-badge"
            onClick={toggleSeparation}
            aria-label="Toggle card fanning"
          >
            <span className="deck-sparkle">✦</span>{' '}
            {isSeparated ? 'Cards separated · Tap to fan deck' : 'Tap or hover to separate · Scroll horizontal'}
          </button>
          <div className="deck-nav-buttons">
            <button
              type="button"
              className="deck-nav-btn"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              type="button"
              className="deck-nav-btn"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className={`experience-deck-container ${isSeparated ? 'is-separated' : ''}`}
          onScroll={checkScroll}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClick={() => {
            if (hasDragged.current) return;
            if (!isSeparated) {
              setIsSeparated(true);
              setTimeout(checkScroll, 100);
            }
          }}
        >
          <div className="experience-deck-track">
            {experience.roles.map((role, idx) => (
              <RoleCard
                key={`${role.company}-${role.role}`}
                role={role}
                index={idx}
                total={experience.roles.length}
                isActive={activeCardIndex === idx}
                onCardClick={() => handleCardClick(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default ExperienceSection;
