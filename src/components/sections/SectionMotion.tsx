"use client";

import { useEffect } from "react";

export function SectionMotion() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".phase2-reveal");
    if (!window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach(element => element.classList.add("phase2-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("phase2-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
