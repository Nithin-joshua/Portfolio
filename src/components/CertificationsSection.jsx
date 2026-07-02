import SectionShell from './SectionShell';
import { privateLinks } from '../data/private_links_wrapper';

const mapKey = (name) => {
  if (name.includes('Python Certificate')) return 'python';
  if (name.includes('C Programming')) return 'cProgramming';
  if (name.includes('Data Science')) return 'pythonForDataScience';
  if (name.includes('DSA Mastery')) return 'dsaMastery';
  if (name.includes('PHP & SQL')) return 'phpSql';
  return '';
};

function CertificationsSection({ certifications }) {
  return (
    <SectionShell
      id={certifications.id}
      kicker={certifications.kicker}
      title={certifications.title}
      intro={certifications.intro}
    >
      <div className="certification-grid">
        {certifications.entries.map((entry) => {
          const key = mapKey(entry.name);
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
    </SectionShell>
  );
}

export default CertificationsSection;
