// This file renders the unified Contact section and site footer with the interactive directional clip-path links grid.
import React, { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import scrollToSection from '../utils/scrollToSection';

const NO_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
const BOTTOM_RIGHT_CLIP = 'polygon(0 0, 100% 0, 0 0, 0% 100%)';
const TOP_RIGHT_CLIP = 'polygon(0 0, 0 100%, 100% 100%, 0% 100%)';
const BOTTOM_LEFT_CLIP = 'polygon(100% 100%, 100% 0, 100% 100%, 0 100%)';
const TOP_LEFT_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 100% 0)';

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

function LinkBox({ title, subtitle, icon, href, isAction = false, onClick, download }) {
  const overlayRef = useRef(null);

  const getNearestSide = (clientX, clientY, currentTarget) => {
    const box = currentTarget.getBoundingClientRect();
    const proximityToLeft = {
      proximity: Math.abs(box.left - clientX),
      side: 'left',
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - clientX),
      side: 'right',
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - clientY),
      side: 'top',
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - clientY),
      side: 'bottom',
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const triggerEntrance = (clientX, clientY, currentTarget) => {
    if (!overlayRef.current) return;
    const side = getNearestSide(clientX, clientY, currentTarget);

    overlayRef.current.animate(
      [
        { clipPath: ENTRANCE_KEYFRAMES[side][0] },
        { clipPath: ENTRANCE_KEYFRAMES[side][1] },
      ],
      {
        duration: 320,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards',
      }
    );
  };

  const triggerExit = (clientX, clientY, currentTarget) => {
    if (!overlayRef.current) return;
    const side = getNearestSide(clientX, clientY, currentTarget);

    overlayRef.current.animate(
      [
        { clipPath: EXIT_KEYFRAMES[side][0] },
        { clipPath: EXIT_KEYFRAMES[side][1] },
      ],
      {
        duration: 320,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards',
      }
    );
  };

  const handleMouseEnter = (e) => triggerEntrance(e.clientX, e.clientY, e.currentTarget);
  const handleMouseLeave = (e) => triggerExit(e.clientX, e.clientY, e.currentTarget);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      triggerEntrance(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget);
    }
  };

  const handleTouchEnd = (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      const clientX = e.changedTouches[0].clientX;
      const clientY = e.changedTouches[0].clientY;
      const target = e.currentTarget;
      setTimeout(() => {
        triggerExit(clientX, clientY, target);
      }, 350);
    }
  };

  const Component = isAction ? 'button' : 'a';
  const props = isAction
    ? { type: 'button', onClick }
    : {
        href,
        target: href?.startsWith('http') ? '_blank' : undefined,
        rel: href?.startsWith('http') ? 'noreferrer' : undefined,
        download,
        onClick,
      };

  return (
    <Component
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className="footer-clip-box"
    >
      {/* Resting dark glass layer */}
      <div className="clip-box-content clip-box-base">
        <div className="clip-box-icon">{icon}</div>
        <div className="clip-box-text">
          <span className="clip-box-title">{title}</span>
          {subtitle && <span className="clip-box-subtitle">{subtitle}</span>}
        </div>
      </div>

      {/* Directional reveal overlay: high-contrast white card */}
      <div
        ref={overlayRef}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="clip-box-content clip-box-overlay"
        aria-hidden="true"
      >
        <div className="clip-box-icon">{icon}</div>
        <div className="clip-box-text">
          <span className="clip-box-title">{title}</span>
          {subtitle && <span className="clip-box-subtitle">{subtitle}</span>}
        </div>
        <span className="clip-box-arrow">{isAction ? '↑' : '↗'}</span>
      </div>
    </Component>
  );
}

function ContactSection({ contact, links = [], resume }) {
  const [sectionRef, isVisible] = useRevealOnScroll({ threshold: 0.1 });

  const githubUrl =
    links.find((l) => l.shortLabel === 'GitHub')?.url ||
    'https://github.com/Nithin-joshua';
  const linkedinUrl =
    links.find((l) => l.shortLabel === 'LinkedIn')?.url ||
    'https://www.linkedin.com/in/nithin-v-b13949198';
  const emailUrl =
    links.find((l) => l.shortLabel === 'Email')?.url ||
    'mailto:nithinjoshua005@gmail.com';
  const phoneUrl =
    contact?.methods?.find((m) => m.label === 'Phone')?.url ||
    'tel:+919620808444';
  const phoneDisplay =
    contact?.methods?.find((m) => m.label === 'Phone')?.value ||
    '+91 9620808444';
  const resumeUrl = resume?.url || '/Nithin_V_Resume.pdf';
  const resumeDownload = resume?.downloadName || 'Nithin_V_Resume.pdf';

  return (
    <section
      id={contact?.id || 'contact'}
      ref={sectionRef}
      className={`contact-section reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="contact-unified-wrapper">
        <div className="contact-header-block">
          <p className="section-kicker">{contact?.kicker || 'Contact & Portals'}</p>
          <h2 className="contact-main-title">Let&apos;s Connect</h2>
          <p className="contact-lead-note">
            {contact?.note ||
              'Open to full-time backend and applied AI engineering roles. Reach out directly through any portal below.'}
          </p>
        </div>

        {/* Direction-Aware ClipPath Links Grid */}
        <div className="footer-clip-links">
          {/* Row 1: 2 Main Gateway Portals */}
          <div className="clip-row-2">
            <LinkBox
              title="GitHub"
              subtitle="Repositories & Systems Code"
              href={githubUrl}
              icon={
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              }
            />

            <LinkBox
              title="LinkedIn"
              subtitle="Professional Career & Network"
              href={linkedinUrl}
              icon={
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
                </svg>
              }
            />
          </div>

          {/* Row 2: 4 Direct Outreach & Resource Portals */}
          <div className="clip-row-4">
            <LinkBox
              title="Email"
              subtitle="nithinjoshua005@gmail.com"
              href={emailUrl}
              icon={
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              }
            />

            <LinkBox
              title="Direct Call"
              subtitle={phoneDisplay}
              href={phoneUrl}
              icon={
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              }
            />

            <LinkBox
              title="Resume (PDF)"
              subtitle="Curriculum Vitae"
              href={resumeUrl}
              download={resumeDownload}
              icon={
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              }
            />

            <LinkBox
              title="Back to Top"
              subtitle="Return to Header"
              isAction={true}
              onClick={() => scrollToSection('hero')}
              icon={
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 4l-8 8h5v8h6v-8h5l-8-8z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
