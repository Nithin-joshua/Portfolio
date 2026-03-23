// This file lists certificate work in simple cards that fit the same visual system.
import SectionShell from './SectionShell';

function CertificationsSection({ certifications }) {
  return (
    <SectionShell
      id={certifications.id}
      kicker={certifications.kicker}
      title={certifications.title}
      intro={certifications.intro}
    >
      <div className="certification-grid">
        {certifications.entries.map((entry) => (
          <article key={entry.name} className="panel certification-card">
            <p className="panel-kicker">{entry.issuer}</p>
            <h3 className="certification-name">{entry.name}</h3>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default CertificationsSection;
