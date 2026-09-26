export interface Profile {
  name: string;
  headline: string;
  domains: string[];
  location: string;
  linkedinUrl: string;
  email: string;
  heroStatement: string;
  heroEyebrow: string;
  heroDescription: string;
  aboutHeadingLead: string;
  aboutHeadingAccent: string;
  aboutCardStatement: string;
  employer: string;
  expertiseHeadingLead: string;
  expertiseHeadingAccent: string;
  expertiseSummary: string;
  about: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  phase?: number;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  verified: boolean;
}

export interface ExpertiseFeature {
  number: string;
  category: string;
  title: string;
  focus: string;
  detail: string;
  media: { type: "image"; src: string; alt: string; label: string } | { type: "video"; src: string; poster: string; alt: string; label: string };
}

export interface ExperienceRole {
  title?: string;
  period: string;
  region?: string;
}

export interface ExperienceItem {
  id: string;
  number: string;
  company: string;
  period: string;
  current?: boolean;
  location?: string;
  roles: ExperienceRole[];
  summary?: string;
  verified: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  location?: string;
  capacity?: string;
  client?: string;
  role?: string;
  challenge?: string;
  contribution?: string;
  outcome?: string;
  image?: string;
  verified: boolean;
}

export interface ActivityItem {
  id: string;
  title: string;
  type?: string;
  year?: string;
  description?: string;
  verified: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree?: string;
  year?: string;
  verified: boolean;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
}

export interface PortfolioData {
  profile: Profile;
  navigation: NavigationItem[];
  socialLinks: SocialLink[];
  expertise: ExpertiseItem[];
  expertiseFeatures: ExpertiseFeature[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  activities: ActivityItem[];
  education: EducationItem[];
}
