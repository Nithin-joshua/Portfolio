// This file keeps section scrolling logic in one place for buttons and navigation.
function scrollToSection(sectionId, offset = 80) {
  const sectionElement = document.getElementById(sectionId);

  if (!sectionElement) {
    return;
  }

  const header = document.querySelector('.site-header-wrapper');
  const headerHeight = header ? header.getBoundingClientRect().height : 70;
  const effectiveOffset = Math.max(headerHeight + 8, offset);

  if (sectionId === 'contact') {
    const wrapper = sectionElement.querySelector('.contact-unified-wrapper') || sectionElement;
    const linksGrid = sectionElement.querySelector('.footer-clip-links') || wrapper;
    const viewportHeight = window.innerHeight;
    const maxScroll = document.documentElement.scrollHeight - viewportHeight;

    const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
    const wrapperHeight = wrapper.getBoundingClientRect().height;
    const linksTop = linksGrid.getBoundingClientRect().top + window.scrollY;
    const linksHeight = linksGrid.getBoundingClientRect().height;

    let targetTop;
    // Safe clearance from viewport bottom (leaves comfortable breathing room above taskbar/browser chrome)
    const bottomClearance = Math.min(72, Math.max(48, viewportHeight * 0.12));

    if (wrapperHeight + bottomClearance <= viewportHeight) {
      // Entire section fits in viewport: align with comfortable top breathing room
      targetTop = wrapperTop - Math.max(headerHeight + 12, (viewportHeight - wrapperHeight) / 2);
    } else {
      // Section is taller than viewport: ensure the entire links grid is fully visible with safe clearance from bottom
      targetTop = (linksTop + linksHeight) - viewportHeight + bottomClearance;
      // But don't scroll past the section heading if grid alone is very tall
      targetTop = Math.max(wrapperTop - headerHeight - 12, targetTop);
    }

    targetTop = Math.min(targetTop, maxScroll);

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    });
    return;
  }

  const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: Math.max(0, sectionTop - effectiveOffset),
    behavior: 'smooth',
  });
}

export default scrollToSection;

