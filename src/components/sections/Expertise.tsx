"use client";

import Image from "next/image";
import { useState } from "react";

const features = [
  {
    number: "01",
    category: "Renewable Energy",
    title: "Solar PV & BESS Development",
    focus: "Project Development",
    detail: "Engineering work in the development of solar PV and battery energy storage projects.",
    media: "/images/solar-bess.webp",
    alt: "Solar panels with battery storage equipment in a subtropical landscape",
    mediaLabel: "Solar PV · BESS",
  },
  {
    number: "02",
    category: "Technical Focus",
    title: "Engineering",
    focus: "Solar PV · BESS",
    detail: "Technical development across solar photovoltaic systems and battery energy storage.",
    media: "/images/about-wind.webp",
    alt: "Wind turbines in a green renewable energy landscape",
    mediaLabel: "Renewable Energy",
  },
  {
    number: "03",
    category: "Delivery",
    title: "Project Development",
    focus: "GreenYellow Asia",
    detail: "Senior Project Development Engineer (PV & BESS) at GreenYellow Asia, based in Ho Chi Minh City.",
    media: "/images/solar-hero.jpg",
    alt: "Renewable energy landscape with wind turbines",
    mediaLabel: "Project Development",
  },
];

export function Expertise() {
  const [active, setActive] = useState(0);

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="expertise-section">
      <div className="phase2-container">
        <div className="expertise-intro phase2-reveal">
          <span className="phase2-pill expertise-pill"><span className="phase2-dot" />Expertise</span>
          <div>
            <h2 id="expertise-title" className="expertise-heading">Renewable energy development, <span>engineering &amp; project delivery</span></h2>
            <p className="expertise-summary">Senior Project Development Engineer (PV &amp; BESS) at GreenYellow Asia, based in Ho Chi Minh City, Vietnam.</p>
          </div>
        </div>
        <div className="feature-list phase2-reveal">
          {features.map((feature, index) => (
            <article className={`feature-row ${active === index ? "feature-row-active" : ""}`} key={feature.number}>
              <h3>
                <button type="button" id={`feature-trigger-${index}`} aria-expanded={active === index} aria-controls={`feature-panel-${index}`} onClick={() => setActive(index)} className="feature-trigger">
                  <span className="feature-number">{feature.number}</span>
                  <span className="feature-label"><small>{feature.category}</small><span>{feature.title}</span></span>
                  <span className="feature-expand" aria-hidden="true">↗</span>
                </button>
              </h3>
              <div id={`feature-panel-${index}`} role="region" aria-labelledby={`feature-trigger-${index}`} inert={active !== index} className="feature-panel">
                <div className="feature-panel-inner">
                  <div className="feature-media">
                    <Image src={feature.media} alt={feature.alt} fill sizes="(max-width: 650px) calc(100vw - 48px), (max-width: 900px) 45vw, 440px" quality={85} className="feature-photo" />
                    <span className="feature-media-number">{feature.number}</span>
                    <span className="feature-media-place">{feature.mediaLabel}</span>
                  </div>
                  <div className="feature-copy">
                    <div><span className="feature-category">{feature.category}</span><h4>{feature.title}</h4><p className="feature-focus">{feature.focus}</p></div>
                    <p className="feature-detail">{feature.detail}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
