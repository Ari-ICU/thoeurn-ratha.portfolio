"use client";

import React from "react";

interface ServiceHeaderProps {
    title: string;
    subtitle?: string;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ title, subtitle }) => {
    return (
        <section className="relative mb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Title with gradient */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold 
                        bg-gradient-to-r from-green-900 to-cyan-700 
                        dark:from-green-900 dark:to-cyan-700 
                        bg-clip-text text-transparent mb-4 animate-fade-in">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
                        {subtitle}
                    </p>
                )}
            </div>

        </section>
    );
};

export default ServiceHeader;
