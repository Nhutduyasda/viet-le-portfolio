"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/content/profile";

export function SiteHeader() {
  const { profile } = portfolioData;
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  // Close menu and restore focus to trigger button
  const closeMenu = (restoreFocus = true) => {
    setIsOpen(false);
    if (restoreFocus) {
      triggerRef.current?.focus();
    }
  };

  // Keyboard navigation: Escape key to dismiss & focus trap within open drawer
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Click outside header to dismiss
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Auto-focus first interactive element when opening drawer
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const firstFocusable = drawerRef.current.querySelector<HTMLElement>("a, button");
      firstFocusable?.focus();
    }
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      role="banner"
      className="absolute top-0 left-0 right-0 z-40 bg-transparent pt-6 sm:pt-7"
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Left: Viet Le Wordmark */}
        <a
          href="#overview"
          className="font-sans text-[18px] sm:text-[20px] font-medium tracking-tight text-[#FBFCFD] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBFCFD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081813] rounded-sm"
        >
          {profile.name}
        </a>

        {/* Right Desktop: Overview nav link + White Pill CTA */}
        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Main navigation" className="flex items-center gap-7">
            <a
              href="#overview"
              className="text-[14px] font-medium text-[#FBFCFD]/85 transition-colors hover:text-[#FBFCFD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBFCFD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081813] rounded-sm"
            >
              Overview
            </a>
          </nav>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[42px] items-center justify-center rounded-full bg-[#FBFCFD] px-6 text-[14px] font-medium text-[#081813] transition-all duration-150 hover:bg-white hover:shadow-[0_2px_12px_rgba(251,252,253,0.2)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBFCFD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081813]"
          >
            <span>LinkedIn</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        {/* Mobile: Compact circular menu button matching reference */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => {
            if (isOpen) {
              closeMenu(false);
            } else {
              setIsOpen(true);
            }
          }}
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FBFCFD] text-[#081813] transition-transform duration-150 active:scale-95 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBFCFD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081813]"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="relative flex h-3 w-3.5 flex-col justify-between" aria-hidden="true">
            <span
              className={`block h-[1.5px] w-full bg-[#081813] transition-transform duration-200 ease-out origin-center ${
                isOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-[#081813] transition-transform duration-200 ease-out origin-center ${
                isOpen ? "-translate-y-[5.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Backdrop with smooth fade transition */}
      <div
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-xs transition-opacity duration-200 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => closeMenu(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel with animated enter/exit transition */}
      <nav
        ref={drawerRef}
        id="mobile-nav-panel"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`absolute left-4 right-4 top-20 z-40 rounded-2xl border border-white/15 bg-[#081813]/95 p-5 text-white shadow-2xl backdrop-blur-md transition-all duration-200 ease-out lg:hidden ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-2 scale-98 pointer-events-none"
        }`}
      >
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <a
              href="#overview"
              onClick={() => closeMenu(false)}
              className="flex min-h-10 items-center px-2 text-[15px] font-medium text-[#FBFCFD] transition-colors hover:text-[#FBFCFD]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBFCFD] rounded-md"
            >
              Overview
            </a>
          </div>

          <div className="border-t border-white/10 pt-3">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => closeMenu(false)}
              className="flex h-11 items-center justify-center rounded-full bg-[#FBFCFD] px-5 text-sm font-medium text-[#081813] transition-all duration-150 hover:bg-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBFCFD]"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
