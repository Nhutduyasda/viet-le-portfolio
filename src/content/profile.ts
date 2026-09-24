import type { PortfolioData } from "@/types/portfolio";

/**
 * Portfolio content source of truth.
 * Rules:
 * - Strictly NO fabricated professional facts, dates, company names, or metrics.
 * - Any unverified field must remain marked as "TBD" or verified: false.
 */
export const portfolioData: PortfolioData = {
  profile: {
    name: "Viet Le",
    headline: "Senior Project Development Engineer",
    domains: ["Solar PV", "BESS", "Renewable Energy"],
    location: "Ho Chi Minh City, Vietnam",
    linkedinUrl: "TBD",
    email: "TBD",
    heroStatement: "Developing practical energy solutions for a more sustainable future.",
    about: "TBD — owner-approved biography",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    {
      platform: "LinkedIn",
      label: "LinkedIn",
      url: "TBD", // To be updated with owner's public LinkedIn profile
    },
  ],
  expertise: [],
  experience: [],
  projects: [],
  activities: [],
  education: [],
};
