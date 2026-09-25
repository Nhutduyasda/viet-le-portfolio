import { Container } from "@/components/layout/Container";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { portfolioData } from "@/content/profile";

export default function Home() {
  const { profile } = portfolioData;

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)]">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#FBFCFD] focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-[#081813] focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#081813]"
      >
        Skip to main content
      </a>

      {/* Scoped Immersive Phase 1 Header */}
      <SiteHeader />

      {/* Main Content Area */}
      <main id="main-content" className="relative flex-1">
        <Hero />
      </main>

      {/* Base Scandinavian Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-8 text-xs text-[var(--muted)]">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="tracking-wide">Solar PV · BESS · Renewable Energy</p>
        </Container>
      </footer>
    </div>
  );
}
