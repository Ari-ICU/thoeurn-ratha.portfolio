// Types for component props
export interface AboutProps {
  id?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  yearsExperience?: number;
  projectsCount?: number;
  technologies?: string[];
  // backgroundGradient?: string;
  showStats?: boolean;
  showButtons?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  avatar?: string;
  className?: string;
}

export interface ProjectProps {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  technologies: string[];
  goals: string[];
  images: { src: string; alt: string }[];
  featuresCompleted: number;
  linesOfCode: number;
  teamSize: number;
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface ContactProps {
  /** Section ID for anchor linking */
  id?: string;

  /** Main title of the contact section */
  title?: string;

  /** Subtitle or description under the title */
  subtitle?: string;

  /** Contact email */
  email?: string;

  /** Contact phone number */
  phone?: string;

}

// src/types/index.ts

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  description: string[];
}


export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  logo?: string;
}

export interface ResumeProps {
  experience: ExperienceItemProps[];
  education: Education[]; 
  skills: Skill[];
  certificates?: Certificate[];
}
