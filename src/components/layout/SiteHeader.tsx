"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { portfolioData } from "@/content/profile";

export function SiteHeader() {
  const { profile, navigation } = portfolioData;
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // In Phase 1, only expose existing sections to avoid dead links
  const activeNavItems = navigation.filter(
    (item) => !item.phase || item.phase === 1
  );

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-white/10 bg-[#0d2818]/85 text-white backdrop-blur-md transition-colors duration-200"
    >
      <Container className="flex min-h-[72px] items-center justify-between gap-6">
        {/* Brand Wordmark */}
        <a
          href="#main-content"
          className="shrink-0 font-sans text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {profile.name}
          <span className="text-[var(--accent)] font-serif italic text-2xl leading-none">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {activeNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span>LinkedIn</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </nav>

        {/* Mobile Menu Trigger — Solarize organic circular button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="relative flex h-3.5 w-4 flex-col justify-between" aria-hidden="true">
            <span
              className={`block h-[1.5px] w-full bg-current transition-transform duration-200 ease-out ${
                isOpen ? "translate-y-[5.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-current transition-transform duration-200 ease-out ${
                isOpen ? "-translate-y-[5.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[72px] z-30 bg-black/40 backdrop-blur-[3px] lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full z-40 border-b border-white/10 bg-[#0d2818]/95 p-5 text-white shadow-2xl backdrop-blur-xl lg:hidden animate-fade-in"
        >
          <Container className="space-y-4">
            <div className="flex flex-col space-y-1">
              {activeNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold tracking-wide text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="border-t border-white/10 pt-3">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 items-center justify-between rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--primary)] transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Connect on LinkedIn</span>
                <span aria-hidden="true" className="font-bold">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <div className="px-3 pt-1 text-[11px] text-white/60">
              <p className="font-medium text-white/80">{profile.headline}</p>
              <p className="mt-0.5">{profile.location}</p>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
