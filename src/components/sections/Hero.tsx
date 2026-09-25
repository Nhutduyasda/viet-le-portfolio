import React from "react";
import Image from "next/image";
import { portfolioData } from "@/content/profile";

export function Hero() {
  const { profile } = portfolioData;

  return (
    <section
      id="overview"
      data-theme="hero-dark"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#081813] text-[#FBFCFD]"
    >
      {/* Background Image: Full bleed, cinematic renewable energy landscape */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/solar-hero.png"
          alt="Modern wind turbines across green mountainous terrain"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Exact Overlay Gradient: Preserves landscape radiance while maintaining WCAG AAA text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8, 24, 19, 0.30), rgba(8, 24, 19, 0.36) 52%, rgba(8, 24, 19, 0.52))",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Hero Center Content Area: Balanced vertical elevation */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 pt-16 pb-8 text-center sm:px-6 lg:px-8">
        {/* 1. Choreographed Eyebrow Capsule */}
        <div className="animate-hero-eyebrow mb-5 sm:mb-6">
          <div className="inline-flex h-[28px] items-center rounded-full border border-white/20 bg-black/25 px-4 text-[12px] sm:text-[13px] font-normal tracking-normal text-[#FBFCFD]/90 backdrop-blur-xs">
            <span>Renewable Energy · Vietnam</span>
          </div>
        </div>

        {/* 2. Headline: Fluid typography naturally composed into two balanced optical lines */}
        <div className="mx-auto max-w-[680px] sm:max-w-[780px] md:max-w-[860px] lg:max-w-[940px] xl:max-w-[1040px]">
          <h1
            id="hero-title"
            className="animate-hero-headline font-sans text-[clamp(2.125rem,4.2vw,3.75rem)] font-medium leading-[1.1] tracking-normal text-[#FBFCFD]"
          >
            Developing practical energy solutions for a sustainable future
          </h1>
        </div>

        {/* 3. Hero CTA: Coordinated custom motion with animated surface fill layer and translating arrow */}
        <div className="animate-hero-cta mt-7 sm:mt-9">
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-[48px] items-center gap-3.5 overflow-hidden rounded-full border border-white/20 bg-black/35 py-1.5 pl-6 pr-2 text-[14px] sm:text-[15px] font-medium text-[#FBFCFD] backdrop-blur-xs transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/40 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#081813]"
          >
            {/* Animated internal fill layer sweeping across on hover */}
            <span
              className="absolute inset-0 origin-left scale-x-0 bg-white/[0.09] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 pointer-events-none"
              aria-hidden="true"
            />

            {/* Stable text label */}
            <span className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
              Connect on LinkedIn
            </span>

            {/* Controlled circular arrow container with subtle diagonal glide and rotation */}
            <span
              aria-hidden="true"
              className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#FBFCFD] text-[#081813] text-xs font-bold transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:bg-white group-hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            >
              <span className="inline-block transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-12">
                ↗
              </span>
            </span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
