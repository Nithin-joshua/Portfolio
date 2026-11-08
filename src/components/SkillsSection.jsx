// This file presents the modern Interactive Physics Skills Folders.
import { useState, useEffect } from 'react';
import SectionShell from './SectionShell';
import FolderFloat from './FolderFloat';

function SkillsSection({ skills }) {
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== 'undefined') return window.innerWidth;
    return 1200;
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isCompact = windowWidth < 480;

  const folderWidth = isCompact ? 175 : isMobile ? 190 : 210;
  const folderHeight = isCompact ? 128 : isMobile ? 136 : 148;
  const folderSpread = isCompact ? 75 : isMobile ? 90 : 160;
  const folderLift = isCompact ? 18 : isMobile ? 22 : 26;
  const folderTrigger = isMobile ? 'click' : 'hover';

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
              trigger={folderTrigger}
              closeOnSelect={false}
              physics={true}
              drift={0.4}
              width={folderWidth}
              height={folderHeight}
              radius={14}
              spread={folderSpread}
              lift={folderLift}
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export default SkillsSection;
