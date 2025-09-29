"use client";

import React from 'react';
import Image from 'next/image';

interface ProjectGalleryProps {
  images: { src: string; alt: string }[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
              <Image src={img.src} alt={img.alt} width={400} height={250} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
