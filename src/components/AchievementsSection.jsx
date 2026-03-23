// This file renders the achievements section using compact panels.
import SectionShell from './SectionShell';

function AchievementsSection({ achievements }) {
  return (
    <SectionShell
      id={achievements.id}
      kicker={achievements.kicker}
      title={achievements.title}
      intro={achievements.intro}
    >
      <div className="achievements-list">
        {achievements.entries.map((entry) => (
          <article key={entry.title} className="panel achievement-card">
            <div className="achievement-head">
              <span className="panel-kicker">{entry.label}</span>
              <h3 className="achievement-title">{entry.title}</h3>
            </div>
            <p className="achievement-detail">{entry.detail}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default AchievementsSection;
