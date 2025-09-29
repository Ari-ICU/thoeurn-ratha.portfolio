"use client";

import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectProps } from "@/types";

const ProjectList: React.FC = () => {
  // State to control number of projects shown
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 initially

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6); // Load 6 more on click
  };

  return (
    <>
      <Head>
        <title>My Projects | Portfolio</title>
        <meta
          name="description"
          content="Explore my projects and web applications."
        />
      </Head>

      <section
        id="projects"
        className="py-10 sm:py-24 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-900 to-cyan-700 dark:from-green-900 dark:to-cyan-700 bg-clip-text text-transparent mb-4 animate-fade-in">
              Latest Projects & Updates
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
              Explore my most recent projects, latest innovations, and insights
              into web development, design, and data-driven solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.slice(0, visibleCount).map((project: ProjectProps) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="w-full h-48 sm:h-56 lg:h-64 relative">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                    priority={false}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      {project.subtitle}
                    </p>
                  )}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm font-semibold bg-gradient-to-r from-green-900 to-cyan-700 text-white px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* View More Button */}
          {visibleCount < projects.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleViewMore}
                className="inline-block px-6 py-3 text-white bg-gradient-to-r from-green-900 to-cyan-700 hover:from-cyan-700 hover:to-green-900 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View More Projects
              </button>
            </div>
          )}
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
          .animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.2s forwards; }
          @media (prefers-reduced-motion: reduce) {
            .animate-fade-in, .animate-fade-in-up { animation: none; opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>
    </>
  );
};

ProjectList.displayName = "ProjectList";
export default ProjectList;
