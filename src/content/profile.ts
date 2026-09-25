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
    linkedinUrl: "https://www.linkedin.com/in/lenguyenquocviet118/",
    email: "TBD",
    heroStatement: "Developing practical energy solutions for a more sustainable future.",
    about: "TBD — owner-approved biography",
  },
  navigation: [
    { label: "Overview", href: "#overview", phase: 1 },
    { label: "About", href: "#about", phase: 2 },
    { label: "Expertise", href: "#expertise", phase: 2 },
    { label: "Experience", href: "#experience", phase: 3 },
    { label: "Projects", href: "#projects", phase: 4 },
  ],
  socialLinks: [
    {
      platform: "LinkedIn",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/lenguyenquocviet118/",
    },
  ],
  expertise: [
    { id: "solar", title: "Solar PV", description: "Focus on practical solar energy solutions within renewable energy development.", verified: true },
    { id: "bess", title: "Battery Energy Storage (BESS)", description: "Battery energy storage within modern renewable energy development.", verified: true },
    { id: "renewable", title: "Renewable Energy", description: "Professional focus on renewable energy and a more sustainable future.", verified: true },
    { id: "development", title: "Project Development", description: "Development-focused engineering across Solar PV and BESS.", verified: true },
  ],
  experience: [],
  projects: [],
  activities: [],
  education: [],
};
