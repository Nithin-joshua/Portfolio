// This file shows internship details in cards with a collapsible list of accomplishments.
import { useState } from 'react';
import SectionShell from './SectionShell';
import formatDateRange from '../utils/formatDateRange';

function RoleCard({ role }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisible = 3;
  const hasMore = role.bullets && role.bullets.length > maxVisible;
  const visibleBullets = isExpanded ? role.bullets : role.bullets.slice(0, maxVisible);

  return (
    <article className="panel role-card">
      <div className="role-top">
        <div className="role-title-block">
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
        {visibleBullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          className="role-toggle-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Show less' : `Show more (${role.bullets.length - maxVisible} more)`}
        </button>
      )}
    </article>
  );
}

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
            <RoleCard key={`${role.company}-${role.role}`} role={role} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export default ExperienceSection;
