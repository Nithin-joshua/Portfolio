// This file shows internship details in cards and a compact work table.
import SectionShell from './SectionShell';
import formatDateRange from '../utils/formatDateRange';

function ExperienceSection({ experience }) {
  return (
    <SectionShell
      id={experience.id}
      kicker={experience.kicker}
      title={experience.title}
      intro={experience.intro}
    >
      <div className="experience-layout">
        <div className="role-cards">
          {experience.roles.map((role) => (
            <article key={`${role.company}-${role.role}`} className="panel role-card">
              <div className="role-top">
                <div>
                  <p className="panel-kicker">{role.company}</p>
                  <h3 className="role-title">{role.role}</h3>
                </div>

                <div className="role-date-block">
                  <p className="role-date">{formatDateRange(role.start, role.end)}</p>
                  <p className="role-location">{role.location}</p>
                </div>
              </div>

              <p className="role-summary">{role.summary}</p>

              <div className="role-badges">
                {role.tools.map((tool) => (
                  <span key={tool} className="skill-pill muted-pill">
                    {tool}
                  </span>
                ))}
              </div>

              <ul className="role-list">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="panel work-table-panel">
          <div className="table-header">
            <p className="panel-kicker">Career snapshot</p>
            <p className="table-note">A short view of the same roles in timeline form.</p>
          </div>

          <table className="career-table">
            <thead>
              <tr>
                <th>Dates</th>
                <th>Company</th>
                <th>Role</th>
                <th>Focus</th>
              </tr>
            </thead>
            <tbody>
              {experience.roles.map((role) => (
                <tr key={`${role.company}-${role.start}`}>
                  <td>{formatDateRange(role.start, role.end)}</td>
                  <td>{role.company}</td>
                  <td>{role.role}</td>
                  <td>{role.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionShell>
  );
}

export default ExperienceSection;
