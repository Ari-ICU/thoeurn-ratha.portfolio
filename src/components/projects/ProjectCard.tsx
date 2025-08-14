"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Define TypeScript interfaces
interface Project {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  image?: string;
}

interface ProjectsProps {
  id?: string;
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

// Default props
const defaultProps: Required<ProjectsProps> = {
  id: 'projects',
  title: 'My Projects',
  subtitle: 'Explore a collection of my work, showcasing creativity and technical expertise across various domains.',
  projects: [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built with Next.js and Tailwind CSS to showcase my projects and skills.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      url: 'https://yourportfolio.com',
      image: '/images/portfolio.jpg',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with payment integration and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      url: 'https://github.com/yourusername/ecommerce',
      image: '/images/ecommerce.jpg',
    },
    {
      title: 'Task Manager App',
      description: 'A productivity app for managing tasks with real-time updates and a clean, intuitive UI.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      url: 'https://github.com/yourusername/task-manager',
      image: '/images/task-manager.jpg',
    },
  ],
};

// Header Component
const ProjectsHeader: React.FC<Pick<ProjectsProps, 'title' | 'subtitle'>> = ({ title, subtitle }) => (
  <div className="text-center mb-8 sm:mb-10 lg:mb-12">
    <h2
      id="projects-section-title"
      className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-3 animate-fade-in"
    >
      {title}
    </h2>
    <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
      {subtitle}
    </p>
    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full animate-slide-in"></div>
  </div>
);

// Project Card Component
const ProjectCard: React.FC<Project> = ({ title, description, technologies, url, image }) => (
  <div
    className="group flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50 dark:border-gray-700/50"
    role="article"
    aria-labelledby={`project-${title.replace(/\s+/g, '-')}`}
  >
    {image && (
      <div className="w-full h-40 sm:h-48 rounded-lg overflow-hidden mb-4">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    )}
    <h3
      id={`project-${title.replace(/\s+/g, '-')}`}
      className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2"
    >
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs sm:text-sm flex-grow">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
      aria-label={`View ${title} project`}
    >
      View Project
    </Link>
  </div>
);

// Projects Grid Component
const ProjectsGrid: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        url={project.url}
        image={project.image}
      />
    ))}
  </div>
);

// Call-to-Action Component
const ProjectsCTA: React.FC = () => (
  <div className="text-center mt-8 sm:mt-10 lg:mt-12">
    <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-400">
      Interested in collaborating or want to see more? Let’s bring your ideas to life!
    </p>
    <Link
      href="/contact"
      className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm animate-pulse"
      aria-label="Navigate to contact page"
    >
      <span>Get in Touch</span>
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  </div>
);

// Main Projects Component
const Projects: React.FC<ProjectsProps> = (props) => {
  const {
    id = defaultProps.id,
    title = defaultProps.title,
    subtitle = defaultProps.subtitle,
    projects = defaultProps.projects,
  } = props;

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Projects | Your Name</title>
        <meta
          name="description"
          content="Explore my portfolio of projects showcasing web development, full-stack applications, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Projects | Your Name" />
        <meta
          property="og:description"
          content="Discover a collection of projects built with modern technologies like Next.js, React, and Tailwind CSS."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image-projects.jpg" />
        <meta property="og:url" content="https://yourportfolio.com/projects" />
      </Head>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": "Projects by Your Name",
          "url": "https://yourportfolio.com/projects",
          "description": "A collection of web development and full-stack projects.",
          "creator": {
            "@type": "Person",
            "name": "Your Name",
          },
        })}
      </script>

      <section
        id={id}
        className="relative py-8 sm:py-12 lg:py-16 overflow-hidden"
        role="region"
        aria-labelledby="projects-section-title"
      >
        {/* Decorative Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-4 left-4 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-blue-200/10 dark:bg-blue-800/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-200/10 dark:bg-purple-800/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ProjectsHeader title={title} subtitle={subtitle} />
          <ProjectsGrid projects={projects} />
          <ProjectsCTA />
          {/* Decorative Element */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-blue-200 dark:to-blue-900 pointer-events-none animate-fade-in"></div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slide-in {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 80px;
              opacity: 1;
            }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out 0.2s forwards;
          }
          .animate-slide-in {
            animation: slide-in 0.6s ease-out 0.4s forwards;
          }
          .delay-400 {
            animation-delay: 0.4s;
          }

          /* Reduce motion */
          @media (prefers-reduced-motion: reduce) {
            .animate-fade-in,
            .animate-fade-in-up,
            .animate-slide-in {
              animation: none;
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </>
  );
};

Projects.displayName = 'Projects';

export default Projects;