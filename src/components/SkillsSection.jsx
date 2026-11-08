// This file presents the modern Interactive Physics Skills Folders.
import { useState, useEffect } from 'react';
import SectionShell from './SectionShell';
import FolderFloat from './FolderFloat';

const computeSkillsConfig = () => {
  if (typeof window === 'undefined') {
    return {
      folderWidth: 210,
      folderHeight: 148,
      folderSpread: 150,
      folderLift: 26,
      folderTrigger: 'hover',
    };
  }
  const w = window.innerWidth;
  const h = window.innerHeight;
  const isLandscapeShort = h && h < 520 && w > h;

  if (isLandscapeShort) {
    return {
      folderWidth: 175,
      folderHeight: 124,
      folderSpread: 80,
      folderLift: 18,
      folderTrigger: 'click',
    };
  }
  if (w < 480) {
    return {
      folderWidth: 175,
      folderHeight: 128,
      folderSpread: 75,
      folderLift: 18,
      folderTrigger: 'click',
    };
  }
  if (w < 768) {
    return {
      folderWidth: 190,
      folderHeight: 136,
      folderSpread: 90,
      folderLift: 22,
      folderTrigger: 'click',
    };
  }
  if (w < 1024) {
    return {
      folderWidth: 200,
      folderHeight: 142,
      folderSpread: 115,
      folderLift: 24,
      folderTrigger: 'hover',
    };
  }
  return {
    folderWidth: 210,
    folderHeight: 148,
    folderSpread: 150,
    folderLift: 26,
    folderTrigger: 'hover',
  };
};

function SkillsSection({ skills }) {
  const [config, setConfig] = useState(computeSkillsConfig);

  useEffect(() => {
    let rafId = null;
    const handleResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const next = computeSkillsConfig();
        setConfig((prev) => {
          if (
            prev.folderWidth === next.folderWidth &&
            prev.folderHeight === next.folderHeight &&
            prev.folderSpread === next.folderSpread &&
            prev.folderLift === next.folderLift &&
            prev.folderTrigger === next.folderTrigger
          ) {
            return prev;
          }
          return next;
        });
      });
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

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
              trigger={config.folderTrigger}
              closeOnSelect={false}
              physics={true}
              drift={0.4}
              width={config.folderWidth}
              height={config.folderHeight}
              radius={14}
              spread={config.folderSpread}
              lift={config.folderLift}
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export default SkillsSection;
