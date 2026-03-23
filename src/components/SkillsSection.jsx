// This file presents the summary and grouped skills.
import { useEffect, useRef, useState } from 'react';
import SectionShell from './SectionShell';

function SkillsSection({ skills }) {
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSkillsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SectionShell
      id={skills.id}
      kicker={skills.kicker}
      title={skills.title}
      intro={skills.intro}
    >
      <div className="skill-groups full-width-skills" ref={skillsRef}>
        {skills.skillGroups.map((group) => (
          <div 
            key={group.title} 
            className={`panel skill-group ${group.title === 'Frameworks' ? 'circle-card centered-skill-card' : ''}`}
          >
            <p className="skill-group-title">{group.title}</p>

            <div className="skill-bar-list">
              {group.items.map((item) => (
                <div key={item.name} className="skill-bar-item">
                  <span className="skill-bar-label">{item.name}</span>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: skillsVisible ? `${item.level}%` : '0%' }}></div>
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

export default SkillsSection;
