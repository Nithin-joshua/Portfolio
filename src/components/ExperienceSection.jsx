// This file renders internship cards with an interactive glassmorphic fan-out deck.
import { useState, useRef } from 'react';
import SectionShell from './SectionShell';
import formatDateRange from '../utils/formatDateRange';

function RoleCard({ role, index, total, isActive, onCardClick }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisible = 3;
  const hasMore = role.bullets && role.bullets.length > maxVisible;
  const visibleBullets = isExpanded ? role.bullets : role.bullets.slice(0, maxVisible);

  // Rotation formula: spreads cards evenly around center (-6deg, 0deg, 6deg for 3 cards)
  const rotation = total > 1 ? ((index - (total - 1) / 2) * 6).toFixed(1) : 0;
  const zIndex = index + 1;

  return (
    <article
      className={`deck-glass-card panel ${isActive ? 'is-active-card' : ''} ${isExpanded ? 'is-card-expanded' : ''}`}
      style={{
        '--r': `${rotation}`,
        '--z': zIndex,
      }}
      data-text={role.company}
      onClick={(e) => {
        e.stopPropagation();
        onCardClick();
      }}
    >
      <div className="role-top">
        <div className="role-title-block">
          <h3 className="role-title">{role.role}</h3>
          <p className="role-company">{role.company}</p>
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
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>
    </article>
  );
}

function ExperienceSection({ experience }) {
  const scrollRef = useRef(null);
  const [isSeparated, setIsSeparated] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const scrollSettleTimer = useRef(null);
  const isInteracting = useRef(false);
  const hasScrolledAway = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const startScrollLeft = useRef(0);
  const hasMoved = useRef(false);

  // Monitor horizontal scroll: separate when scrolled past origin, return to fan when settled back at start
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const currentScroll = scrollRef.current.scrollLeft;

    if (currentScroll > 25) {
      hasScrolledAway.current = true;
      clearTimeout(scrollSettleTimer.current);
      if (!isSeparated) setIsSeparated(true);
    } else {
      // Near origin (scrollLeft <= 25)
      clearTimeout(scrollSettleTimer.current);
      // Only auto-fold if the user had previously scrolled away through the cards and returned to start
      if (!isInteracting.current && hasScrolledAway.current) {
        scrollSettleTimer.current = setTimeout(() => {
          if (scrollRef.current && scrollRef.current.scrollLeft <= 25) {
            hasScrolledAway.current = false;
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            setIsSeparated(false);
            setActiveCardIndex(null);
          }
        }, 450);
      }
    }
  };

  // --- Mouse / Pointer Drag Handlers (Desktop) ---
  const handlePointerDown = (e) => {
    if (e.pointerType === 'touch') return; // Handled natively by touch events
    if (e.button && e.button !== 0) return;
    isInteracting.current = true;
    hasMoved.current = false;
    startX.current = e.clientX;
    startScrollLeft.current = scrollRef.current ? scrollRef.current.scrollLeft : 0;
    clearTimeout(scrollSettleTimer.current);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback if pointer capture unsupported
    }
  };

  const handlePointerMove = (e) => {
    if (e.pointerType === 'touch') return;
    if (!isInteracting.current || !scrollRef.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 6) {
      hasMoved.current = true;
      if (!isSeparated) setIsSeparated(true);
      scrollRef.current.scrollLeft = startScrollLeft.current - dx;
    }
  };

  const handlePointerUp = (e) => {
    if (e.pointerType === 'touch') return;
    isInteracting.current = false;
    try {
      if (e.currentTarget?.hasPointerCapture?.(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Fallback
    }

    const moved = hasMoved.current;
    setTimeout(() => {
      hasMoved.current = false;
    }, 60);

    // Only if the user actually dragged back to near origin, return to fan mode
    if (moved && scrollRef.current && scrollRef.current.scrollLeft <= 25) {
      clearTimeout(scrollSettleTimer.current);
      scrollSettleTimer.current = setTimeout(() => {
        if (scrollRef.current && scrollRef.current.scrollLeft <= 25) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          setIsSeparated(false);
          setActiveCardIndex(null);
        }
      }, 450);
    }
  };

  // --- Touch Swipe Handlers (Mobile) ---
  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    isInteracting.current = true;
    hasMoved.current = false;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    startScrollLeft.current = scrollRef.current ? scrollRef.current.scrollLeft : 0;
    clearTimeout(scrollSettleTimer.current);
  };

  const handleTouchMove = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const dx = e.touches[0].clientX - startX.current;
    const dy = e.touches[0].clientY - startY.current;

    // Detect horizontal swipe
    if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
      hasMoved.current = true;
      if (!isSeparated) {
        setIsSeparated(true);
      }
    }
  };

  const handleTouchEnd = () => {
    isInteracting.current = false;
    const moved = hasMoved.current;
    setTimeout(() => {
      hasMoved.current = false;
    }, 80);

    // Only if user actively swiped back to near origin, return to fan mode
    if (moved && scrollRef.current && scrollRef.current.scrollLeft <= 25) {
      clearTimeout(scrollSettleTimer.current);
      scrollSettleTimer.current = setTimeout(() => {
        if (scrollRef.current && scrollRef.current.scrollLeft <= 25) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          setIsSeparated(false);
          setActiveCardIndex(null);
        }
      }, 450);
    }
  };

  const handleCardClick = (idx) => {
    if (hasMoved.current) return;
    clearTimeout(scrollSettleTimer.current);

    if (isSeparated) {
      if (activeCardIndex === idx && scrollRef.current?.scrollLeft <= 25) {
        // Tapping active card at start folds back to fan mode
        hasScrolledAway.current = false;
        scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
        setIsSeparated(false);
        setActiveCardIndex(null);
        return;
      }
      setActiveCardIndex(idx);
    } else {
      // In fan mode: tapping any card separates the deck and selects the card
      setIsSeparated(true);
      setActiveCardIndex(idx);
    }
  };

  return (
    <SectionShell
      id={experience.id}
      kicker={experience.kicker}
      title={experience.title}
      intro={experience.intro}
    >
      <div className="experience-deck-wrapper">
        <div
          ref={scrollRef}
          className={`experience-deck-container ${isSeparated ? 'is-separated' : ''}`}
          onScroll={handleScroll}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onClick={() => {
            if (hasMoved.current) return;
            if (!isSeparated) {
              setIsSeparated(true);
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
