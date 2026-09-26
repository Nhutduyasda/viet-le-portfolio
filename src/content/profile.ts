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
    heroStatement: "Developing renewable energy projects across Solar PV & BESS",
    heroEyebrow: "Viet Le · Senior Project Development Engineer",
    heroDescription: "Senior Project Development Engineer focused on Solar PV, BESS and renewable-energy development.",
    aboutHeadingLead: "My work focuses on renewable-energy project development across",
    aboutHeadingAccent: "Solar PV and BESS.",
    aboutCardStatement: "Working across renewable-energy project development with a focus on Solar PV and BESS.",
    employer: "GreenYellow Asia",
    expertiseHeadingLead: "My work spans renewable energy development,",
    expertiseHeadingAccent: "engineering & project delivery",
    expertiseSummary: "My experience is centered on Solar PV and BESS, with work across engineering and project development.",
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
    { id: "solar", title: "Solar PV", description: "Solar PV within renewable-energy project development.", verified: true },
    { id: "bess", title: "Battery Energy Storage (BESS)", description: "Battery energy storage within modern renewable energy development.", verified: true },
    { id: "renewable", title: "Renewable Energy", description: "Renewable-energy project development.", verified: true },
    { id: "development", title: "Project Development", description: "Development-focused engineering across Solar PV and BESS.", verified: true },
  ],
  expertiseFeatures: [
    {
      number: "01", category: "Project Development", title: "Solar PV & BESS Development",
      focus: "Renewable Energy", detail: "My work includes project development across Solar PV and battery energy storage.",
      media: { type: "image", src: "/images/solar-bess.webp", alt: "Illustrative solar panels and battery storage equipment in a green landscape", label: "Solar PV · BESS" },
    },
    {
      number: "02", category: "Engineering", title: "Technical Development",
      focus: "Solar PV · BESS", detail: "Engineering work supporting the development of Solar PV and battery energy storage projects.",
      media: { type: "image", src: "/images/about-wind.webp", alt: "Illustrative turbines in a green energy landscape", label: "Renewable Energy" },
    },
    {
      number: "03", category: "Project Development", title: "Project Development",
      focus: "GreenYellow Asia", detail: "My current role focuses on Solar PV and BESS project development at GreenYellow Asia.",
      media: { type: "image", src: "/images/solar-bess.webp", alt: "Illustrative photovoltaic panels and battery storage", label: "Project Development" },
    },
  ],
  experience: [
    {
      id: "greenyellow", number: "01", company: "GreenYellow Asia",
      period: "Jun 2026 — Present", current: true,
      location: "Ho Chi Minh City, Vietnam",
      roles: [{ title: "Senior Project Development Engineer (PV & BESS)", period: "Jun 2026 — Present" }],
      summary: "Current role focused on project development across Solar PV and battery energy storage.",
      verified: true,
    },
    {
      id: "ecoligo", number: "02", company: "ecoligo",
      period: "Jul 2023 — Jun 2026",
      roles: [
        { title: "Project Engineer", period: "Jul 2023 — Sep 2025", region: "Vietnam & Philippines" },
        { title: "Jr. Technical Project Manager", period: "Sep 2025 — Jun 2026", region: "Vietnam & Philippines" },
      ],
      verified: true,
    },
    {
      id: "solarbk", number: "03", company: "SolarBK",
      period: "Mar 2022 — Jun 2023", location: "Ho Chi Minh City, Vietnam",
      roles: [], verified: true,
    },
    {
      id: "asia-networks", number: "04", company: "Asia Networks Energy JSC",
      period: "Oct 2020 — Mar 2022",
      roles: [{ title: "Project Engineer", period: "Oct 2020 — Mar 2022" }],
      verified: true,
    },
  ],
  projects: [
    {
      id: "ecoligo-garment-solar",
      number: "01",
      title: "1.06 MWp Solar Project",
      projectType: "Solar PV Project",
      location: "Vietnam",
      employerContext: "ecoligo",
      clientDisplay: "Local garment producer",
      capacity: "1.06 MWp",
      impactMetric: "~16,000 tCO₂",
      impactLabel: "Estimated CO₂ savings over the project's lifetime",
      impactAttribution: "Impact figure publicly stated by ecoligo for this project.",
      connection: "Accompanied the Mirova team on a visit to this project.",
      sourceLabel: "ecoligo public post, reposted by Thuong Duong",
      sourceUrl: "https://vn.linkedin.com/in/thuong-duong-89219b193",
      verified: true,
    },
  ],
  professionalDevelopment: [
    {
      id: "dppa-eav", number: "01",
      title: "DPPA & Vietnam Electricity Market Training",
      organization: "Electricity Authority of Vietnam (EAV)",
      date: "2026",
      sourceLabel: "GreenYellow colleague's public post",
      sourceUrl: "https://www.linkedin.com/posts/giang-nguy%E1%BB%85n-28949889_dppa-vietnamenergy-electricitymarket-activity-7499067974524448768-fSwE",
      verified: true,
    },
    {
      id: "pmp-training", number: "02",
      title: "PMP® Certification Training Course",
      organization: "PMA Vietnam — Professional Management Academy",
      date: "Dec 2025",
      sourceLabel: "Viet Le's public LinkedIn profile",
      sourceUrl: "https://www.linkedin.com/in/lenguyenquocviet118/",
      verified: true,
    },
    {
      id: "toeic-790", number: "03",
      title: "TOEIC — Total Score 790",
      organization: "ETS (Educational Testing Service)",
      date: "Oct 2020",
      status: "Expired Oct 2022",
      sourceLabel: "Viet Le's public LinkedIn profile",
      sourceUrl: "https://www.linkedin.com/in/lenguyenquocviet118/",
      verified: true,
    },
  ],
  education: [
    {
      id: "can-tho", institution: "Can Tho University", year: "2016 — 2020",
      sourceUrl: "https://www.linkedin.com/in/lenguyenquocviet118/", verified: true,
    },
  ],
};
