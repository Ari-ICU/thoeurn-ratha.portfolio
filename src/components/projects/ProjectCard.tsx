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

// Project Card Component
const ProjectCard: React.FC<Project> = ({ title, description, technologies, url, image }) => (
  <div
    className="group flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50 dark:border-gray-700/50"
    role="article"
    aria-labelledby={`project-${title.replace(/\s+/g, '-')}`}
  >
    {image && (
      <div className="w-full rounded-lg overflow-hidden mb-4">
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

export default ProjectCard;