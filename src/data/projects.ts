// src/data/projects.ts
import { ProjectProps } from '@/types';

export const projects: ProjectProps[] = [
  {
    id: 'awesome-project',
    title: 'Awesome Project',
    subtitle: 'A full-stack web application for modern businesses',
    heroImage: '/images/project-hero.jpg',
    description:
      'This project is a comprehensive web platform that integrates multiple technologies to deliver a seamless user experience.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'],
    goals: ['Improve productivity', 'Provide real-time analytics', 'Enhance user engagement'],
    images: [
      { src: '/images/project-1.jpg', alt: 'Dashboard' },
      { src: '/images/project-2.jpg', alt: 'Analytics' },
      { src: '/images/project-3.jpg', alt: 'Settings' },
    ],
    featuresCompleted: 50,
    linesOfCode: 12000,
    teamSize: 4,
    liveDemoUrl: 'https://demo.project.com',
    githubUrl: 'https://github.com/username/project',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    subtitle: 'Visualize your business data in real-time',
    heroImage: '/images/analytics-hero.jpg',
    description:
      'An advanced dashboard for tracking KPIs, visualizing metrics, and gaining actionable insights from your business data.',
    technologies: ['React', 'Next.js', 'Chart.js', 'Node.js', 'PostgreSQL'],
    goals: ['Real-time analytics', 'Customizable dashboards', 'Data-driven decisions'],
    images: [
      { src: '/images/analytics-1.jpg', alt: 'Dashboard overview' },
      { src: '/images/analytics-2.jpg', alt: 'Charts and graphs' },
      { src: '/images/analytics-3.jpg', alt: 'User management' },
    ],
    featuresCompleted: 35,
    linesOfCode: 8000,
    teamSize: 3,
    liveDemoUrl: 'https://demo.analytics.com',
    githubUrl: 'https://github.com/username/analytics-dashboard',
  },
  {
    id: 'ecommerce-platform',
    title: 'Ecommerce Platform',
    subtitle: 'A scalable online store solution',
    heroImage: '/images/ecommerce-hero.jpg',
    description:
      'Full-featured ecommerce platform with product management, payments, and analytics for small to medium businesses.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Node.js'],
    goals: ['Seamless checkout', 'Real-time inventory', 'Customer analytics'],
    images: [
      { src: '/images/ecommerce-1.jpg', alt: 'Storefront' },
      { src: '/images/ecommerce-2.jpg', alt: 'Product page' },
      { src: '/images/ecommerce-3.jpg', alt: 'Checkout process' },
    ],
    featuresCompleted: 60,
    linesOfCode: 15000,
    teamSize: 5,
    liveDemoUrl: 'https://demo.ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
  },
];
