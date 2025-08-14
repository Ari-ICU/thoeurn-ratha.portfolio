"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const sections = ["home", "about", "projects", "resume", "contact"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // Scroll spy logic for section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Get correct href for hash links
  const getLink = (name: string) => {
  // Special case: Resume is its own page
  if (name === "resume") return "/resume";
  return pathname === "/" ? `#${name}` : `/#${name}`;
};

  // Determine active link (pathname pages OR scrolling sections)
  const isActive = (name: string) => {
    if (pathname !== "/") {
      return pathname.includes(name) && name !== "home";
    }
    return activeSection === name;
  };

  const navItem = (name: string, label: string) => (
    <li>
      <Link
        href={name === "home" ? "/" : getLink(name)}
        className={`font-medium transition-colors duration-300 relative group ${
          isActive(name) ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {label}
        <span
          className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
            isActive(name) ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></span>
      </Link>
    </li>
  );

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center"
          >
            <span className="mr-1">/portfolio</span>
            <span className="text-blue-600">.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItem("home", "Home")}
            {navItem("about", "About")}
            {navItem("projects", "Projects")}
            {navItem("resume", "Resume")}
            {navItem("contact", "Contact")}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-3 rounded-lg animate-fadeIn">
            <ul className="space-y-3 text-center">
              {navItem("home", "Home")}
              {navItem("about", "About")}
              {navItem("projects", "Projects")}
              {navItem("resume", "Resume")}
              {navItem("contact", "Contact")}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
