// This file presents the summary and grouped skills.
import SectionShell from './SectionShell';

function SkillsSection({ skills }) {
  return (
    <SectionShell
      id={skills.id}
      kicker={skills.kicker}
      title={skills.title}
      intro={skills.intro}
    >
      <div className="skill-groups full-width-skills">
        {skills.skillGroups.map((group) => (
          <div 
            key={group.title} 
            className={`panel skill-group ${group.title === 'Frameworks' ? 'circle-card centered-skill-card' : ''}`}
          >
            <p className="skill-group-title">{group.title}</p>

            <div className="project-tag-row" style={{ marginTop: '1rem' }}>
              {group.items.map((item) => (
                <span key={item.name} className="skill-pill">
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export default SkillsSection;
