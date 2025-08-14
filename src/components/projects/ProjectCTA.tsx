"use client";

import React from 'react';
import Link from 'next/link';

interface ProjectCTAProps {
  liveDemoUrl?: string;
  githubUrl?: string;
}

const ProjectCTA: React.FC<ProjectCTAProps> = ({ liveDemoUrl, githubUrl }) => {
  return (
    <section className="py-12 px-6  text-white text-center rounded-2xl shadow-lg relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">Interested in this project?</h2>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {liveDemoUrl && (
          <Link
            href={liveDemoUrl}
            target="_blank"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Live Demo
          </Link>
        )}
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 hover:scale-105 transition-transform duration-300 shadow-md"
          >
            GitHub Repo
          </Link>
        )}
      </div>

      {/* Optional Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse delay-500 -z-10"></div>
    </section>
  );
};

export default ProjectCTA;
