// This file closes the page with contact links and a large final headline.
import useRevealOnScroll from '../hooks/useRevealOnScroll';

function ContactSection({ contact }) {
  const [sectionRef, isVisible] = useRevealOnScroll({ threshold: 0.12 });

  return (
    <section
      id={contact.id}
      ref={sectionRef}
      className={`contact-section reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="contact-panel panel">
        <div className="contact-copy-block">
          <p className="section-kicker">{contact.kicker}</p>
          <h2 className="contact-title">
            {contact.titleLines.map((line) => (
              <span key={line} className="contact-title-line">
                {line}
              </span>
            ))}
          </h2>
          <p className="contact-note">{contact.note}</p>
        </div>

        <div className="contact-methods">
          {contact.methods.map((method) => (
            <a
              key={method.label}
              className="contact-link"
              href={method.url}
              target={method.url.startsWith('http') ? '_blank' : undefined}
              rel={method.url.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact-label">{method.label}</span>
              <span className="contact-value">{method.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
