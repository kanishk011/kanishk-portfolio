export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategoryData {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
  techUsed: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  year: string;
  grade?: string;
  status: 'completed' | 'ongoing';
}

export type ThemeMode = 'light' | 'dark';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}
