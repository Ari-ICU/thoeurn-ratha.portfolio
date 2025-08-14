"use client";

import React from 'react';
import Image from 'next/image';

interface ProjectHeaderProps {
  title: string;
  subtitle?: string;
  heroImage?: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, subtitle, heroImage }) => {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
        {subtitle && <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">{subtitle}</p>}
        {heroImage && (
          <div className="mt-8 flex justify-center">
            <Image
              src={heroImage}
              alt={title}
              width={800}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectHeader;
