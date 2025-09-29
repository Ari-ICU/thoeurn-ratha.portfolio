"use client";

import React from "react";
import Image from "next/image";

interface ServiceCardProps {
    title: string;
    description: string;
    image?: string;
    tags?: string[];
}

const fallbackSVG = (
    <svg
        className="w-full h-full text-gray-300 dark:text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 200 200"
    >
        <rect width="200" height="200" fill="currentColor" />
        <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="20"
            fill="white"
        >
            No Image
        </text>
    </svg>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, tags }) => {
    return (
        <div className="group bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden">
            {/* Image */}
            <div className="w-full relative">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        onError={(e) => {
                            const target = e.currentTarget;
                            target.onerror = null;
                            target.replaceWith(fallbackSVG as any);
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    fallbackSVG
                )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>

                {/* Tags */}
                {tags && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="text-sm font-semibold bg-gradient-to-r from-green-900 to-cyan-700 text-white px-2 py-1 rounded-md"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;
