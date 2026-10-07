import SectionShell from './SectionShell';
import { privateLinks } from '../data/private_links_wrapper';
import formatDateRange from '../utils/formatDateRange';

const mapCertKey = (name) => {
  if (name.includes('Python Certificate')) return 'python';
  if (name.includes('C Programming')) return 'cProgramming';
  if (name.includes('Data Science')) return 'pythonForDataScience';
  if (name.includes('DSA Mastery')) return 'dsaMastery';
  if (name.includes('PHP & SQL')) return 'phpSql';
  return '';
};

function CredentialsSection({ education, achievements, certifications }) {
  return (
    <SectionShell
      id="credentials"
      kicker="Credentials"
      title="Education & Credentials"
      intro="My academic background, professional certifications, and recognitions."
    >
      <div className="credentials-container">
        {/* Achievements / UGC-NET Recognition */}
        <div className="credentials-group">
          <h3 className="credentials-group-title">
            National Qualifications & Recognitions
          </h3>
          <div className="achievements-list">
            {achievements.entries.map((entry) => {
              const isUgcNet = entry.title.includes('UGC-NET');
              const link = isUgcNet ? privateLinks.achievements.ugcNet : '';

              return (
                <article key={entry.title} className="panel achievement-card featured-credential-card">
                  <div className="achievement-head">
                    <div className="achievement-meta-row">
                      <span className="panel-kicker highlighted-kicker">{entry.label}</span>
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="doc-preview-link"
                          title="View Certificate"
                        >
                          📄 Preview Certificate
                        </a>
                      )}
                    </div>
                    <h3 className="achievement-title">{entry.title}</h3>
                  </div>
                  <p className="achievement-detail">{entry.detail}</p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Education Sub-group */}
        <div className="credentials-group">
          <h3 className="credentials-group-title">
            Education
          </h3>
          <div className="education-grid">
            {education.entries.map((entry) => (
              <article key={`${entry.degree}-${entry.start}`} className="panel education-card">
                <p className="panel-kicker">{formatDateRange(entry.start, entry.end)}</p>
                <h3 className="education-degree">{entry.degree}</h3>
                <p className="education-school">{entry.school}</p>
                <p className="education-location">{entry.location}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Certifications Sub-group */}
        <div className="credentials-group">
          <h3 className="credentials-group-title">
            Certifications
          </h3>
          <div className="certification-grid">
            {certifications.entries.map((entry) => {
              const key = mapCertKey(entry.name);
              const link = key ? privateLinks.certifications[key] : '';

              return (
                <article key={entry.name} className="panel certification-card">
                  <div className="card-top-row">
                    <p className="panel-kicker">{entry.issuer}</p>
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="doc-preview-link"
                        title="View Certificate"
                      >
                        📄 Preview
                      </a>
                    )}
                  </div>
                  <h3 className="certification-name">{entry.name}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default CredentialsSection;
