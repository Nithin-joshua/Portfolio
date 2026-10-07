// This file presents the modern Tech Stack Bento cards.
import SectionShell from './SectionShell';

function SkillsSection({ skills }) {
  return (
    <SectionShell
      id={skills.id}
      kicker={skills.kicker}
      title={skills.title}
      intro={skills.intro}
    >
      <div className="skills-bento-grid">
        {skills.skillGroups.map((group) => (
          <div
            key={group.title}
            className={`panel skill-bento-card skill-bento-${group.category || 'general'}`}
          >
            <div className="skill-bento-header">
              <span className="skill-bento-tag">{group.category || 'tech'}</span>
              <h3 className="skill-bento-title">{group.title}</h3>
            </div>

            <div className="skill-badge-container">
              {group.items.map((item) => {
                const name = typeof item === 'string' ? item : item.name;
                return (
                  <span key={name} className="tech-badge-chip">
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export default SkillsSection;
