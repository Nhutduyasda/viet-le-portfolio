import React from "react";
import Image from "next/image";
import { portfolioData } from "@/content/profile";

export function Hero() {
  const { profile } = portfolioData;

  return (
    <section
      id="overview"
      aria-labelledby="hero-title"
      className="relative px-3 pt-3 pb-8 sm:px-6 sm:pt-4 sm:pb-12 lg:px-8 lg:pt-6 lg:pb-16"
    >
      {/* Immersive Framed Hero Container */}
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] bg-[#0c2617] text-white shadow-[0_24px_50px_rgba(13,40,24,0.18)]">
        {/* Photographic Renewable Energy Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/solar-hero.jpg"
            alt="Aerial panoramic photograph of utility-scale solar PV farm nestled in lush green mountain landscape"
            fill
            priority
            sizes="(max-width: 1400px) 100vw, 1360px"
            className="object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
          />
          {/* Depth Gradients: Vignette & Legibility Overlays */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#0b2014]/75 via-[#0d2818]/50 to-[#08180e]/92"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-black/25 to-black/60"
            aria-hidden="true"
          />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 flex min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex-col justify-between p-6 sm:p-10 lg:p-16">
          {/* Top Row: Eyebrow Badge */}
          <div className="flex justify-center pt-2 sm:pt-4">
            <div className="animate-slide-up inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8ae06a] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8ae06a]" />
              </span>
              <span>Senior Project Development Engineer · Solar PV · BESS</span>
            </div>
          </div>

          {/* Central Main Headline & Statement */}
          <div className="mx-auto my-auto max-w-[880px] text-center py-8 sm:py-12">
            <h1
              id="hero-title"
              className="animate-slide-up text-balance font-sans text-[clamp(2.5rem,5.6vw,5.2rem)] font-bold leading-[1.05] tracking-[-0.035em] text-white"
            >
              Developing practical energy solutions for a{" "}
              <span className="font-serif italic font-normal text-[#d4f2bc] tracking-normal">
                sustainable future
              </span>
              .
            </h1>

            <p className="animate-slide-up-delay-1 mx-auto mt-6 max-w-[660px] text-balance text-base sm:text-lg leading-relaxed text-white/85 font-normal">
              I’m <strong className="font-semibold text-white">{profile.name}</strong>, a renewable energy specialist focused on utility-scale Solar PV, Battery Energy Storage Systems (BESS), and project development across Vietnam.
            </p>

            {/* Solarize Refined CTA Button */}
            <div className="animate-slide-up-delay-2 mt-8 sm:mt-10 flex items-center justify-center">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center gap-4 rounded-full border border-white/25 bg-black/45 py-1.5 pl-6 pr-2 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white shadow-xl"
              >
                <span>Connect on LinkedIn</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--primary)] shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <span aria-hidden="true" className="text-base font-bold leading-none">↗</span>
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          {/* Bottom Layer: Floating Glass Strip with Context & Attribution */}
          <div className="animate-slide-up-delay-2 pt-4">
            <div className="grid gap-3 sm:grid-cols-3 rounded-2xl border border-white/15 bg-white/10 p-3.5 sm:p-4 backdrop-blur-md text-xs text-white/90">
              <div className="flex flex-col gap-0.5 px-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                  Focus Domains
                </span>
                <span className="font-medium text-white">
                  Solar PV · BESS · Project Development
                </span>
              </div>
              <div className="flex flex-col gap-0.5 border-t border-white/10 pt-2 sm:border-t-0 sm:border-l sm:pt-0 sm:px-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                  Based In
                </span>
                <span className="font-medium text-white flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8ae06a]" aria-hidden="true" />
                  {profile.location}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 border-t border-white/10 pt-2 sm:border-t-0 sm:border-l sm:pt-0 sm:px-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                  Art Direction
                </span>
                <span className="font-medium text-white/80">
                  Illustrative Visual · Renewable Infrastructure
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
