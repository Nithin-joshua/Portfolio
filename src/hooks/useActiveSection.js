// This file tracks which section is currently active so the navigation stays in sync.
import { useEffect, useState } from 'react';

function useActiveSection(sectionIds) {
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] || 'hero');

  useEffect(() => {
    if (!sectionIds || !sectionIds.length) {
      return undefined;
    }

    let ticking = false;

    const determineActiveSection = () => {
      const scrollPosition = window.scrollY || window.pageYOffset || 0;

      // 1. When near the top, always lock active section to the first section (hero)
      if (scrollPosition < 140) {
        setActiveSectionId(sectionIds[0]);
        return;
      }

      // 2. Check if user is scrolled to the bottom of the page (activate the last section, contact)
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      if (scrollPosition + windowHeight >= fullHeight - 80) {
        setActiveSectionId(sectionIds[sectionIds.length - 1]);
        return;
      }

      // 3. Dynamic header trigger offset
      const header = document.querySelector('.site-header-wrapper');
      const headerHeight = header ? header.getBoundingClientRect().height : 70;
      const triggerOffset = headerHeight + 110;

      let currentActive = sectionIds[0];

      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section's top has reached or passed above the trigger offset
          if (rect.top <= triggerOffset) {
            currentActive = id;
          }
        }
      }

      setActiveSectionId(currentActive);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          determineActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    determineActiveSection();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds]);

  return activeSectionId;
}

export default useActiveSection;
