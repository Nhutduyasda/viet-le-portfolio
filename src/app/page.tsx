import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Background } from "@/components/sections/Background";
import { Contact } from "@/components/sections/Contact";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionMotion } from "@/components/sections/SectionMotion";

export default function Home() {
  return (
    <>
      <SectionMotion />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-[#081813]">Skip to main content</a>
      <SiteHeader />
      <main id="main-content"><Hero /><About /><Expertise /><Experience /><Projects /><Background /><Contact /></main>
      <SiteFooter />
    </>
  );
}
