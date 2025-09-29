'use client';

import React from 'react';
import Head from 'next/head';
import AboutHeader from '@/components/about/AboutHeader';
import AboutContent from '@/components/about/AboutContent';
import AboutStats from '@/components/about/AboutStats';
import AboutVisual from '@/components/about/AboutVisual';

// Default props
const defaultProps = {
  id: 'about',
  title: 'About Me',
  description:
    "I'm a full-stack developer with experience building scalable web applications that make a difference.",
  subtitle:
    "When I'm not coding, you can find me exploring cutting-edge technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  yearsExperience: 1,
  projectsCount: 20,
  technologies: [
    'JavaScript', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
    'Tailwind', 'PostgreSQL', 'MongoDB', 'Docker', 'Redis', 'GitHub',
    'C++', 'Java', 'Spring', 'PHP', 'Laravel', 'Postman'
  ],
  showStats: true,
  avatar: '/images/avatar.jpg', 
  text: 'Open to Work'
};

const About = () => {
  const {
    id,
    title,
    description,
    subtitle,
    yearsExperience,
    projectsCount,
    technologies,
    showStats,
    avatar,
    text
  } = defaultProps;

  
  return (
    <section id={id} className="py-10 sm:py-24 relative overflow-hidden">
      <Head>
        <title>{title} | My Portfolio</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AboutHeader title={title} />

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
            {/* Text Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <AboutContent
                description={description}
                subtitle={subtitle}
                technologies={technologies}
              />

              {showStats && (
                <div className="mt-6">
                  <AboutStats
                    yearsExperience={yearsExperience}
                    projectsCount={projectsCount}
                  />
                </div>
              )}
            </div>

            {/* Visual */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <AboutVisual avatar={avatar} text={text} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
