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
    const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
    const wrapperHeight = wrapper.getBoundingClientRect().height;
    const viewportHeight = window.innerHeight;
    const maxScroll = document.documentElement.scrollHeight - viewportHeight;

    let targetTop = wrapperTop - Math.max(16, (viewportHeight - wrapperHeight) / 2);
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

