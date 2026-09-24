import { Container } from "@/components/layout/Container";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { portfolioData } from "@/content/profile";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-white">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="flex-1"><Hero /></main>
      <footer className="border-t border-[var(--border)] py-6">
        <Container className="flex flex-wrap justify-between gap-3 text-xs text-[var(--muted)]"><p>© {new Date().getFullYear()} {portfolioData.profile.name}</p><p>Solar PV · BESS · Renewable Energy</p></Container>
      </footer>
    </div>
  );
}
