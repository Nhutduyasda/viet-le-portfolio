"use client";

import Image from "next/image";
import { useState } from "react";
import { portfolioData } from "@/content/profile";
import type { ExpertiseFeature } from "@/types/portfolio";

const features = portfolioData.expertiseFeatures;

function FeatureMedia({ feature }: { feature: ExpertiseFeature }) {
  return (
    <div className="showcase-media">
      {feature.media.type === "image" ? (
        <Image src={feature.media.src} alt={feature.media.alt} fill sizes="(max-width: 650px) calc(100vw - 56px), (max-width: 900px) 45vw, 440px" quality={85} className="showcase-photo" />
      ) : (
        <video autoPlay muted loop playsInline preload="metadata" poster={feature.media.poster} aria-label={feature.media.alt}>
          <source src={feature.media.src} type={feature.media.src.endsWith(".webm") ? "video/webm" : "video/mp4"} />
        </video>
      )}
      <span className="showcase-media-number">{feature.number}</span>
      <span className="showcase-media-label">{feature.media.label}</span>
    </div>
  );
}

export function Expertise() {
  const [active, setActive] = useState(0);

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="expertise-section">
      <div className="phase2-container">
        <div className="expertise-intro">
          <div className="expertise-identity" data-reveal style={{ "--reveal-index": 0 } as React.CSSProperties}>
            <svg aria-hidden="true" viewBox="0 0 32 32"><path d="M4 23h24M8 20a8 8 0 0 1 16 0M16 2v4M5 8l3 3M27 8l-3 3M3 17h4M25 17h4" /></svg>
            <p>Senior Project Development Engineer<br />PV &amp; BESS</p>
            <small>GreenYellow Asia<br />Ho Chi Minh City, Vietnam</small>
          </div>
          <div>
            <span className="phase2-pill expertise-pill" data-reveal style={{ "--reveal-index": 1 } as React.CSSProperties}><span className="phase2-dot" />Expertise</span>
            <h2 id="expertise-title" className="expertise-heading" data-reveal style={{ "--reveal-index": 2 } as React.CSSProperties}>Renewable energy development, <span>engineering &amp; project delivery</span></h2>
            <p className="expertise-summary" data-reveal style={{ "--reveal-index": 3 } as React.CSSProperties}>Senior Project Development Engineer (PV &amp; BESS) at GreenYellow Asia, based in Ho Chi Minh City, Vietnam.</p>
          </div>
        </div>
        <div className="expertise-showcase">
          <div className="showcase-stage" aria-label="Featured expertise" data-reveal style={{ "--reveal-index": 4 } as React.CSSProperties}>
            {features.map((feature, index) => (
              <article key={feature.number} id={`showcase-panel-${index}`} className="showcase-panel" data-active={active === index} inert={active !== index} aria-hidden={active !== index}>
                <FeatureMedia feature={feature} />
                <div className="showcase-copy">
                  <div className="showcase-main"><span className="showcase-category">{feature.category}</span><h3>{feature.title}</h3><p className="showcase-focus">{feature.focus}</p></div>
                  <p className="showcase-detail">{feature.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="showcase-selectors" aria-label="Choose an expertise feature" data-reveal style={{ "--reveal-index": 5 } as React.CSSProperties}>
            {features.map((feature, index) => index !== active && (
              <button type="button" key={feature.number} className="showcase-selector" onClick={() => setActive(index)} aria-controls={`showcase-panel-${index}`}>
                <span className="selector-number">{feature.number}</span>
                <span className="selector-label"><small>{feature.category}</small><span>{feature.title}</span></span>
                <span className="selector-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
