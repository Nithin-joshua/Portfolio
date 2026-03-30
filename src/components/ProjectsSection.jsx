// This file focuses on the featured project and lays out its main technical decisions.
import SectionShell from './SectionShell';
import formatDateRange from '../utils/formatDateRange';

function ProjectsSection({ projects }) {
  const { featured, cards = [] } = projects;

  return (
    <SectionShell
      id={projects.id}
      kicker={projects.kicker}
      title={projects.title}
      intro={projects.intro}
    >
      <div className="project-feature">
        <div className="panel project-media">
          <div className="project-glow project-glow-one" />
          <div className="project-glow project-glow-two" />

          <p className="panel-kicker">{featured.shortName}</p>
          <h3 className="project-media-title">{featured.name}</h3>
          <p className="project-media-date">
            {formatDateRange(featured.start, featured.end)}
          </p>

          <div className="project-video-wrapper">
            <video
              src="/project_preview.mp4"
              autoPlay={true}
              loop={true}
              muted={true}
              controls={true}
              playsInline={true}
              preload="auto"
              className="project-video"
            />
          </div>

          <div className="project-step-list">
            {featured.steps.map((step) => (
              <div key={step} className="project-step">
                {step}
              </div>
            ))}
          </div>
        </div>

        <article className="panel project-content">
          <div className="project-content-head">
            <div>
              <p className="panel-kicker">Project overview</p>
              <h3 className="project-name">{featured.name}</h3>
            </div>

            <a
              className="secondary-button small-button"
              href={featured.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>

          <p className="project-description">{featured.description}</p>

          <div className="project-tag-row">
            {featured.stack.map((item) => (
              <span key={item} className="skill-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="project-label-grid">
            {featured.labels.map((item) => (
              <div key={item.title} className="project-label-card">
                <p className="fact-label">{item.title}</p>
                <p className="project-label-text">{item.text}</p>
              </div>
            ))}
          </div>

          <ul className="role-list project-list">
            {featured.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      </div>

      {cards.length > 0 && (
        <div className="project-card-grid">
          {cards.map((project) => (
            <article key={project.title} className="panel compact-project-card">
              <div className="project-content-head">
                <div>
                  <p className="panel-kicker">Project card</p>
                  <h3 className="project-card-title">{project.title}</h3>
                </div>

                <a
                  className="secondary-button small-button"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.githubLabel ?? 'View GitHub'}
                </a>
              </div>

              <p className="project-description">{project.description}</p>

              {typeof project.progress === 'number' && (
                <div className="project-progress-block">
                  <div className="project-progress-top">
                    <span className="project-status-pill">
                      {project.status ?? 'In progress'}
                    </span>
                    <span className="fact-label">{project.progress}%</span>
                  </div>
                  <div className="project-progress-track" aria-hidden="true">
                    <div
                      className="project-progress-fill"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="project-tag-row">
                {project.stack.map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </SectionShell>
  );
}

export default ProjectsSection;
