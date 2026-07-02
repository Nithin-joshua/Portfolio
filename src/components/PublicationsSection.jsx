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
                <div className="publication-meta">
                  <span className="panel-kicker">{entry.authors}</span>
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
                        📄 View Paper
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="publication-title">{entry.title}</h3>
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
