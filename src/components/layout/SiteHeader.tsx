"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/content/profile";

const links = [
  { label: "Home", href: "#overview" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience" },
];

export function SiteHeader() {
  const { profile } = portfolioData;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY >= window.innerHeight);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function close(restore = false) {
    setOpen(false);
    if (restore) requestAnimationFrame(() => trigger.current?.focus());
  }

  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
      }
      if (event.key === "Tab" && panel.current) {
        const items = [...panel.current.querySelectorAll<HTMLElement>("a[href]")];
        if (event.shiftKey && document.activeElement === items[0]) {
          event.preventDefault(); items.at(-1)?.focus();
        } else if (!event.shiftKey && document.activeElement === items.at(-1)) {
          event.preventDefault(); items[0]?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header fixed inset-x-0 top-0 z-30 text-white ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="site-header-inner mx-auto flex max-w-[1360px] items-center justify-between">
        <a href="#overview" className="site-wordmark rounded-sm font-bold tracking-[-0.035em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{profile.name}</a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {links.map(link => link.href
            ? <a key={link.label} href={link.href} className="text-[16px] font-medium text-white/90 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{link.label}</a>
            : <span key={link.label} className="text-[16px] font-medium text-white/90" title="Coming in a later phase">{link.label}</span>)}
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="ml-1 inline-flex min-h-11 min-w-[112px] justify-center items-center rounded-full bg-white px-5 text-[15px] font-medium text-[#081813] transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
        </nav>
        <button ref={trigger} type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => open ? close() : setOpen(true)} className="mobile-trigger flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#081813] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:hidden">
          <span aria-hidden="true" className={`menu-strokes ${open ? "menu-strokes-open" : ""}`}><span /><span /></span>
        </button>
      </div>
      <nav ref={panel} id="mobile-nav" aria-label="Mobile navigation" inert={!open} className={`mobile-panel absolute left-5 right-5 top-[78px] rounded-2xl bg-[#081813] p-5 shadow-2xl md:hidden ${open ? "block" : "hidden"}`}>
        {links.map(link => link.href
          ? <a key={link.label} href={link.href} onClick={() => close()} className="flex min-h-12 items-center rounded-md px-2 text-lg focus-visible:outline-2 focus-visible:outline-white">{link.label}</a>
          : <span key={link.label} className="flex min-h-12 items-center px-2 text-lg text-white/75" title="Coming in a later phase">{link.label}</span>)}
        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" onClick={() => close()} className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-white text-[#081813] focus-visible:outline-2 focus-visible:outline-white">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
      </nav>
    </header>
  );
}
