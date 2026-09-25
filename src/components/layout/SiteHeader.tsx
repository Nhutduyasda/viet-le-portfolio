"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/content/profile";

export function SiteHeader() {
  const { profile } = portfolioData;
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

  return (
    <header
      ref={headerRef}
      className="absolute top-0 left-0 right-0 z-40 bg-transparent pt-6 sm:pt-7"
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Left: Viet Le Wordmark */}
        <a
          href="#overview"
          className="font-sans text-[18px] sm:text-[20px] font-medium tracking-tight text-[#FBFCFD] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {profile.name}
        </a>

        {/* Right Desktop: Overview nav link + White Pill CTA */}
        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Main navigation" className="flex items-center gap-7">
            <a
              href="#overview"
              className="text-[14px] font-medium text-[#FBFCFD]/85 transition-colors hover:text-[#FBFCFD] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Overview
            </a>
          </nav>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[42px] items-center justify-center rounded-full bg-[#FBFCFD] px-6 text-[14px] font-medium text-[#081813] transition-all hover:bg-white hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>LinkedIn</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        {/* Mobile: Compact circular menu button matching reference */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FBFCFD] text-[#081813] transition-transform active:scale-95 lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="relative flex h-3 w-3.5 flex-col justify-between" aria-hidden="true">
            <span
              className={`block h-[1.5px] w-full bg-[#081813] transition-transform duration-200 ease-out ${
                isOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-[#081813] transition-transform duration-200 ease-out ${
                isOpen ? "-translate-y-[5.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      {isOpen && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile navigation"
          className="absolute left-4 right-4 top-20 z-40 rounded-2xl border border-white/15 bg-[#081813]/95 p-5 text-white shadow-2xl backdrop-blur-md lg:hidden animate-fade-in"
        >
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <a
                href="#overview"
                onClick={() => setIsOpen(false)}
                className="flex min-h-10 items-center px-2 text-[15px] font-medium text-[#FBFCFD] hover:text-[#FBFCFD]/80"
              >
                Overview
              </a>
            </div>

            <div className="border-t border-white/10 pt-3">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex h-11 items-center justify-center rounded-full bg-[#FBFCFD] px-5 text-sm font-medium text-[#081813] transition-opacity hover:opacity-95"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
