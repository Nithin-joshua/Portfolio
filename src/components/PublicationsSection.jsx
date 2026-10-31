import SectionShell from './SectionShell';
import { privateLinks } from '../data/private_links_wrapper';

function PublicationsSection({ publications }) {
  return (
    <SectionShell
      id={publications.id}
      kicker={publications.kicker}
      title={publications.title}
      intro={publications.intro}
    >
      <div className="publications-list">
        {publications.entries.map((entry) => {
          const link = privateLinks.publications.comparativeAnalysis; // We can generalize if we have multiple, but right now there is one.

          return (
            <article key={entry.title} className="panel publication-card">
              <div className="publication-header">
                <h3 className="publication-title">{entry.title}</h3>
                <div className="publication-meta">
                  <span className="publication-authors">{entry.authors}</span>
                  <div className="publication-meta-right">
                    <span className="publication-isbn">ISBN: {entry.isbn}</span>
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="doc-preview-link"
                        style={{ marginLeft: '12px' }}
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
                        <span>View Paper</span>
                      </a>
                    )}
                  </div>
                </div>
                <p className="publication-venue">
                  Published in: <strong>{entry.publishedIn}</strong>
                </p>
              </div>
              <p className="publication-detail">{entry.detail}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export default PublicationsSection;
