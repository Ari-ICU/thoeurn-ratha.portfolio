"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaTelegram, 
  FaArrowUp 
} from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  };

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/Ari-ICU" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com/yourhandle" },
    { name: "Telegram", icon: FaTelegram, href: "https://t.me/yourusername" },
    { name: "Email", icon: FaEnvelope, href: "mailto:thoeurn.ratha.kh@gmail.com" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "#contact" },
  ];

  const technologies = ["Next.js", "Tailwind CSS", "TypeScript"];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 relative">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="mr-1">/portfolio</span>
              <span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building modern web experiences with passion, code, and creativity. Let's connect!
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
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
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
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Thoeurn Ratha. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={handleScrollToTop}
            className={`${
              isVisible ? "opacity-100" : "opacity-0"
            } flex items-center gap-1 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105`}
            aria-label="Back to top"
          >
            Back to top
            <FaArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
