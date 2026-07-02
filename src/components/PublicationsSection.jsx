import SectionShell from './SectionShell';

function PublicationsSection({ publications }) {
  return (
    <SectionShell
      id={publications.id}
      kicker={publications.kicker}
      title={publications.title}
      intro={publications.intro}
    >
      <div className="publications-list">
        {publications.entries.map((entry) => (
          <article key={entry.title} className="panel publication-card">
            <div className="publication-header">
              <div className="publication-meta">
                <span className="panel-kicker">{entry.authors}</span>
                <span className="publication-isbn">ISBN: {entry.isbn}</span>
              </div>
              <h3 className="publication-title">{entry.title}</h3>
              <p className="publication-venue">
                Published in: <strong>{entry.publishedIn}</strong>
              </p>
            </div>
            <p className="publication-detail">{entry.detail}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default PublicationsSection;
