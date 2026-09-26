import { portfolioData } from "@/content/profile";

export function Background() {
  return (
    <section id="background" aria-labelledby="background-title" className="background-section">
      <div className="phase2-container">
        <div className="background-intro">
          <p className="about-section-label" data-reveal>Background</p>
          <h2 id="background-title" data-reveal style={{ "--reveal-index": 1 } as React.CSSProperties}>
            Professional development <span>&amp; education</span>
          </h2>
        </div>
        <div className="background-chapter" aria-labelledby="development-title">
          <h3 id="development-title" data-reveal>Professional Development</h3>
          <div className="background-entries">
            {portfolioData.professionalDevelopment.map((entry, index) => (
              <article className="background-entry" key={entry.id} data-reveal style={{ "--reveal-index": index + 1 } as React.CSSProperties}>
                <span className="background-number" aria-hidden="true">{entry.number}</span>
                <div><h4>{entry.title}</h4><p>{entry.organization}</p>{entry.status && <p className="background-status">{entry.status}</p>}</div>
                <span className="background-date">{entry.date}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="background-chapter background-education" aria-labelledby="education-title">
          <h3 id="education-title" data-reveal>Education</h3>
          <div className="background-entries">
            {portfolioData.education.map((entry) => (
              <article className="background-entry background-education-entry" key={entry.id} data-reveal>
                <div><h4>{entry.institution}</h4>{entry.degree && <p>{entry.degree}</p>}</div>
                {entry.year && <span className="background-date">{entry.year}</span>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
