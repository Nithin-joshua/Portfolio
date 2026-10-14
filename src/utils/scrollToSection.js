// This file keeps section scrolling logic in one place for buttons and navigation.
function scrollToSection(sectionId, offset = 96) {
  const sectionElement = document.getElementById(sectionId);

  if (!sectionElement) {
    return;
  }

  if (sectionId === 'contact') {
    const wrapper = sectionElement.querySelector('.contact-unified-wrapper') || sectionElement;
    const wrapperRect = wrapper.getBoundingClientRect();
    const wrapperTop = wrapperRect.top + window.scrollY;
    const wrapperHeight = wrapperRect.height;
    const viewportHeight = window.innerHeight;

    const targetTop =
      wrapperHeight < viewportHeight
        ? wrapperTop - (viewportHeight - wrapperHeight) / 2
        : wrapperTop - 20;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    });
    return;
  }

  const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: sectionTop - offset,
    behavior: 'smooth',
  });
}

export default scrollToSection;
