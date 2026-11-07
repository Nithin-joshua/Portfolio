import { useState, useEffect } from 'react';
import SectionShell from './SectionShell';
import formatDateRange from '../utils/formatDateRange';

function MobileProjectCard({ proj }) {
  const [expanded, setExpanded] = useState(false);
  const liveLink = proj.liveUrl || proj.link || proj.website;

  return (
    <article className="panel mobile-project-card">
      <div className="mobile-project-header">
        <h3 className="mobile-project-title">{proj.name}</h3>
        <div className="mobile-project-actions">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="mobile-project-link-btn live"
              aria-label="Live Demo Website"
            >
              Live Demo
            </a>
          )}
          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noreferrer"
              className="mobile-project-link-btn"
              aria-label="GitHub Repository"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      <p className="mobile-project-summary">{proj.description}</p>

      <div className="mobile-project-chips">
        {proj.stack.map((tech) => (
          <span key={tech} className="tech-badge-chip">
            {tech}
          </span>
        ))}
      </div>

      <button
        type="button"
        className="mobile-project-expand-btn"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? 'Hide Architecture & Workflow' : 'View Architecture & Workflow'}
      </button>

      {expanded && (
        <div className="mobile-project-details">
          {proj.videoUrl && (
            <div className="mobile-project-video-wrap">
              <video
                src={proj.videoUrl}
                controls
                playsInline
                preload="none"
                className="mobile-project-video"
              />
            </div>
          )}

          {proj.steps?.length > 0 && (
            <div className="mobile-project-pipeline">
              <p className="pipeline-mini-title">Pipeline Workflow</p>
              <div className="mobile-pipeline-chips">
                {proj.steps.map((st, i) => (
                  <span key={st} className="pipeline-step-chip">
                    {i + 1}. {st}
                  </span>
                ))}
              </div>
            </div>
          )}

          <ul className="role-list project-list">
            {proj.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function ProjectsSection({ projects }) {
  const { list = [] } = projects;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeProject = list[activeIndex] || list[0];

  useEffect(() => {
    setActiveStepIndex(0);
  }, [activeIndex]);

  useEffect(() => {
    if (!activeProject?.steps?.length) return;
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % activeProject.steps.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [activeIndex, activeProject?.steps?.length]);

  if (!activeProject) return null;

  return (
    <SectionShell
      id={projects.id}
      kicker={projects.kicker}
      title={projects.title}
      intro={projects.intro}
    >
      {/* Mobile Single-Column Project Cards (<768px) */}
      <div className="mobile-projects-container">
        {list.map((proj) => (
          <MobileProjectCard key={proj.name} proj={proj} />
        ))}
      </div>

      {/* Desktop Interactive Tabbed View (>=768px) */}
      <div className="desktop-projects-container">
        {/* Project Selector Tabs */}
        <div className="project-tabs" role="tablist" aria-label="Projects list">
          {list.map((proj, idx) => (
            <button
              key={proj.name}
              role="tab"
              aria-selected={activeIndex === idx}
              type="button"
              className={`project-tab-button ${activeIndex === idx ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <span className="project-tab-dot" />
              <span className="project-tab-text">{proj.shortName}</span>
            </button>
          ))}
        </div>

        {/* Unified Flagship Project Showcase Panel */}
        <div className="panel project-showcase-panel">
          <div className="project-glow project-glow-one" />
          <div className="project-glow project-glow-two" />

          {/* 1. Project Header & Actions */}
          <div className="project-showcase-head">
            <div className="project-title-group">
              <h3 className="project-name">{activeProject.name}</h3>
              <p className="project-media-date">
                {formatDateRange(activeProject.start, activeProject.end)}
              </p>
            </div>

            <div className="project-actions-group">
              {(activeProject.liveUrl || activeProject.link || activeProject.website) && (
                <a
                  className="primary-button small-button project-live-cta"
                  href={activeProject.liveUrl || activeProject.link || activeProject.website}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit live website"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="btn-icon"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>Live Demo</span>
                </a>
              )}

              {activeProject.github && (
                <a
                  className="secondary-button small-button project-github-cta"
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View source code on GitHub"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="btn-icon"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>View GitHub</span>
                </a>
              )}
            </div>
          </div>

          <p className="project-description">{activeProject.description}</p>

          <div className="project-tag-row">
            {activeProject.stack.map((item) => (
              <span key={item} className="skill-pill">
                {item}
              </span>
            ))}
          </div>

          {/* 2. Interactive Media & Pipeline Workflow Grid */}
          <div className="project-media-flow-grid">
            <div className="project-media-visual-wrap">
              {activeProject.videoUrl ? (
                <div className="project-video-wrapper">
                  <video
                    src={activeProject.videoUrl}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    controls={true}
                    playsInline={true}
                    preload="auto"
                    className="project-video"
                  />
                </div>
              ) : (
                <div className="project-visual-placeholder">
                  <div className="placeholder-ring" />
                  <div className="placeholder-core">
                    <span className="tech-badge">{activeProject.stack[0]}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="project-step-list">
              <p className="step-pipeline-title">System Pipeline & Workflow</p>
              <div className="step-flow-container">
                {activeProject.steps.map((step, idx) => (
                  <div
                    key={step}
                    className={`project-step ${activeStepIndex === idx ? 'step-active' : ''}`}
                    onClick={() => setActiveStepIndex(idx)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="step-number">{idx + 1}</div>
                    <div className="step-name">{step}</div>
                    {idx < activeProject.steps.length - 1 && (
                      <div className="step-connector" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. System Architecture & Core Innovations (3 Equal Columns) */}
          <div className="project-label-grid">
            {activeProject.labels.map((item) => (
              <div key={item.title} className="project-label-card">
                <p className="fact-label">{item.title}</p>
                <p className="project-label-text">{item.text}</p>
              </div>
            ))}
          </div>

          {/* 4. Engineering Highlights & Deliverables */}
          <div className="project-highlights-block">
            <p className="highlights-subtitle">Key Highlights & Production Deliverables</p>
            <ul className="role-list project-list">
              {activeProject.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default ProjectsSection;
