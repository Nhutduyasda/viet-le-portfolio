import { Container } from "@/components/layout/Container";
import { portfolioData } from "@/content/profile";

export function SiteHeader() {
  const { profile, navigation } = portfolioData;
  return (
    <header className="relative z-20 border-b border-[var(--border)] bg-[var(--bg)]">
      <Container className="flex min-h-[76px] items-center justify-between gap-6">
        <a href="#main-content" className="shrink-0 font-serif text-[1.65rem] leading-none tracking-[-0.04em] text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]">{profile.name}<span className="text-[var(--accent)]">.</span></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => <a key={item.href} href={item.href} className="text-[13px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]">{item.label}</a>)}
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 border-b border-[var(--primary)] text-[13px] font-semibold text-[var(--primary)] transition-colors hover:text-[#356449] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]">LinkedIn <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        </nav>
        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center border border-[var(--border)] bg-white text-[var(--primary)] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] [&::-webkit-details-marker]:hidden" aria-label="Toggle navigation menu">
            <span className="flex flex-col gap-[5px]" aria-hidden="true"><span className="block h-[2px] w-5 bg-current"/><span className="block h-[2px] w-5 bg-current"/><span className="block h-[2px] w-5 bg-current"/></span>
          </summary>
          <nav aria-label="Mobile navigation" className="absolute right-0 top-[calc(100%+12px)] w-[min(18rem,calc(100vw-2rem))] border border-[var(--border)] bg-white p-3 shadow-[0_16px_30px_rgba(23,59,43,0.09)]">
            {navigation.map((item) => <a key={item.href} href={item.href} className="block min-h-11 px-3 py-3 text-sm font-medium text-[var(--primary)] hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]">{item.label}</a>)}
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block min-h-11 border-t border-[var(--border)] px-3 py-3 text-sm font-semibold text-[var(--primary)] hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]">LinkedIn ↗ <span className="sr-only">(opens in a new tab)</span></a>
          </nav>
        </details>
      </Container>
    </header>
  );
}
