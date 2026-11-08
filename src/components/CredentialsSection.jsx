import { useState, useEffect, useMemo, useRef } from 'react';
import SectionShell from './SectionShell';
import Folder from './Folder';
import { privateLinks } from '../data/private_links_wrapper';
import formatDateRange from '../utils/formatDateRange';

const mapCertKey = (name) => {
  if (name.includes('AI Engineer') || name.includes('LLM Engineering')) return 'llmEngineering';
  if (name.includes('Python Certificate')) return 'python';
  if (name.includes('C Programming')) return 'cProgramming';
  if (name.includes('Data Science')) return 'pythonForDataScience';
  if (name.includes('DSA Mastery')) return 'dsaMastery';
  if (name.includes('PHP & SQL')) return 'phpSql';
  return '';
};

function CredentialsSection({ education, achievements, certifications }) {
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== 'undefined') return window.innerWidth;
    return 1200;
  });
  const [activeCertIndex, setActiveCertIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isCompact = windowWidth < 480;

  // On mobile, size is 1.0–1.08 so the single certificate is large, readable, and perfectly centered
  const folderSize = isMobile ? (isCompact ? 1.0 : 1.08) : 1.3;

  const certEntries = certifications?.entries || [];

  const folderItems = useMemo(() => {
    return certEntries.map((entry) => {
      const key = mapCertKey(entry.name);
      const link = entry.link || (key ? privateLinks.certifications[key] : '');
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

  const currentItem = folderItems[activeCertIndex] || folderItems[0];
  const displayedItems = isMobile && currentItem ? [currentItem] : folderItems;

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!isMobile || touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        // Swipe left -> Next certificate
        setActiveCertIndex((prev) => (prev + 1) % folderItems.length);
      } else {
        // Swipe right -> Previous certificate
        setActiveCertIndex((prev) => (prev - 1 + folderItems.length) % folderItems.length);
      }
    }
    touchStartX.current = null;
  };

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
          <div
            className="certifications-single-showcase"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="certifications-folder-stage">
              <div className="folder-stage-backdrop" aria-hidden="true" />
              <div className="folder-stage-canvas-wrap">
                <Folder
                  key={isMobile ? `cert-${activeCertIndex}` : 'cert-desktop-spread'}
                  label={isMobile ? (currentItem?.issuer || 'Certificate') : 'Certifications'}
                  items={displayedItems}
                  mode="flap"
                  variant="glass"
                  color="#2563eb"
                  paperColor="#ffffff"
                  theme="dark"
                  layout={isMobile ? 'stack' : 'spread'}
                  size={folderSize}
                  defaultOpen={true}
                  closeOnOutsideClick={false}
                  draggable={true}
                  zoomOnClick={true}
                  peek={true}
                  intro={false}
                />
              </div>
            </div>
          </div>

          {/* Mobile Single Certificate Navigator */}
          {isMobile && folderItems.length > 1 && (
            <>
              <div className="mobile-cert-nav">
                <button
                  type="button"
                  className="mobile-cert-nav-btn"
                  onClick={() => setActiveCertIndex((prev) => (prev - 1 + folderItems.length) % folderItems.length)}
                  aria-label="View previous certificate"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  <span>Prev</span>
                </button>

                <div className="mobile-cert-counter">
                  <span className="mobile-cert-counter-text">
                    {activeCertIndex + 1} of {folderItems.length}
                  </span>
                  <div className="mobile-cert-dots" role="tablist" aria-label="Certificate selectors">
                    {folderItems.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        role="tab"
                        aria-selected={activeCertIndex === i}
                        className={`mobile-cert-dot ${activeCertIndex === i ? 'is-active' : ''}`}
                        onClick={() => setActiveCertIndex(i)}
                        aria-label={`Show certificate ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="mobile-cert-nav-btn"
                  onClick={() => setActiveCertIndex((prev) => (prev + 1) % folderItems.length)}
                  aria-label="View next certificate"
                >
                  <span>Next</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {/* Quick Topic Badges */}
              <div className="mobile-cert-quick-pills">
                {folderItems.map((item, i) => {
                  const shortName = item.issuer || item.title.slice(0, 14);
                  return (
                    <button
                      key={item.title}
                      type="button"
                      className={`mobile-cert-quick-pill ${activeCertIndex === i ? 'is-active' : ''}`}
                      onClick={() => setActiveCertIndex(i)}
                    >
                      {shortName}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </SectionShell>
  );
}

export default CredentialsSection;
