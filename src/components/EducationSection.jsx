// This file displays the formal education entries in a paired card layout.
import SectionShell from './SectionShell';
import formatDateRange from '../utils/formatDateRange';

function EducationSection({ education }) {
  return (
    <SectionShell
      id={education.id}
      kicker={education.kicker}
      title={education.title}
      intro={education.intro}
    >
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
    </SectionShell>
  );
}

export default EducationSection;
