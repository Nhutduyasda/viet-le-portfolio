import { portfolioData } from "@/content/profile";

export function Contact() {
  const { profile } = portfolioData;
  const email = profile.email.trim();
  const hasEmail = email.length > 0 && email.toUpperCase() !== "TBD";
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-section">
      <div className="phase2-container contact-inner">
        <p className="contact-label" data-reveal>{"//Contact"}</p>
        <h2 id="contact-title" data-reveal style={{ "--reveal-index": 1 } as React.CSSProperties}>Let&apos;s connect.</h2>
        <p className="contact-description" data-reveal style={{ "--reveal-index": 2 } as React.CSSProperties}>
          For professional conversations around renewable energy, Solar PV, BESS and project development, connect with me on LinkedIn.
        </p>
        <div className="contact-actions" data-reveal style={{ "--reveal-index": 3 } as React.CSSProperties}>
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link">Connect on LinkedIn <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18 18 6M8 6h10v10" /></svg><span className="sr-only"> (opens in a new tab)</span></a>
          {hasEmail ? <a href={`mailto:${email}`} className="contact-email">Email me</a> : <span className="contact-email">Email: {email}</span>}
        </div>
        <div className="contact-signature" data-reveal style={{ "--reveal-index": 4 } as React.CSSProperties}>
          <span>{profile.name}</span><span>{profile.headline}</span>
        </div>
      </div>
    </section>
  );
}
