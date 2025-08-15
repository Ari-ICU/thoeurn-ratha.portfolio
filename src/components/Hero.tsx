"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const techStack = [
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", delay: 0 },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", delay: 1 },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", delay: 2 },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", delay: 3 },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", delay: 4 },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", delay: 5 },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", delay: 6 },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", delay: 7 },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", delay: 8 },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", delay: 9 },
  { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", delay: 10 },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", delay: 11 },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", delay: 12 },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", delay: 13 },
];

const Hero = () => {
  const [positions, setPositions] = useState<
    { left: string; top: string; delay: string; duration: string }[]
  >([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const newPositions = techStack.map(() => ({
      left: `${20 + Math.random() * 60}%`,
      top: `${20 + Math.random() * 60}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${8 + Math.random() * 6}s`,
    }));
    setPositions(newPositions);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="home"
      className="relative py-10 sm:py-24 overflow-hidden max-h-screen text-white flex items-center"
      role="banner"
      aria-labelledby="hero-title"
    >
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-emerald-300/20 dark:bg-emerald-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-teal-300/20 dark:bg-teal-800/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-300/15 dark:bg-cyan-800/15 rounded-full blur-2xl animate-pulse delay-1200"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {!isMobile &&
          positions.map((pos, index) => (
            <div
              key={techStack[index].name}
              className="absolute w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 opacity-20 hover:opacity-40 transition-opacity duration-300 animate-float"
              style={{
                left: pos.left,
                top: pos.top,
                animationDelay: pos.delay,
                animationDuration: pos.duration,
              }}
              aria-hidden="true"
            >
              <img
                src={techStack[index].src}
                alt={`${techStack[index].name} icon`}
                className="w-full h-full object-contain brightness-125"
                loading="lazy"
                width="64"
                height="64"
              />
            </div>
          ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight animate-fade-in"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 opacity-90 max-w-3xl mx-auto animate-fade-in-up">
            I'm a passionate developer crafting innovative digital solutions with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 animate-fade-in-up-delay">
            <Link
              href="#projects"
              className="group w-full sm:w-auto text-center bg-white text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-emerald-50 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              aria-label="View my projects"
            >
              View My Work
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              href="#contact"
              className="group w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-white text-white hover:bg-white hover:text-emerald-700 hover:shadow-lg transition-all duration-300 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              aria-label="Get in touch"
            >
              Get In Touch
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-slow opacity-70">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <p className="text-xs sm:text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(8deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
        }
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-fade-in,
          .animate-fade-in-up,
          .animate-fade-in-up-delay,
          .animate-bounce-slow {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            opacity: 1;
          }
          .animate-float {
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
};

Hero.displayName = 'Hero';

export default Hero;