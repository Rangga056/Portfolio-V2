import type { Experience, Education, Project, SkillCategory } from "@/lib/types";

export const name = "Muhammad Rangga Miftahul Falah";
export const title = "Fullstack Web Developer";
export const email = "muhammadrangga056@gmail.com";

export const about = "Seventh-semester Information Systems student at Universitas Nasional with a 3.88 GPA. Experienced in full-stack development, building and deploying applications using Next.js, ReactJS, and TypeScript. Seeking to apply technical skills and a passion for building innovative web solutions in a Fullstack Developer role.";

export const socialLinks = {
  github: "https://github.com/Rangga056",
  portfolio: "https://rangga056.github.io/portfolio/",
};

export const experiences: Experience[] = [
  {
    role: "Developer Intern",
    company: "Universitas Siber Asia",
    period: "Mar 2025 - Aug 2025",
    description: "Contributed to the development and maintenance of the Academic Information System and implementing new features projected to improve system efficiency by an estimated 25%. Collaborated with cross-functional teams to ensure continuous improvement of academic services.",
  },
  {
    role: "Data Analyst Intern",
    company: "Telkom Infranexia",
    period: "Apr 2025 - Sep 2025",
    description: "Analyzed and quantified the financial performance of an established energy efficiency system, validating Rp95.6M in first-year savings. Researched and developed a next-generation AI/ML anomaly detection model, projecting an additional annual saving of Rp19.1M.",
  },
  {
    role: "Freelance Fullstack Developer",
    company: "Rental Mobil Jakarta Selatan",
    period: "Mar 2025 - May 2025",
    description: "Developed and launched a full-stack car rental platform from the ground up, featuring a dynamic vehicle catalog and streamlined booking system. Implemented a complete CI/CD pipeline using GitHub Actions for automated deployments and integrated Cloudflare CDN.",
  },
];

export const education: Education = {
  institution: "Universitas Nasional (UNAS)",
  degree: "Information Systems",
  period: "2022 - Present",
  details: "Seventh Semester | GPA: 3.88/4.00",
};

export const skills: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Go", "Python", "React", "Next.js", "Gin", "ExpressJS", "Bootstrap"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "Firebase", "PostgreSQL", "SQLite", "Supabase"],
  },
  {
    title: "Tools & Libraries",
    items: ["Git", "GitHub", "GitLab", "Postman", "Clerk", "shadcn/ui", "npm", "Prisma", "Zod", "Vercel", "Stripe", "Framer"],
  },
  {
    title: "Code Editor / IDE",
    items: ["Visual Studio Code", "Vim", "Neovim"],
  },
  {
    title: "Operating Systems",
    items: ["Linux", "Lubuntu"],
  },
];

export const projects: Project[] = [
  {
    title: "DUTRANS - Car Rental Platform",
    description: "A comprehensive car rental platform for PT Dwi Utama Transport Indonesia. Features include vehicle catalog, booking system, pricing calculator, and admin dashboard for managing fleet and reservations.",
    techStack: ["Next.js 15", "TypeScript", "Prisma", "Tailwind CSS", "Shadcn UI", "React", "Lottie React"],
    githubLink: "https://github.com/Rangga056",
    liveLink: "https://www.rentalmobiljakartaselatan.com/",
    image: "projectCarRental",
  },
  {
    title: "AI Energy Anomaly Detection",
    description: "Machine learning model for detecting energy consumption anomalies in smart buildings. Analyzes patterns to unusual energy usage and optimize building efficiency for cost reduction.",
    techStack: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    githubLink: "https://github.com/Rangga056",
    image: "projectAIModel",
  },
  {
    title: "UNASFEST - University Festival Platform",
    description: "Official website for Universitas Nasional's annual festival event. Features event schedules, performer lineups, ticket booking system, and interactive festival map with real-time updates.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion", "Shadcn UI"],
    githubLink: "https://github.com/rangga056/unasfest",
    image: "projectUnasfest",
  },
  {
    title: "Eclipse Summit - Conference Platform",
    description: "Professional conference and event management platform featuring speaker profiles, session scheduling, attendee registration, and networking capabilities for tech conferences and summits.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Shadcn UI"],
    githubLink: "https://github.com/Rangga056/eclipse-summit",
    image: "projectEclipseSummit",
  },
  {
    title: "Eclipse Estate - Property Management",
    description: "Comprehensive real estate management platform featuring property listings, virtual tours, client relationship management, and financial tracking for real estate agencies and property managers.",
    techStack: ["React.js", "JavaScript", "MongoDB", "Mongoose", "Tailwind CSS", "NodeJS", "Express JS"],
    githubLink: "https://github.com/Rangga056/eclipse-estate",
    image: "projectEclipseEstate",
  },
  {
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website showcasing projects, skills, and professional experience. Features smooth animations, contact form, and optimized performance.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Responsive Design"],
    githubLink: "https://github.com/Rangga056",
    liveLink: socialLinks.portfolio,
    image: "projectPersonalPortfolio",
  },
];