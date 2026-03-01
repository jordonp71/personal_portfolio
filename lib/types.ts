export interface Project {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  problem: string;
  approach: string;
  solution: string;
  results: string[];
  diagram: "voice" | "support" | "security";
}

export interface TimelineRole {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  current?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface FeatureTile {
  icon: string;
  title: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Accomplishment {
  title: string;
  award: string;
  year: string;
  description: string;
  href: string;
}
