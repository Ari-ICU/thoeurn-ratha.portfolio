"use client";

import React from "react";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectStats from "@/components/projects/ProjectStats";
import ProjectCTA from "@/components/projects/ProjectCTA";
import { ProjectProps } from "@/types";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const project: ProjectProps | undefined = projects.find((p) => p.id === id);

  if(
    typeof window !== "undefined" &&
    !project
  ){
    router.push("/not-found");
    return null;
  }

  if (!project) {
    return (
      <div className="relative min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-center text-2xl text-gray-700 dark:text-gray-300 py-16">
            Project not found.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-indigo-950 dark:to-black">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 z-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <Header />

      <main id="main-content" className="flex-1 relative z-10 py-10 space-y-12">
        <Head>
          <title>{project.title} | My Portfolio</title>
          <meta name="description" content={project.description} />
        </Head>

        <div className=" container mx-auto px-4">
          <button
            onClick={() => router.back()}
            className=" px-4  bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            ← Back
          </button>
        </div>


        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Project Header */}
            <div>
              <ProjectHeader
                title={project.title}
                subtitle={project.subtitle}
                heroImage={project.heroImage}
              />
            </div>

            {/* Right Column: Project Overview */}
            <div>
              <ProjectOverview
                description={project.description}
                technologies={project.technologies}
                goals={project.goals}
              />
            </div>
          </div>
        </div>

        <ProjectGallery
          images={project.images}
        />

        <ProjectStats
          featuresCompleted={project.featuresCompleted}
          linesOfCode={project.linesOfCode}
          teamSize={project.teamSize}
        />
        <ProjectCTA
          liveDemoUrl={project.liveDemoUrl}
          githubUrl={project.githubUrl}
        />
      </main>

      <Footer />

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          .animate-fade-in,
          .animate-slide-up {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectPage;
