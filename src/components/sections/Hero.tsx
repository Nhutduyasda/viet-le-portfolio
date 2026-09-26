import Image from "next/image";
import type { CSSProperties } from "react";
import { portfolioData } from "@/content/profile";

const headlineLines = [
  "Developing renewable energy projects",
  "across Solar PV & BESS",
];

function HeadlineLine({ text, offset }: { text: string; offset: number }) {
  let index = offset;
  return (
    <span className="hero-title-line md:block" aria-hidden="true">
      {text.split(" ").map((word, wordIndex) => (
        <span className="hero-word" key={`${word}-${wordIndex}`}>
          {[...word].map((letter, letterIndex) => {
            const characterIndex = index++;
            return <span key={letterIndex} className="hero-letter" style={{ "--character-index": characterIndex } as CSSProperties}>{letter}</span>;
          })}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const { profile } = portfolioData;

  return (
    <section id="overview" aria-labelledby="hero-title" className="hero relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#081813] text-white">
      <Image src="/images/solar-hero.png" alt="Wind turbines across green mountain ridges" fill priority sizes="100vw" className="hero-image object-cover" />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="hero-content relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 text-center">
        <p className="hero-enter hero-eyebrow mb-5 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[13px] leading-5 text-white/90">{profile.heroEyebrow}</p>
        <h1 id="hero-title" aria-label={headlineLines.join(" ")} className="hero-title max-w-[1120px] font-medium">
          <HeadlineLine text={headlineLines[0]} offset={0} />{" "}
          <HeadlineLine text={headlineLines[1]} offset={headlineLines[0].replaceAll(" ", "").length} />
        </h1>
        <p className="hero-enter hero-description mt-6 max-w-[610px] text-white/90">{profile.heroDescription}</p>
        <a href="#expertise" className="hero-enter hero-link mt-8 inline-flex min-h-[60px] items-center gap-[30px] overflow-hidden rounded-full bg-white/10 py-2 pl-[26px] pr-[10px] text-[16px] text-white backdrop-blur-[10px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <span className="hero-link-label relative z-20">Explore My Expertise</span>
          <span aria-hidden="true" className="hero-link-icon relative z-10 flex h-10 w-10 shrink-0 items-center justify-center text-[#101014]">
            <span className="hero-link-circle absolute inset-0 rounded-full bg-white" />
            <svg className="hero-link-arrow relative h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </span>
        </a>
      </div>
    </section>
  );
}
