// This file keeps section scrolling logic in one place for buttons and navigation.
function scrollToSection(sectionId, offset = 80) {
  const sectionElement = document.getElementById(sectionId);

  if (!sectionElement) {
    return;
  }

  const header = document.querySelector('.site-header-wrapper');
  const headerHeight = header ? header.getBoundingClientRect().height : 70;
  const effectiveOffset = Math.max(headerHeight + 8, offset);

  const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: Math.max(0, sectionTop - effectiveOffset),
    behavior: 'smooth',
  });
}

export default scrollToSection;

