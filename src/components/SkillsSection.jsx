// This file presents the modern Interactive Physics Skills Folders on desktop and an un-congested bento grid on mobile.
import SectionShell from './SectionShell';
import FolderFloat from './FolderFloat';

function SkillsSection({ skills }) {
  return (
    <SectionShell
      id={skills.id}
      kicker={skills.kicker}
      title={skills.title}
      intro={skills.intro}
    >
      {/* Desktop Interactive Physics Folders (>= 768px) */}
      <div className="skills-folders-container desktop-skills-view">
        {skills.skillGroups.map((group) => (
          <div key={group.title} className="skills-folder-wrapper">
            <FolderFloat
              items={group.items}
              label={group.title}
              sublabel={`${group.items.length} technologies`}
              trigger="hover"
              closeOnSelect={false}
              physics={true}
              drift={0.4}
              width={210}
              height={148}
              radius={14}
              spread={160}
              lift={26}
            />
          </div>
        ))}
      </div>

      {/* Mobile Streamlined Bento Grid (< 768px) */}
      <div className="skills-bento-grid mobile-skills-view">
        {skills.skillGroups.map((group) => (
          <article
            key={group.title}
            className={`skill-bento-card skill-bento-${group.category || 'general'}`}
          >
            <div className="skill-bento-header">
              <h3 className="skill-bento-title">{group.title}</h3>
              <span className="skill-bento-tag">{group.items.length} technologies</span>
            </div>
            <div className="skill-badge-container">
              {group.items.map((tech) => (
                <span key={tech} className="tech-badge-chip">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default SkillsSection;
