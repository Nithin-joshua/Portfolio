import { useMemo } from 'react';
import SectionShell from './SectionShell';
import Folder from './Folder';
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
  const certEntries = certifications?.entries || [];

  const folderItems = useMemo(() => {
    return certEntries.map((entry) => {
      const key = mapCertKey(entry.name);
      const link = key ? privateLinks.certifications[key] : '';
      return {
        ...entry,
        title: entry.name,
        issuer: entry.issuer,
        authority: entry.authority,
        credential: entry.credential,
        status: entry.status,
        summary: entry.summary,
        skills: entry.skills,
        link,
      };
    });
  }, [certEntries]);

  return (
    <SectionShell
      id="credentials"
      kicker="Credentials"
      title="Education & Credentials"
      intro="Academic foundation, national qualifications, and certified domain competencies."
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
                <article key={entry.title} className="achievement-card featured-credential-card">
                  <div className="achievement-head">
                    <div className="achievement-meta-row">
                      <div className="achievement-badge-wrap">
                        <span className="credential-badge">
                          <span className="badge-pulse-dot" aria-hidden="true" />
                          {entry.label}
                        </span>
                        <span className="credential-sub-badge">National Level Qualification</span>
                      </div>
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="doc-preview-link"
                          title="View Certificate"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className="doc-preview-icon"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          <span>Preview Certificate</span>
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
              <article key={`${entry.degree}-${entry.start}`} className="education-card">
                <h3 className="education-degree">{entry.degree}</h3>
                <p className="education-date">{formatDateRange(entry.start, entry.end)}</p>
                <p className="education-school">{entry.school}</p>
                <p className="education-location">{entry.location}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Certifications Sub-group with <Folder /> Component */}
        <div className="credentials-group">
          <h3 className="credentials-group-title">
            {certifications.title || 'Certifications'}
          </h3>
          <p className="certifications-normal-desc">
            {certifications.intro || 'Core certifications strengthening programming fundamentals and applied technology knowledge.'}
          </p>

          {/* Centered Showcase */}
          <div className="certifications-single-showcase">
            <div className="certifications-folder-stage">
              <div className="folder-stage-backdrop" aria-hidden="true" />
              <div className="folder-stage-canvas-wrap">
                <Folder
                  label="Certifications"
                  items={folderItems}
                  mode="flap"
                  variant="glass"
                  color="#2563eb"
                  paperColor="#ffffff"
                  theme="dark"
                  layout="spread"
                  size={1.3}
                  defaultOpen={true}
                  draggable={true}
                  zoomOnClick={true}
                  peek={true}
                  intro={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default CredentialsSection;
