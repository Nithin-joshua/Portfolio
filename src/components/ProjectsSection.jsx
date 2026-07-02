import { useState, useEffect } from 'react';
import SectionShell from './SectionShell';
import formatDateRange from '../utils/formatDateRange';

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

      <div className="project-feature">
        {/* Left Side: Media and Steps workflow */}
        <div className="panel project-media">
          <div className="project-glow project-glow-one" />
          <div className="project-glow project-glow-two" />

          <p className="panel-kicker">{activeProject.shortName}</p>
          <h3 className="project-media-title">{activeProject.name}</h3>
          <p className="project-media-date">
            {formatDateRange(activeProject.start, activeProject.end)}
          </p>

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

          {/* Step Pipeline Flow */}
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

        {/* Right Side: Project Content Details */}
        <article className="panel project-content">
          <div className="project-content-head">
            <div>
              <p className="panel-kicker">Project Overview</p>
              <h3 className="project-name">{activeProject.name}</h3>
            </div>

            {activeProject.github && (
              <a
                className="secondary-button small-button"
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            )}
          </div>

          <p className="project-description">{activeProject.description}</p>

          <div className="project-tag-row">
            {activeProject.stack.map((item) => (
              <span key={item} className="skill-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="project-label-grid">
            {activeProject.labels.map((item) => (
              <div key={item.title} className="project-label-card">
                <p className="fact-label">{item.title}</p>
                <p className="project-label-text">{item.text}</p>
              </div>
            ))}
          </div>

          <ul className="role-list project-list">
            {activeProject.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      </div>
    </SectionShell>
  );
}

export default ProjectsSection;
