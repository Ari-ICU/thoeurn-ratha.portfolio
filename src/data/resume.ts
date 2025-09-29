// src/data/resume.ts
import { ResumeProps } from "@/types";

export const resume: ResumeProps = {
  experience: [
    {
      title: "Full-Stack Developer",
      company: "Tech Solutions Inc.",
      date: "Jan 2023 – Present",
      description: [
        "Developed and maintained web applications using React, Next.js, and Node.js.",
        "Collaborated with cross-functional teams to deliver projects on time and within budget.",
        "Implemented RESTful APIs and integrated third-party services.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      date: "May 2021 – Dec 2022",
      description: [
        "Built responsive websites with Tailwind CSS and React.",
        "Optimized web performance, improving load times by 30%.",
        "Worked closely with designers to translate UI/UX into functional interfaces.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Royal University of Phnom Penh",
      period: "2019 – 2023",
      description:
        "Focused on software development, web technologies, and database systems.",
      logo: "/images/rupp.png",
    },
    {
      degree: "High School Diploma",
      institution: "XYZ High School",
      period: "2016 – 2019",
      description:
        "Major in science and mathematics, active in coding clubs and competitions.",
      logo: "/images/rupp.png",
    },
  ],
  skills: [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 82 },
    { name: "Tailwind CSS", level: 87 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 78 },
    { name: "REST APIs", level: 88 },
    { name: "Git & GitHub", level: 92 },
    { name: "Responsive Design", level: 90 },
    { name: "Agile Methodologies", level: 84 },
  ],
  certificates: [
    {
      title: "Full-Stack Web Development",
      issuer: "freeCodeCamp",
      date: "June 2024",
      credentialUrl:
        "https://www.freecodecamp.org/certification/username/full-stack",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "March 2024",
      credentialUrl:
        "https://www.freecodecamp.org/certification/username/javascript-algorithms",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "January 2024",
      credentialUrl:
        "https://www.freecodecamp.org/certification/username/responsive-web-design",
    },
  ],
};
