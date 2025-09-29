import { ProjectProps } from '@/types';

export const projects: ProjectProps[] = [
  {
    id: 'online-course-platform',
    title: 'Online Course Platform',
    subtitle: 'Learn new skills from anywhere',
    heroImage: '/images/project/online-course/course-hero.png',
    description:
      'A full-featured online learning platform that allows users to explore, enroll, and manage courses seamlessly. Built with a modern tech stack, it offers responsive design, real-time analytics, and personalized learning experiences to enhance engagement for both students and instructors.',

    technologies: ['Next.js', 'TypeScript', 'Tailwind',],
    goals: [
      'Enable learners to access courses anytime, anywhere',
      'Provide real-time progress tracking and analytics',
      'Enhance user engagement through interactive learning experiences',
      'Streamline course management for instructors',
    ],

    images: [
      { src: '/images/project/online-course/my-learning.png', alt: 'my-learning' },
      { src: '/images/project/online-course/course.png', alt: 'course' },
      { src: '/images/project/online-course/contact.png', alt: 'contact' },
      { src: '/images/project/online-course/about.png', alt: 'about' },
    ],
    featuresCompleted: 50,
    linesOfCode: 12000,
    teamSize: 4,
    liveDemoUrl: 'https://online-course-next-js.vercel.app/',
    githubUrl: 'https://github.com/Ari-ICU/online-course-nextJS',
  },
  {
    id: 'computer-science-department-website',
    title: 'Computer Science Department Website',
    subtitle: 'A modern site for academic excellence',
    heroImage: '/images/project/cs-department/cs-hero.png',
    description:
      'A comprehensive website for a university\'s Computer Science Department, designed to provide students, faculty, and visitors with easy access to information about courses, faculty members, research projects, and events. The site features a clean, responsive design and is built using the latest web technologies to ensure optimal performance and user experience.',
    technologies: ['React', 'Tailwind CSS', 'Laravel', 'MySQL'],
    goals: ['Showcase department programs', 'Facilitate student-faculty interaction', 'Highlight research initiatives', 'Promote upcoming events', 'Provide easy access to resources'],
    images: [
      { src: '/images/project/cs-department/faculty.png', alt: 'faculty' },
      { src: '/images/project/cs-department/program.png', alt: 'program' },
      { src: '/images/project/cs-department/events.png', alt: 'event' },
    ],
    featuresCompleted: 35,
    linesOfCode: 8000,
    teamSize: 3,
    liveDemoUrl: 'https://csd-website-xi.vercel.app/home',
    githubUrl: 'https://github.com/leangvakhim/csd-website',
  },
  {
    id: 'ecommerce-platform',
    title: 'Ecommerce Platform',
    subtitle: 'Shop online with ease',
    heroImage: '/images/project/ecommerce/ecommerce-hero.png',
    description:
      'A scalable ecommerce platform built to practice and demonstrate React.js skills and template integration. Users can browse products, complete secure checkouts, track inventory in real-time, and leave reviews. This project strengthened my understanding of component-based design, state management, and building responsive interfaces.',
    technologies: [
      'React',
      'Tailwind CSS',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    goals: [
      'Learn to build responsive UIs using React and Tailwind CSS',
      'Understand how to integrate and customize templates',
      'Implement user-friendly shopping and checkout flows',
      'Gain hands-on experience with component-based architecture',
      'Practice state management and data handling in React',
      'Integrate third-party services for payments with PayPal',
    ],
    images: [
      { src: '/images/project/ecommerce/cart.png', alt: 'cart' },
      { src: '/images/project/ecommerce/shop.png', alt: 'Product page' },
      { src: '/images/project/ecommerce/checkout.png', alt: 'Checkout process' },
    ],
    featuresCompleted: 60,
    linesOfCode: 15000,
    teamSize: 5,
    liveDemoUrl: 'https://react-template-seven-ochre.vercel.app/',
    githubUrl: 'https://github.com/Ari-ICU/react-template',
  },
  {
    id: 'portfolio-site',
    title: 'Portfolio Website',
    subtitle: 'Showcase my work and skills',
    heroImage: '/images/project/portfolio/portfolioo-hero.png',
    description: 'A personal portfolio website to showcase my projects, skills, and experience. The site features a clean, modern design with smooth animations and responsive layouts. Built with Next.js and Tailwind CSS, it highlights my technical abilities and serves as a platform for potential employers and collaborators to learn more about me.',
    technologies: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
    goals: ['Personal branding', 'Project showcase', 'Easy contact', 'Responsive design' , 'SEO optimization'],
    images: [
      { src: '/images/project/portfolio/resume.png', alt: 'resume' },
      { src: '/images/project/portfolio/contact.png', alt: 'contact' },
    ],
    featuresCompleted: 20,
    linesOfCode: 5000,
    teamSize: 1,
    liveDemoUrl: 'https://thoeurn-ratha.vercel.app/',
    githubUrl: 'https://github.com/Ari-ICU/thoeurn-ratha.portfolio',
  },
  
];
