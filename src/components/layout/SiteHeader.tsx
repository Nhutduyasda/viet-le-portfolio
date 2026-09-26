"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/content/profile";

const links = [
  { label: "Home", href: "#overview" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
];

export function SiteHeader() {
  const { profile } = portfolioData;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = document.getElementById("overview");
    if (!hero) return;
    const update = () => setScrolled(hero.getBoundingClientRect().bottom <= 76);
    update();
    const observer = new IntersectionObserver(update, { rootMargin: "-76px 0px 0px 0px", threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  function close(restore = false) {
    setOpen(false);
    if (restore) requestAnimationFrame(() => trigger.current?.focus());
  }

  useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => panel.current?.querySelector<HTMLElement>("a[href]")?.focus());
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

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeAtDesktop = () => {
      if (window.matchMedia("(min-width: 768px)").matches) close(true);
    };
    window.addEventListener("resize", closeAtDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("resize", closeAtDesktop);
    };
  }, [open]);

  return (
    <header className={`site-header fixed inset-x-0 top-0 z-30 text-white ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="site-header-inner mx-auto flex max-w-[1360px] items-center justify-between">
        <a href="#overview" className="site-wordmark rounded-sm font-bold tracking-[-0.035em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{profile.name}</a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {links.map(link => link.href
            ? <a key={link.label} href={link.href} className="site-nav-link text-[16px] font-medium text-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" aria-label={link.label}><span className="nav-label-window" aria-hidden="true"><span className="nav-label-track"><span className="nav-label-copy">{link.label}</span><span className="nav-label-copy">{link.label}</span></span></span></a>
            : <span key={link.label} className="text-[16px] font-medium text-white/90" title="Coming in a later phase">{link.label}</span>)}
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="header-linkedin ml-1 inline-flex min-h-11 min-w-[112px] justify-center items-center rounded-full bg-white px-5 text-[15px] font-medium text-[#081813] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><span className="nav-label-window" aria-hidden="true"><span className="nav-label-track"><span className="nav-label-copy">LinkedIn</span><span className="nav-label-copy">LinkedIn</span></span></span></a>
        </nav>
        <button ref={trigger} type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => open ? close() : setOpen(true)} className="mobile-trigger flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#081813] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:hidden">
          <span aria-hidden="true" className={`menu-strokes ${open ? "menu-strokes-open" : ""}`}><span /><span /></span>
        </button>
      </div>
      <button type="button" aria-label="Close navigation menu" tabIndex={open ? 0 : -1} inert={!open} onClick={() => close(true)} className={`mobile-backdrop md:hidden ${open ? "mobile-backdrop-open" : ""}`} />
      <nav ref={panel} id="mobile-nav" aria-label="Mobile navigation" aria-hidden={!open} inert={!open} data-open={open} className="mobile-panel rounded-2xl bg-[#081813] p-5 shadow-2xl md:hidden">
        {links.map(link => link.href
          ? <a key={link.label} href={link.href} onClick={() => close(true)} className="mobile-menu-link flex min-h-12 items-center rounded-md px-2 text-lg focus-visible:outline-2 focus-visible:outline-white">{link.label}</a>
          : <span key={link.label} className="flex min-h-12 items-center px-2 text-lg text-white/75" title="Coming in a later phase">{link.label}</span>)}
        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" onClick={() => close(true)} className="mobile-menu-cta mt-3 flex min-h-12 items-center justify-center rounded-full bg-white text-[#081813] focus-visible:outline-2 focus-visible:outline-white">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
      </nav>
    </header>
  );
}
