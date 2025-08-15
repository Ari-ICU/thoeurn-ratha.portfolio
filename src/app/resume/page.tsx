"use client";

import Head from "next/head";
import { resume } from "@/data/resume";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeHeader from "@/components/resume/ResumeHeader";
import ResumeSection from "@/components/resume/ResumeSection";
import ExperienceItem from "@/components/resume/ExperienceItem";
import EducationItem from "@/components/resume/EducationItem";
import Certificates from "@/components/resume/Certificates";
import SkillsList from "@/components/resume/SkillsList";

export default function ResumePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-indigo-950 dark:to-black">
      {/* Background Pattern */}
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
                strokeWidth={1}
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

      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>

      <Header />

      <main
        id="main-content"
        className="flex-1 relative z-10 container mx-auto px-6 py-12 max-w-4xl"
      >
        <Head>
          <title>Resume | John Doe</title>
          <meta
            name="description"
            content="Resume of John Doe, Senior Frontend Developer."
          />
        </Head>

        {/* Resume Header */}
        <ResumeHeader
          imageUrl="test"
          name="Thoeurn Ratha"
          tagline="Senior Frontend Developer"
        />

        {/* Experience */}
        <ResumeSection title="Experience">
          {resume.experience.map((exp, idx) => (
            <ExperienceItem
              key={idx}
              title={exp.title}
              company={exp.company}
              date={exp.date}
              description={exp.description}
            />
          ))}
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          <EducationItem education={resume.education} />
        </ResumeSection>

        {/* Certificate */}
        <ResumeSection title="Certification">
          <Certificates certificates={resume.certificates ?? []} />
        </ResumeSection>
        {/* Skills */}
        <ResumeSection title="Skills">
          <SkillsList skills={resume.skills ?? []} />
        </ResumeSection>
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
}

ResumePage.displayName = "ResumePage";
