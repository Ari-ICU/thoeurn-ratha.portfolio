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

  /** Social media links */
  socialLinks?: {
    platform: string;
    url: string;
    icon?: string;
  }[];



  
}

