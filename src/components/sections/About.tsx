import { portfolioData } from "@/content/profile";
import { AboutIdentityMedia } from "./AboutIdentityMedia";

export function About() {
  const { profile } = portfolioData;

  return (
    <section id="about" aria-labelledby="about-title" className="about-section">
      <div className="phase2-container">
        <div className="about-heading-row">
          <p className="about-section-label" data-reveal style={{ "--reveal-index": 0 } as React.CSSProperties}>{"//About"}</p>
          <h2 id="about-title" className="about-heading" data-reveal style={{ "--reveal-index": 1 } as React.CSSProperties}>
            {profile.aboutHeadingLead} <span>{profile.aboutHeadingAccent}</span>
          </h2>
        </div>
        <div className="about-intro-row">
          <span className="phase2-pill" data-reveal><span className="phase2-dot" />About Viet Le</span>
          <div className="about-domains" aria-label="Focus areas" data-reveal style={{ "--reveal-index": 1 } as React.CSSProperties}><span>Solar PV</span><span>BESS</span><span>Project Development</span></div>
          <p data-reveal style={{ "--reveal-index": 2 } as React.CSSProperties}>{profile.headline} based in {profile.location}, focused on renewable energy development.</p>
        </div>
        <div className="about-card-grid">
          <div className="about-card about-card-dark" data-reveal style={{ "--reveal-index": 0 } as React.CSSProperties}>
            <svg aria-hidden="true" viewBox="0 0 32 32" className="about-sun-icon"><path d="M4 23h24M8 20a8 8 0 0 1 16 0M16 2v4M5 8l3 3M27 8l-3 3M3 17h4M25 17h4M11 27h10" /></svg>
            <p className="about-card-statement">{profile.aboutCardStatement}</p>
            <div className="about-card-foot"><span className="about-card-indicator" aria-hidden="true" />{profile.headline}</div>
          </div>
          <AboutIdentityMedia />
          <div className="about-card about-card-light" data-reveal style={{ "--reveal-index": 2 } as React.CSSProperties}>
            <span className="about-card-kicker">Current Role</span>
            <p className="about-focus-title">Senior Project<br />Development Engineer</p>
            <div className="about-focus-footer"><span>PV &amp; BESS</span><span>{profile.employer}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
