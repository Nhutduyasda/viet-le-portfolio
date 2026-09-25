import { Container } from "@/components/layout/Container";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { portfolioData } from "@/content/profile";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#081813] text-[#FBFCFD]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#FBFCFD] focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-[#081813] focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="relative">
        <Hero />
      </main>
      <footer className="relative z-10 border-t border-white/10 bg-[#081813] py-6 text-xs text-[#788182]">
        <Container className="flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.</p>
          <p className="tracking-wide">Solar PV · BESS · Renewable Energy</p>
        </Container>
      </footer>
    </div>
  );
}
