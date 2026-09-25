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

        {/* 2. Choreographed Main Headline — Exactly two architectural lines on desktop */}
        <div className="mx-auto max-w-[1100px]">
          <h1
            id="hero-title"
            className="animate-hero-headline font-sans text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-[60px] font-medium leading-[1.04] tracking-[-0.035em] text-[#FBFCFD]"
          >
            <span className="lg:whitespace-nowrap">Developing practical energy solutions</span>
            <br className="hidden lg:inline" />{" "}
            <span className="lg:whitespace-nowrap">for a sustainable future</span>
          </h1>
        </div>

        {/* 3. Choreographed CTA Support Element with coordinated micro-interactions */}
        <div className="animate-hero-cta mt-7 sm:mt-9">
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-[48px] items-center gap-3.5 rounded-full border border-white/20 bg-black/30 py-1.5 pl-6 pr-2 text-[14px] sm:text-[15px] font-medium text-[#FBFCFD] backdrop-blur-xs transition-all duration-200 hover:border-white/40 hover:bg-black/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#081813]"
          >
            <span>Connect on LinkedIn</span>
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBFCFD] text-[#081813] text-xs font-bold transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white"
            >
              ↗
            </span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
