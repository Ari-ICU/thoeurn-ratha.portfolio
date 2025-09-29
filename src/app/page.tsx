"use client";

import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/app/about/page';
import Contact from '@/app/contact/page';
import Footer from '@/components/Footer';
import Project from '@/app/projects/page';
import Service from './services/page';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-indigo-950 dark:to-black">
      <Head>
        <title>Thoeurn Ratha – Portfolio & Projects</title>
        <meta
          name="description"
          content="Welcome to Thoeurn Ratha's portfolio. Explore my latest projects, skills, and contact information for collaborations and opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Thoeurn Ratha – Portfolio & Projects" />
        <meta
          property="og:description"
          content="Discover Thoeurn Ratha's work, projects, and ways to connect for collaborations and opportunities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 z-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
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

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1 relative z-10">
        <Hero />
        <About />
        <Project />
        <Service />
        <Contact />
      </main>

      <Footer />

      {/* Global Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
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

Home.displayName = 'Home';
