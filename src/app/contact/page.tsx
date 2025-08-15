"use client";

import React from "react";
import Head from "next/head";
import { ContactProps } from "@/types";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

// Default props
const defaultProps = {
  id: "contact",
  title: "Let's Connect",
  subtitle:
    "Ready to start a conversation? Reach out through any of these channels and let's make something extraordinary together.",
  email: "thoeurn.ratha.kh@gmail.com",
  phone: "+855969551630",
};

const Contact = () => {
  const { id, title, subtitle, email, phone } = defaultProps;

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact Me | Your Name</title>
        <meta
          name="description"
          content="Get in touch for collaborations, projects, or inquiries."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Me | Your Name" />
        <meta
          property="og:description"
          content="Reach out to discuss projects, collaborations, or inquiries with a full-stack developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://yourportfolio.com/contact" />
      </Head>

      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Your Name",
          url: "https://yourportfolio.com",
          email: `mailto:${email}`,
          telephone: phone,
          description:
            "Full-stack developer available for projects and collaborations.",
        })}
      </script>

      <section
        id={id}
        className="py-10 sm:py-24 relative overflow-hidden"
        role="region"
        aria-labelledby="contact-section-title"
      >
        {/* Decorative Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-blue-200/15 dark:bg-blue-800/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/15 dark:bg-purple-800/15 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h2
              id="contact-section-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-900 to-cyan-700 dark:from-green-900 dark:to-cyan-700 bg-clip-text text-transparent mb-4 animate-fade-in"
            >
              {title}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
              {subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full animate-slide-in"></div>
          </div>

          {/* Form & Info Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 animate-fade-in-up delay-200">
              <ContactInfo
                email={email}
                phone={phone}
                location="Songkat Terk Thla, Khan Sen Sok, Phnom Penh"
                website="https://example.com"
                hours="Mon-Fri: 9am - 6pm"
              />
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slide-in {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 96px;
              opacity: 1;
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out 0.2s forwards;
          }
          .animate-slide-in {
            animation: slide-in 0.8s ease-out 0.4s forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-fade-in,
            .animate-fade-in-up,
            .animate-slide-in {
              animation: none;
              opacity: 1;
            }
          }
        `}</style>
      </section>
    </>
  );
};

Contact.displayName = "Contact";
export default Contact;
