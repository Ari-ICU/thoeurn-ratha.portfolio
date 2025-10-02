"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { notFound, usePathname } from "next/navigation";

const sections = ["home", "about", "projects", "services", "resume", "contact"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoized intersection handler
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const visible = entries.find((entry) => entry.isIntersecting);
    if (visible?.target?.id) {
      setActiveSection(visible.target.id);
    }
  }, []);

  // Memoized observer creation
  const observer = useMemo(
    () =>
      new IntersectionObserver(handleIntersection, {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }),
    [handleIntersection]
  );

  // Optimized scroll spy: only active on home page, reuse observer
  useEffect(() => {
    observerRef.current = observer;

    if (pathname !== "/") {
      // Disconnect on non-home pages
      observer.disconnect();
      setActiveSection(""); // Clear to avoid stale state
      return;
    }

    // Observe sections on home page
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Initial check based on hash for faster active section on reload
    const hash = window.location.hash.slice(1);
    if (hash && sections.includes(hash)) {
      setActiveSection(hash);
    }

    return () => {
      observer.disconnect();
    };
  }, [pathname, observer]);

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  // Get correct href for hash links (memoized for minor perf gain)
  const getLink = useMemo(() => {
    // Special case: Resume is its own page
    const linkMap: Record<string, string> = {
      resume: "/resume",
    };
    return (name: string) => linkMap[name] || (pathname === "/" ? `#${name}` : `/#${name}`);
  }, [pathname]);

  // Determine active link (pathname pages OR scrolling sections)
  const isActive = useCallback((name: string) => {
    if (pathname !== "/") {
      return pathname.includes(name) && name !== "home";
    }
    return activeSection === name;
  }, [pathname, activeSection]);

  // Memoized nav item renderer for reuse
  const NavItem = useCallback(
    (name: string, label: string) => (
      <li key={name}>
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
    ),
    [getLink, isActive]
  );

  // Validate hash on home page reload/navigation
  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash.slice(1);
      if (hash && !sections.includes(hash)) {
        notFound();
      }
    }
  }, [pathname]);

  // Desktop nav list (memoized)
  const desktopNav = useMemo(
    () => (
      <ul className="hidden md:flex space-x-8">
        {NavItem("home", "Home")}
        {NavItem("about", "About")}
        {NavItem("projects", "Projects")}
        {NavItem("services", "Services")}
        {NavItem("resume", "Resume")}
        {NavItem("contact", "Contact")}
      </ul>
    ),
    [NavItem]
  );

  // Mobile nav list (memoized)
  const mobileNav = useMemo(
    () => (
      <ul className="space-y-3 text-center">
        {NavItem("home", "Home")}
        {NavItem("about", "About")}
        {NavItem("projects", "Projects")}
        {NavItem("services", "Services")}
        {NavItem("resume", "Resume")}
        {NavItem("contact", "Contact")}
      </ul>
    ),
    [NavItem]
  );

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-tl from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-indigo-950 dark:to-black transition-all duration-300">
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
          {desktopNav}

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
            {mobileNav}
          </div>
        )}
      </nav>
    </header>
  );
}