// This file tracks which section is currently active without causing layout thrashing during fast scroll.
import { useEffect, useRef, useState } from 'react';

function useActiveSection(sectionIds) {
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] || 'hero');
  const offsetsRef = useRef([]);

  useEffect(() => {
    if (!sectionIds || !sectionIds.length) {
      return undefined;
    }

    // Measure and cache section offsets only on resize, load, or when layout stabilizes
    const measureOffsets = () => {
      const header = document.querySelector('.site-header-wrapper');
      const headerHeight = header ? header.offsetHeight : 70;
      const triggerOffset = headerHeight + 90;

      offsetsRef.current = sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        let top = 0;
        let node = el;
        while (node) {
          top += node.offsetTop || 0;
          node = node.offsetParent;
        }
        return { id, top: Math.max(0, top - triggerOffset) };
      });
    };

    measureOffsets();

    let ticking = false;

    const determineActiveSection = () => {
      const scrollPosition = window.scrollY || window.pageYOffset || 0;

      // 1. Top of page lock
      if (scrollPosition < 120) {
        setActiveSectionId((prev) => (prev !== sectionIds[0] ? sectionIds[0] : prev));
        return;
      }

      // 2. Bottom of page lock
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      if (scrollPosition + windowHeight >= fullHeight - 80) {
        const lastId = sectionIds[sectionIds.length - 1];
        setActiveSectionId((prev) => (prev !== lastId ? lastId : prev));
        return;
      }

      // 3. Match against cached offsets (pure numeric comparison - 0 DOM reflows)
      const offsets = offsetsRef.current;
      let currentActive = sectionIds[0];

      for (let i = 0; i < offsets.length; i++) {
        if (scrollPosition >= offsets[i].top) {
          currentActive = offsets[i].id;
        }
      }

      setActiveSectionId((prev) => (prev !== currentActive ? currentActive : prev));
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

    const handleResize = () => {
      measureOffsets();
      determineActiveSection();
    };

    // Re-measure after initial renders and dynamic assets settle
    const timer = setTimeout(measureOffsets, 400);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [sectionIds]);

  return activeSectionId;
}

export default useActiveSection;
