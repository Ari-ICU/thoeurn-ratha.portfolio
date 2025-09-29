"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaTelegram,
  FaArrowUp,
} from "react-icons/fa";

const sections = ["home", "about", "projects", "services", "resume", "contact"];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Scroll to top handler
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 200);
  };

  // Get correct href for hash links
  const getLink = (name: string) => {
    if (name === "resume") return "/resume"; // Resume is separate page
    return pathname === "/" ? `#${name}` : `/#${name}`;
  };

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/Ari-ICU" },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/yourusername",
    },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com/yourhandle" },
    { name: "Telegram", icon: FaTelegram, href: "https://t.me/yourusername" },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:thoeurn.ratha.kh@gmail.com",
    },
  ];

  const technologies = ["Next.js", "Tailwind CSS", "TypeScript"];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 relative">
      <div className="container mx-auto">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand + Social */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="mr-1">/portfolio</span>
              <span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building modern web experiences with passion, code, and creativity.
              Let’s connect!
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {sections.map((name) => (
                <li key={name}>
                  <Link
                    href={getLink(name)}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-blue-300 text-xs rounded-full border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto ">
          {/* Copyright Section */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4 md:mb-0 text-center sm:text-left">
            <p className="text-sm text-gray-400 font-light tracking-wide">
              &copy; {currentYear} Thoeurn Ratha. All rights reserved.
            </p>
            <span className="hidden sm:inline-block text-gray-500">|</span>
            <p className="text-sm text-gray-400 font-light tracking-wide">
              Designed & Built by Me
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={handleScrollToTop}
            className={`
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      flex items-center gap-2 px-4 py-2 rounded-full
      bg-gray-800/50 hover:bg-gray-700/50 
      text-gray-300 hover:text-white 
      transition-all duration-300 
      transform hover:scale-105 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500
      md:ml-4
    `}
            aria-label="Scroll back to top"
          >
            <FaArrowUp className="h-4 w-4" />
            <span className="text-sm font-medium hidden sm:inline">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
