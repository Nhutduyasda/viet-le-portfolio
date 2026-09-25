import Image from "next/image";
import { portfolioData } from "@/content/profile";

export function About() {
  const { profile } = portfolioData;

  return (
    <section id="about" aria-labelledby="about-title" className="about-section">
      <div className="phase2-container">
        <div className="about-heading-row">
          <p className="about-section-label">{"//About"}</p>
          <h2 id="about-title" className="about-heading">
            Focused on developing practical renewable energy solutions across <span>Solar PV, BESS and project development.</span>
          </h2>
        </div>
        <div className="about-intro-row">
          <span className="phase2-pill"><span className="phase2-dot" />About Viet Le</span>
          <div className="about-domains" aria-label="Focus areas"><span>Solar PV</span><span>BESS</span><span>Renewable Energy</span></div>
          <p>{profile.headline} based in {profile.location}, focused on renewable energy development.</p>
        </div>
        <div className="about-card-grid">
          <div className="about-card about-card-dark">
            <svg aria-hidden="true" viewBox="0 0 32 32" className="about-sun-icon"><path d="M4 23h24M8 20a8 8 0 0 1 16 0M16 2v4M5 8l3 3M27 8l-3 3M3 17h4M25 17h4M11 27h10" /></svg>
            <p className="about-card-statement">Developing practical energy solutions for a more sustainable future.</p>
            <div className="about-card-foot"><span className="about-card-indicator" aria-hidden="true" />Renewable Energy</div>
          </div>
          <div className="about-card about-card-image">
            <Image src="/images/solar-hero.png" alt="Wind turbines across a green renewable energy landscape" fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 376px" className="about-photo" />
            <span className="about-image-tag">Solar PV · BESS</span>
          </div>
          <div className="about-card about-card-light">
            <span className="about-card-kicker">Professional focus</span>
            <p className="about-focus-title">Solar PV<br />&amp; BESS</p>
            <div className="about-focus-footer"><span>Project Development</span><span>{profile.location}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
