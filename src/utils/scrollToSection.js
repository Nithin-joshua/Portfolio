// This file keeps section scrolling logic in one place for buttons and navigation.
function scrollToSection(sectionId, offset = 96) {
  const sectionElement = document.getElementById(sectionId);

  if (!sectionElement) {
    return;
  }

  const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: sectionTop - offset,
    behavior: 'smooth',
  });
}

export default scrollToSection;
