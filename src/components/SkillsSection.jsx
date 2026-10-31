// This file presents the modern Interactive Physics Skills Folders.
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
      <div className="skills-folders-container">
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
    </SectionShell>
  );
}

export default SkillsSection;
