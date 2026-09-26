import { portfolioData } from "@/content/profile";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="experience-section">
      <div className="phase2-container">
        <div className="experience-intro">
          <p className="about-section-label" data-reveal>{"//Experience"}</p>
          <div>
            <h2 id="experience-title" data-reveal style={{ "--reveal-index": 1 } as React.CSSProperties}>
              Experience shaped across <span>renewable-energy engineering &amp; project development</span>
            </h2>
            <p className="experience-deck" data-reveal style={{ "--reveal-index": 2 } as React.CSSProperties}>
              A concise view of the roles and companies that have shaped my professional path.
            </p>
          </div>
        </div>
        <div className="experience-list">
          {portfolioData.experience.map((item, index) => {
            const hasDetails = Boolean(item.current || item.roles.length > 0 || item.summary);
            return (
            <article className="experience-row" key={item.id} aria-labelledby={`experience-${item.id}`} data-reveal data-has-details={hasDetails} style={{ "--reveal-index": index + 1 } as React.CSSProperties}>
              <span className="experience-number" aria-hidden="true">{item.number}</span>
              <div className="experience-company">
                <h3 id={`experience-${item.id}`}>{item.company}</h3>
                <p className="experience-period">{item.period}</p>
                {item.location && <p className="experience-location">{item.location}</p>}
              </div>
              {hasDetails && <div className="experience-details">
                {item.current && <span className="experience-current"><span aria-hidden="true" />Current</span>}
                {item.roles.length > 0 && (
                  <div className={item.roles.length > 1 ? "experience-roles experience-roles-progress" : "experience-roles"}>
                    {item.roles.map((role) => (
                      <div className="experience-role" key={`${item.id}-${role.period}`}>
                        {role.title && <h4>{role.title}</h4>}
                        {item.roles.length > 1 && <p>{role.period}{role.region && <> · {role.region}</>}</p>}
                      </div>
                    ))}
                  </div>
                )}
                {item.summary && <p className="experience-summary">{item.summary}</p>}
              </div>}
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
