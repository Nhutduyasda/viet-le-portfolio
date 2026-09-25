import Image from "next/image";
import { portfolioData } from "@/content/profile";

export function Hero() {
  const { profile } = portfolioData;

  return (
    <section id="overview" aria-labelledby="hero-title" className="hero relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#081813] text-white">
      <Image src="/images/solar-hero.png" alt="Wind turbines across green mountain ridges" fill priority sizes="100vw" className="hero-image object-cover" />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="hero-content relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 text-center">
        <p className="hero-enter hero-eyebrow mb-5 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[13px] leading-5 text-white/90">Renewable Energy · Solar PV · BESS</p>
        <h1 id="hero-title" className="hero-enter hero-title max-w-[1120px] font-medium tracking-[-0.025em]">
          <span className="block">Developing practical energy solutions</span>
          <span className="block">for a sustainable future</span>
        </h1>
        <p className="hero-enter hero-description mt-6 max-w-[610px] text-white/90">{profile.headline} focused on Solar PV, BESS and renewable energy development in Vietnam.</p>
        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hero-enter hero-link mt-8 inline-flex min-h-[60px] items-center gap-7 rounded-full bg-[#222923]/90 py-2 pl-6 pr-2 text-[16px] text-white transition-colors hover:bg-[#303a32] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <span>Connect on LinkedIn</span><span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-[#081813]">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
