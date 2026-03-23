// This file presents the summary, identity notes, and grouped skills.
import SectionShell from './SectionShell';

function AboutSection({ about }) {
  return (
    <SectionShell
      id={about.id}
      kicker={about.kicker}
      title={about.title}
      intro={about.intro}
    >
      <div className="about-layout">
        <div className="panel about-copy-panel">
          <div className="about-paragraphs">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="fact-grid">
            {about.quickFacts.map((fact) => (
              <div key={fact.label} className="fact-card">
                <p className="fact-label">{fact.label}</p>
                <p className="fact-value">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-side">
          <div className="panel identity-panel">
            <div>
              <p className="panel-kicker">{about.identity.overline}</p>
              <h3 className="identity-title">{about.identity.title}</h3>
              <p className="identity-text">{about.identity.detail}</p>
            </div>

            <div className="identity-monogram">{about.identity.monogram}</div>
          </div>
        </div>
      </div>

      <div className="skill-groups full-width-skills">
        {about.skillGroups.map((group) => (
          <div key={group.title} className="panel skill-group">
            <p className="skill-group-title">{group.title}</p>

            <div className="skill-bar-list">
              {group.items.map((item) => (
                <div key={item.name} className="skill-bar-item">
                  <span className="skill-bar-label">{item.name}</span>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${item.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export default AboutSection;
