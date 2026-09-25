export interface Profile {
  name: string;
  headline: string;
  domains: string[];
  location: string;
  linkedinUrl: string;
  email: string;
  heroStatement: string;
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

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  period: string;
  location?: string;
  description?: string;
  bullets?: string[];
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
  experience: ExperienceItem[];
  projects: ProjectItem[];
  activities: ActivityItem[];
  education: EducationItem[];
}
