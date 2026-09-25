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

  const activeNavItems = navigation.filter((item) => !item.phase || item.phase === 1);
  const plannedNavItems = navigation.filter((item) => item.phase && item.phase > 1);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm animate-fade-in"
    >
      <Container className="flex min-h-[76px] items-center justify-between gap-6">
        <a
          href="#main-content"
          className="shrink-0 font-serif text-[1.65rem] leading-none tracking-[-0.04em] text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
        >
          {profile.name}
          <span className="text-[var(--accent)]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {activeNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 border-b border-[var(--primary)] text-[13px] font-semibold text-[var(--primary)] transition-colors hover:text-[#25523b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
          >
            LinkedIn <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex min-h-11 min-w-11 cursor-pointer items-center justify-center border border-[var(--border)] bg-white text-[var(--primary)] transition-colors hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="relative flex h-4 w-5 flex-col justify-between" aria-hidden="true">
            <span
              className={`block h-[2px] w-full bg-current transition-transform duration-200 ease-out ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-current transition-transform duration-200 ease-out ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[76px] z-10 bg-black/20 backdrop-blur-[2px] lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full z-20 border-b border-[var(--border)] bg-white p-5 shadow-[0_16px_32px_rgba(23,59,43,0.08)] lg:hidden animate-fade-in"
        >
          <Container className="space-y-4">
            <div className="flex flex-col space-y-1">
              {activeNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-11 items-center px-3 text-sm font-semibold text-[var(--primary)] transition-colors hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Planned sections metadata for reviewers and users */}
            {plannedNavItems.length > 0 && (
              <div className="border-t border-[var(--border)] pt-3">
                <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  Upcoming sections
                </p>
                <div className="grid grid-cols-2 gap-2 px-3 py-1">
                  {plannedNavItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between text-xs text-[var(--muted)]"
                      aria-disabled="true"
                    >
                      <span>{item.label}</span>
                      <span className="rounded bg-[var(--bg)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--muted)]">
                        Phase {item.phase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-[var(--border)] pt-3">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex min-h-11 items-center justify-between bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#25523b] focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
              >
                <span>Connect on LinkedIn</span>
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <div className="px-3 pt-1 text-[11px] text-[var(--muted)]">
              <p className="font-medium text-[var(--text)]">{profile.headline}</p>
              <p className="mt-0.5">{profile.location}</p>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
