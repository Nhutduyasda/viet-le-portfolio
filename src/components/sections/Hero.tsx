import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { portfolioData } from "@/content/profile";

export function Hero() {
  const { profile } = portfolioData;

  return (
    <section id="overview" aria-labelledby="hero-title" className="relative overflow-hidden scroll-mt-20">
      <Container className="grid items-center gap-10 py-12 sm:gap-14 sm:py-18 lg:min-h-[700px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-20">
        <div className="max-w-[640px]">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] animate-slide-up">
            <span className="h-px w-8 bg-[var(--accent)]" aria-hidden="true" />
            <span>Renewable energy · Vietnam</span>
          </div>

          {/* Identity & Display Title */}
          <h1
            id="hero-title"
            className="text-balance text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[var(--primary)] animate-slide-up"
          >
            {profile.name}
            <span className="text-[var(--accent)]">.</span>
          </h1>

          {/* Professional Headline */}
          <p className="mt-6 max-w-[570px] font-serif text-[clamp(1.75rem,2.8vw,3.1rem)] leading-[1.16] tracking-[-0.035em] text-[var(--text)] animate-slide-up-delay-1">
            {profile.headline}
          </p>

          {/* Statement */}
          <p className="mt-6 max-w-[490px] text-[15px] leading-[1.8] text-[var(--muted)] sm:text-[17px] animate-slide-up-delay-1">
            {profile.heroStatement}
          </p>

          {/* Focus Domains */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--primary)] animate-slide-up-delay-1">
            {profile.domains.map((domain, index) => (
              <React.Fragment key={domain}>
                <span>{domain}</span>
                {index < profile.domains.length - 1 && (
                  <span className="text-[var(--accent)]" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 animate-slide-up-delay-2">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-3 bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#25523b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
            >
              <span>Connect on LinkedIn</span>
              <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="#overview-visual"
              className="inline-flex min-h-12 items-center gap-2 border-b border-[var(--primary)] text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[#25523b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
            >
              <span>Explore overview</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Verified Location */}
          <div className="mt-9 flex items-center gap-2 text-xs text-[var(--muted)] animate-slide-up-delay-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            <span>Based in {profile.location}</span>
          </div>
        </div>

        {/* Visual Element */}
        <figure
          id="overview-visual"
          className="relative mx-auto w-full max-w-[540px] scroll-mt-24 lg:ml-auto animate-visual-reveal"
        >
          <div
            className="absolute -right-2 -top-2 h-24 w-24 bg-[var(--accent-soft)] sm:-right-4 sm:-top-4 sm:h-36 sm:w-36"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/4.5] overflow-hidden bg-[#e5ece1] sm:aspect-[5/5.2] lg:aspect-[4/4.8]">
            <Image
              src="/solar-landscape.svg"
              alt="Editorial illustration of solar panels in a green landscape"
              fill
              sizes="(max-width: 1023px) 100vw, 42vw"
              priority
              className="object-cover"
            />
          </div>
          <figcaption className="relative mt-4 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-3 text-[11px] uppercase tracking-[0.13em] text-[var(--muted)]">
            <span>Renewable energy</span>
            <span>Illustrative visual · Solar PV</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
