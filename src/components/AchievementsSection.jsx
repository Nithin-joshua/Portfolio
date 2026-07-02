import SectionShell from './SectionShell';
import { privateLinks } from '../data/private_links_wrapper';

function AchievementsSection({ achievements }) {
  return (
    <SectionShell
      id={achievements.id}
      kicker={achievements.kicker}
      title={achievements.title}
      intro={achievements.intro}
    >
      <div className="achievements-list">
        {achievements.entries.map((entry) => {
          const isUgcNet = entry.title.includes('UGC-NET');
          const link = isUgcNet ? privateLinks.achievements.ugcNet : '';

          return (
            <article key={entry.title} className="panel achievement-card">
              <div className="achievement-head">
                <div className="achievement-meta-row">
                  <span className="panel-kicker">{entry.label}</span>
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
                <h3 className="achievement-title">{entry.title}</h3>
              </div>
              <p className="achievement-detail">{entry.detail}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export default AchievementsSection;
