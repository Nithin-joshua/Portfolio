// This file gives each content section a shared heading pattern and reveal animation.
import useRevealOnScroll from '../hooks/useRevealOnScroll';

function SectionShell({ id, kicker, title, intro, children }) {
  const [sectionRef, isVisible] = useRevealOnScroll({ threshold: 0, rootMargin: '300px 0px 300px 0px' });

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section-shell reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="section-head">
        <div>
          <h2 className="section-title">{title}</h2>
        </div>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>

      {children}
    </section>
  );
}

export default SectionShell;
