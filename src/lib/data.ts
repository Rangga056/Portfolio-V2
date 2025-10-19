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
    title: "Car Rental Platform",
    description: "A full-stack car rental platform with a dynamic vehicle catalog and a streamlined booking system. Deployed with a CI/CD pipeline for enhanced performance and reliability.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "GitHub Actions"],
    githubLink: "https://github.com/Rangga056",
    liveLink: socialLinks.portfolio,
    image: "projectCarRental",
  },
  {
    title: "Academic Information System",
    description: "Contributed to the development of a large-scale academic information system, focusing on feature implementation and system efficiency improvements.",
    techStack: ["React", "TypeScript", "Node.js", "ExpressJS", "PostgreSQL"],
    githubLink: "https://github.com/Rangga056",
    image: "projectAcademicSystem",
  },
  {
    title: "AI Anomaly Detection Model",
    description: "Researched and developed a proof-of-concept for an AI/ML model to detect anomalies in energy consumption, projecting significant annual savings.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    githubLink: "https://github.com/Rangga056",
    image: "projectAIModel",
  },
];
