"use client";

import React, { useState } from "react";
import Head from "next/head";
import { services } from "@/data/services";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceCard from "@/components/services/ServiceCard";

const ServicePage: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(6); // Show 6 services initially

    const handleViewMore = () => {
        setVisibleCount((prev) => prev + 6); // Load 6 more on click
    };

    return (
        <>
            <Head>
                <title>Our Services | Portfolio</title>
                <meta
                    name="description"
                    content="Explore the services I provide and how I can help your projects."
                />
            </Head>

            <section
                id="services"
                className="py-10 sm:py-24 relative overflow-hidden"
            >
                <main
                    className="">

                    {/* Header */}
                    <ServiceHeader
                        title="Our Services"
                        subtitle="Discover the range of services I offer to help bring your ideas to life."
                    />

                    {/* Services Grid */}
                    <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-12">
                        {services.slice(0, visibleCount).map((service) => (
                            <ServiceCard
                                key={service.id}
                                title={service.title}
                                description={service.description}
                                image={service.image}
                                tags={service.tags}
                            />
                        ))}
                    </section>


                    {/* View More Button */}
                    {visibleCount < services.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={handleViewMore}
                                className="inline-block px-6 py-3 text-white bg-gradient-to-r from-green-900 to-cyan-700 hover:from-cyan-700 hover:to-green-900 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                View More Services
                            </button>
                        </div>
                    )}
                </main>
            </section>
        </>
    );
};

ServicePage.displayName = "ServicePage";
export default ServicePage;
