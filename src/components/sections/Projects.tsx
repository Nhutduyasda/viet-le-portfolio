import { portfolioData } from "@/content/profile";

export function Projects() {
  const projects = portfolioData.projects;
  return (
    <section id="projects" aria-labelledby="projects-title" className="projects-section">
      <div className="phase2-container">
        <div className="projects-intro">
          <p className="about-section-label" data-reveal>{projects.length === 1 ? "//Selected Project" : "//Selected Projects"}</p>
          <div>
            <h2 id="projects-title" data-reveal style={{ "--reveal-index": 1 } as React.CSSProperties}>
              A closer look at <span>real project experience</span>
            </h2>
            <p className="projects-deck" data-reveal style={{ "--reveal-index": 2 } as React.CSSProperties}>
              A selected example of a project site I have visited during my time at ecoligo.
            </p>
          </div>
        </div>
        {projects.map((project) => (
          <article className="project-feature" key={project.id} aria-labelledby={`project-${project.id}`}>
            <div className="project-overview" data-reveal style={{ "--reveal-index": 1 } as React.CSSProperties}>
              <span className="project-number">{project.number} / Selected project</span>
              <h3 id={`project-${project.id}`}>{project.title}</h3>
              <p className="project-context">{project.clientDisplay} <span aria-hidden="true">·</span> {project.location}</p>
              <p className="project-type">{project.projectType}</p>
            </div>
            <div className="project-evidence">
              <div className="project-metrics" data-reveal style={{ "--reveal-index": 2 } as React.CSSProperties}>
                <div><strong>{project.capacity}</strong><span>Solar PV capacity</span></div>
                <div><strong>{project.impactMetric}</strong><span>{project.impactLabel}</span></div>
              </div>
              <div className="project-connection" data-reveal style={{ "--reveal-index": 3 } as React.CSSProperties}>
                <p className="project-small-label">Viet&apos;s documented connection</p>
                <p className="project-connection-text">{project.connection}</p>
                <p className="project-source">{project.employerContext} · {project.impactAttribution} <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">{project.sourceLabel}<span className="sr-only"> (opens in a new tab)</span></a></p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
