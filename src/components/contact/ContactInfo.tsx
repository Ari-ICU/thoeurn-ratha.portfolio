"use client";

import React from "react";
import { FaEnvelope, FaTelegram, FaMapMarkerAlt, FaGlobe, FaClock } from "react-icons/fa";
import ContactCard from "./ContactCard";
import { ContactProps } from "@/types";

interface ExtendedContactProps extends ContactProps {
  location?: string;
  website?: string;
  hours?: string;
}

const ContactInfo: React.FC<ExtendedContactProps> = ({ email, phone, location, website, hours }) => {
  return (
    <section
      className="relative overflow-hidden"
      role="region"
      aria-labelledby="contact-info-title"
    >
      <h2 id="contact-info-title" className="sr-only">
        Contact Information
      </h2>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-4 max-w-7xl mx-auto">

          {/* Email */}
          <ContactCard
            icon={<FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 text-white" />}
            title="Email"
            description="Responses within 24 hours"
            href={`mailto:${email}`}
            linkLabel={email}
            colorFrom="from-blue-500"
            colorTo="to-blue-700"
          />

          {/* Phone */}
          <ContactCard
            icon={<FaTelegram className="w-6 h-6 sm:w-7 sm:h-7 text-white" />}
            title="Phone"
            description="Business hours availability"
            href={`tel:${phone}`}
            linkLabel={phone}
            colorFrom="from-green-500"
            colorTo="to-green-700"
          />

          {/* Location */}
          {location && (
            <ContactCard
              icon={<FaMapMarkerAlt className="w-6 h-6 sm:w-7 sm:h-7 text-white" />}
              title="Location"
              description={location}
              colorFrom="from-orange-500"
              colorTo="to-yellow-500"
            />
          )}

          {/* Website */}
          {website && (
            <ContactCard
              icon={<FaGlobe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />}
              title="Website"
              description="Visit our site"
              href={website}
              linkLabel={website}
              colorFrom="from-purple-500"
              colorTo="to-pink-500"
            />
          )}

          {/* Working Hours */}
          {hours && (
            <ContactCard
              icon={<FaClock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />}
              title="Working Hours"
              description={hours}
              colorFrom="from-teal-500"
              colorTo="to-teal-700"
            />
          )}

        </div>
      </div>
    </section>
  );
};

ContactInfo.displayName = "ContactInfo";
export default ContactInfo;
