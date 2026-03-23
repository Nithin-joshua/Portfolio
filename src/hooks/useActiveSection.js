// This file tracks which section is most visible so the navigation can stay in sync.
import { useEffect, useState } from 'react';

function useActiveSection(sectionIds) {
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] || '');

  useEffect(() => {
    const sectionElements = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    if (!sectionElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((leftEntry, rightEntry) => rightEntry.intersectionRatio - leftEntry.intersectionRatio);

        if (visibleEntries.length) {
          setActiveSectionId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.75],
      },
    );

    sectionElements.forEach((sectionElement) => observer.observe(sectionElement));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSectionId;
}

export default useActiveSection;
