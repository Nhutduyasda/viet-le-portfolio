import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { portfolioData } from "@/content/profile";

export function Hero() {
  const { profile } = portfolioData;
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden">
      <Container className="grid items-center gap-10 py-14 sm:gap-14 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-24">
        <div className="max-w-[640px]">
          <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]"><span className="h-px w-8 bg-[var(--accent)]" aria-hidden="true"/>Renewable energy · Vietnam</p>
          <h1 id="hero-title" className="text-balance text-[clamp(3.5rem,7vw,7.2rem)] font-semibold leading-[0.96] tracking-[-0.075em] text-[var(--primary)]">{profile.name}<span className="text-[var(--accent)]">.</span></h1>
          <p className="mt-7 max-w-[570px] font-serif text-[clamp(1.8rem,3vw,3.3rem)] leading-[1.14] tracking-[-0.035em] text-[var(--text)]">{profile.headline}</p>
          <p className="mt-7 max-w-[490px] text-[15px] leading-[1.85] text-[var(--muted)] sm:text-[17px]">{profile.heroStatement}</p>
          <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">{profile.domains.join("  ·  ")}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-4 bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#356449] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]">Connect on LinkedIn <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
            <a href="#expertise" className="inline-flex min-h-12 items-center gap-2 border-b border-[var(--primary)] text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[#356449] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]">Explore expertise <span aria-hidden="true">↗</span></a>
          </div>
          <p className="mt-10 text-xs text-[var(--muted)]">Based in {profile.location}</p>
        </div>
        <figure className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
          <div className="absolute -right-4 -top-4 h-28 w-28 bg-[var(--accent-soft)] sm:-right-6 sm:-top-6 sm:h-40 sm:w-40" aria-hidden="true" />
          <div className="relative aspect-[4/4.5] overflow-hidden bg-[#e5ece1] sm:aspect-[5/5.2] lg:aspect-[4/4.8]">
            <Image src="/solar-landscape.svg" alt="Editorial illustration of solar panels in a green landscape" fill sizes="(max-width: 1023px) 100vw, 42vw" priority className="object-cover" />
          </div>
          <figcaption className="relative mt-4 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-3 text-[11px] uppercase tracking-[0.13em] text-[var(--muted)]"><span>Renewable energy</span><span>Illustrative visual · Solar PV</span></figcaption>
        </figure>
      </Container>
    </section>
  );
}
