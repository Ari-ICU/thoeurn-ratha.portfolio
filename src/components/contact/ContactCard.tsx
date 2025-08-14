"use client";

import React from "react";
import Link from "next/link";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  colorFrom: string;
  colorTo: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  href,
  linkLabel,
  colorFrom,
  colorTo,
}) => (
  <div className={`group flex flex-col sm:flex-row items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50 dark:border-gray-700/50`}>
    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colorFrom} ${colorTo} bg-gradient-to-br rounded-lg flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 group-hover:scale-105 transition-transform duration-300 shadow-md`}>
      {icon}
    </div>
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3 text-xs sm:text-sm">
        {description}
      </p>
      {href && linkLabel && (
        <Link
          href={href}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200 hover:underline decoration-2 underline-offset-4 text-xs sm:text-sm"
          target="_blank"
          aria-label={`${title}: ${linkLabel}`}
        >
          {linkLabel}
        </Link>
      )}
    </div>
  </div>
);

ContactCard.displayName = "ContactCard";
export default ContactCard;
