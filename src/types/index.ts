export type Language = 'zh' | 'en';

export type Bilingual<T = string> = { zh: T; en: T };

export interface ProfileData {
  name: Bilingual<string>;
  nameSub: Bilingual<string>;
  titles: Bilingual<string[]>;
  tagline: Bilingual<string>;
  bio: Bilingual<string[]>;
  socials: SocialLink[];
  email: string;
  phone?: string;
  location: Bilingual<string>;
  age?: string;
  mbti?: string;
  avatar?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  categoryName: Bilingual<string>;
  items: SkillItem[];
}

export interface SkillItem {
  name: Bilingual<string>;
  percentage: number;
  color: string;
}

export interface WorkExperience {
  id: string;
  company: Bilingual<string>;
  role: Bilingual<string>;
  period: Bilingual<string>;
  description: Bilingual<string[]>;
  technologies: Bilingual<string[]>;
}

export interface Project {
  id: string;
  title: Bilingual<string>;
  subtitle: Bilingual<string>;
  description: Bilingual<string>;
  image?: string;
  technologies: Bilingual<string[]>;
  links: { type: 'github' | 'demo' | 'article'; url: string }[];
  featured: boolean;
}

export interface Education {
  id: string;
  institution: Bilingual<string>;
  degree: Bilingual<string>;
  period: Bilingual<string>;
  description: Bilingual<string>;
  logo?: string;
}
