import {
  Code,
  Database,
  GitMerge,
  Github,
  Gitlab,
  Monitor,
  PenTool,
  Server,
  Smartphone,
  Terminal,
  Wind,
  ServerCog,
  type LucideIcon,
  Globe,
  Component,
  FileCode,
  Book,
} from "lucide-react";
import type { Skill, Experience, Education, Project, SkillCategory } from "@/lib/types";

const NextJsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" width="24" height="24" {...props}>
    <path
      fill="#000"
      d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 119.2C33.6 119.2 8.8 94.4 8.8 64S33.6 8.8 64 8.8s55.2 24.8 55.2 55.2-24.8 55.2-55.2 55.2z"
    ></path>
    <path
      fill="#000"
      d="M99.6 37.1c-1-1.3-2.6-2.1-4.2-2.1h-8.3L54.7 82.5c-.3.4-.6.7-1 .9h.1v-44c0-1.7-1.3-3-3-3s-3 1.3-3 3v48.8c0 1.5.8 2.8 2.1 3.6 1.3.7 2.8.6 4-.4l38.7-52.9c.1-.2.2-.4.3-.6v45.1c0 1.7 1.3 3 3 3s3-1.3 3-3V39.2c0-1.2-.6-2.3-1.5-3.1z"
    ></path>
  </svg>
);

const GoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 192 192" width="24" height="24" fill="none" {...props}>
    <g clipPath="url(#clip0)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M96 170c40.876 0 74-33.124 74-74 0-40.876-33.124-74-74-74-40.876 0-74 33.124-74 74"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M78 96h52M24 96h18"
      />
      <circle
        cx="78"
        cy="96"
        r="4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <circle
        cx="130"
        cy="96"
        r="4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M26 96c0-35.346 22.386-64 50-64M118 42c8.847 0 16 7.153 16 16v76c0 8.847-7.153 16-16 16H74c-8.847 0-16-7.153-16-16"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h192v192H0z" />
      </clipPath>
    </defs>
  </svg>
);

const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
    <path
      d="M14.232 21.821c-2.45-.636-4.232-2.182-4.232-4.364V15.5h6.348a2.116 2.116 0 002.116-2.116v-2.116A2.116 2.116 0 0016.348 9h-8.464a4.232 4.232 0 01-4.232-4.232V2.116A2.116 2.116 0 015.768 0h6.348a2.116 2.116 0 012.116 2.116v2.116c0 2.45.636 4.232 4.364 4.232h.232a2.116 2.116 0 012.116 2.116v.232a2.116 2.116 0 01-2.116 2.116h-.232c-2.45 0-4.364 2.45-4.364 4.364v.232a2.116 2.116 0 01-2.116 2.116h-2.116z"
      fill="#306998"
    />
    <path
      d="M9.768 2.179c2.45.636 4.232 2.182 4.232 4.364V8.5H7.652A2.116 2.116 0 005.536 10.616v2.116A2.116 2.116 0 007.652 15h8.464a4.232 4.232 0 014.232 4.232v2.645A2.116 2.116 0 0118.232 24h-6.348a2.116 2.116 0 01-2.116-2.116v-2.116c0-2.45-.636-4.232-4.364-4.232H5.176a2.116 2.116 0 01-2.116-2.116v-.232a2.116 2.116 0 012.116-2.116h.232c2.45 0 4.364-2.45 4.364-4.364V2.321a2.116 2.116 0 012.116-2.116h2.116z"
      fill="#FFD43B"
    />
  </svg>
);
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-11.5 -10.232 23 20.463" width="24" height="24" {...props}>
    <circle r="2.05" fill="#61dafb"></circle>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);
const GinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 400 400" width="24" height="24" {...props}>
    <path
      fill="#0090d1"
      d="M362.37,208.52h0l-53.79-53.8a4.19,4.19,0,0,0-6,0l-37,37-37.06,37.07-28,28-4.2,4.19-21,21-2.28,2.28-21-21a4.2,4.2,0,0,0-6,0l-14.7,14.7a4.2,4.2,0,0,0,0,6l71.49,71.49a4.2,4.2,0,0,0,6,0l14.7-14.7a4.2,4.2,0,0,0,0-6l-21-21,2.28-2.28,21-21,4.2-4.2,28-28,37.06-37.07,37-37,53.8,53.79a4.2,4.2,0,0,0,6,0l14.7-14.7A4.2,4.2,0,0,0,362.37,208.52Z"
    ></path>
    <path
      fill="#0090d1"
      d="M308.58,154.73l-18-18-37.06-37.07a4.2,4.2,0,0,0-6,0l-14.7,14.7a4.2,4.2,0,0,0,0,6l18,18,2.28,2.28,21,21a4.2,4.2,0,0,0,6,0l14.7-14.7a4.2,4.2,0,0,0,0-6l-2.28-2.28Z"
    ></path>
    <path
      fill="#0090d1"
      d="M228.09,74.24l-37.06,37.07-28,28-4.2,4.19-21,21-2.28,2.28-21-21a4.2,4.2,0,0,0-6,0l-14.7,14.7a4.2,4.2,0,0,0,0,6l71.49,71.49a4.2,4.2,0,0,0,6,0l14.7-14.7a4.2,4.2,0,0,0,0-6l-21-21,2.28-2.28,21-21,4.2-4.2,28-28,37.06-37.07a4.2,4.2,0,0,0,0-6l-14.7-14.7A4.2,4.2,0,0,0,228.09,74.24Z"
    ></path>
  </svg>
);
const BootstrapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path
      fill="#7952b3"
      d="M22.5 13.939V10.06A1.5 1.5 0 0 0 21 8.561l-8.5-4.938a1.5 1.5 0 0 0-1.5 0L2.5 8.56A1.5 1.5 0 0 0 1 10.061v3.878A1.5 1.5 0 0 0 2.5 15.44l8.5 4.937a1.5 1.5 0 0 0 1.5 0l8.5-4.938a1.5 1.5 0 0 0 1.5-1.5zM12 5.105l6.5 3.785-6.5 3.785-6.5-3.785zM3 14.05v-4.14L11 14.4v4.43zm18 0v-4.14L13 14.4v4.43z"
    ></path>
  </svg>
);

const ClerkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 81 91" fill="none" width="24" height="24" {...props}>
    <path
      d="M32.4 90.1a8.7 8.7 0 01-4.2-1.1L.9 69.4a8.7 8.7 0 01-4.3-7.5V28.9a8.7 8.7 0 014.3-7.5L28.2 1.8a8.7 8.7 0 018.5 0l27.3 19.6a8.7 8.7 0 014.3 7.5v12.2a4.3 4.3 0 11-8.7 0V28.9a.1.1 0 000-.1L32.3 8.2a.1.1 0 00-.1 0L4.9 28.7a.1.1 0 000 .1v40.4c0 .1 0 .1 0 .1l27.3 19.6c0 .1.1.1.1.1l27.3-19.6a.1.1 0 000-.1V57.1a4.3 4.3 0 118.7 0v12.2a8.7 8.7 0 01-4.3 7.5L36.7 89a8.7 8.7 0 01-4.3 1.2z"
      fill="#000"
    ></path>
  </svg>
);

const ShadcnIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" width="24" height="24" {...props}>
    <path
      fill="black"
      d="M128 24a104 104 0 0 0-91.4 153.2A104 104 0 0 0 128 232a104 104 0 0 0 91.4-154.8A104 104 0 0 0 128 24m48 139.7-52-30-24 41.5 56 32.3a88 88 0 0 1-28 14.5l-64-36.9v-73.8l64-37a88 88 0 0 1 56 99.4"
    ></path>
  </svg>
);
const PrismaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 296" fill="none" width="24" height="24" {...props}>
    <path
      d="M128 295.5L255.5 221.75V74.25L128 0.5L0.5 74.25v147.5L128 295.5z"
      stroke="#000"
    ></path>
    <path
      d="M128 222L192 185V111L128 74L64 111v74l64 37z"
      fill="#000"
    ></path>
  </svg>
);
const ZodIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m5 5l4 6H9l4-6H9m8 10v-4h-4"
    ></path>
  </svg>
);
const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path fill="#000" d="m12 1.57-8.52 15.42H20.5L12 1.57z"></path>
  </svg>
);

const FramerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" {...props}>
    <path fill="#000" d="M4 0h16v8h-8z"></path>
    <path fill="#000" d="M4 8h8l8 8H4z"></path>
    <path fill="#000" d="M4 16h8v8z"></path>
  </svg>
);

const VimIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
    <path
      stroke="#019733"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m18.5 3.5-6 17-6-17"
    ></path>
    <path
      stroke="#019733"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M17 12H7"
    ></path>
  </svg>
);

const NeovimIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
    <path
      stroke="#57a143"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m12 21 8-5.5V8.5L12 3 4 8.5v7L12 21"
    ></path>
    <path
      stroke="#57a143"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m12 3 8 5.5"
    ></path>
    <path
      stroke="#96c559"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m20 8.5-8 5.5-8-5.5"
    ></path>
    <path
      stroke="#57a143"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m4 8.5 8 5.5"
    ></path>
    <path
      stroke="#96c559"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m12 21V14"
    ></path>
  </svg>
);

const LubuntuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#0068C8"
        d="M11.996 23.636C5.556 23.636.36 18.44.36 12 .36 5.559 5.556.364 11.996.364c6.44 0 11.637 5.195 11.637 11.636 0 6.44-5.196 11.636-11.637 11.636z"
      ></path>
      <path
        fill="#fff"
        d="M17.818 10.91c0-.49-.136-.908-.41-1.253a2.129 2.129 0 00-1.182-.909c-.386-.11-.966-.163-1.738-.163h-2.91v7.11h3.045c.796 0 1.387-.046 1.773-.137a2.15 2.15 0 001.25-.932c.273-.34.41-.767.41-1.28v-2.436zm-3.614 1.886h-1.023v-2.5h1.023c.59 0 .966.023 1.125.068.25.068.432.182.545.34.114.159.17.375.17.648v.522c0 .273-.057.49-.17.648-.114.159-.296.273-.546.34-.159.046-.534.07-1.124.07z"
      ></path>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

const NpmIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" width="24" height="24" {...props}>
    <path fill="#cb3837" d="M0 0h512v512H0z"></path>
    <path fill="#fff" d="M512 512V128H0v384zM128 128h256v256H128z"></path>
  </svg>
);
const PostmanIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" {...props}>
    <path
      d="M20.31 9.691c-1.393-2.39-3.921-3.999-6.81-4.225V2.852a.664.664 0 00-.664-.664h-1.66a.664.664 0 00-.664.664v2.614c-2.89.226-5.417 1.835-6.81 4.225a8.318 8.318 0 00-.022 8.632c1.472 2.378 4.09 3.92 6.99 4.062v-2.61c-2.733-.21-5.01-1.92-6.22-4.148a6.99 6.99 0 01.018-7.25c1.29-2.128 3.65-3.593 6.22-3.75v5.36c.458.219.89.485 1.293.792a4.159 4.159 0 011.66 2.387c.228.63.342 1.28.342 1.932a4.159 4.159 0 01-1.248 3.109 4.159 4.159 0 01-2.91 1.48v2.61c2.9-.142 5.518-1.684 6.99-4.062a8.318 8.318 0 00-.022-8.632zm-7.81 4.135a2.827 2.827 0 002.827-2.827 2.827 2.827 0 10-5.654 0 2.827 2.827 0 002.827 2.827z"
      fill="#FF6C37"
    ></path>
  </svg>
);
const StripeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path
      fill="#635bff"
      d="M18.06 4.315c-.28-.3-.63-.5-1.04-.51h-5.22c-.42 0-.77.19-1.05.51l-5.43 5.43c-.64.63-.64 1.66 0 2.3l2.89 2.89c.32.32.74.49 1.18.49h7.45c.44 0 .86-.17 1.18-.49l2.89-2.89c.64-.63.64-1.66 0-2.3l-2.85-5.42zm-8.49 8.24h4.48c.17 0 .3.14.3.3s-.13.3-.3.3h-4.48c-.17 0-.3-.14-.3-.3s.13-.3.3-.3zm.32-2.19h5.58c.17 0 .3.14.3.3s-.13.3-.3.3H9.89c-.17 0-.3-.14-.3-.3s.13-.3.3-.3zm-.2-2.19h6.78c.17 0 .3.14.3.3s-.13.3-.3.3H9.69c-.17 0-.3-.14-.3-.3s.13-.3.3-.3z"
    ></path>
  </svg>
);
const SupabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path
      fill="#3ecf8e"
      d="M18.57.51a1.95 1.95 0 00-1.46.2L4.25 9.42a1.95 1.95 0 00-.93 1.66v9.33c0 .8.5 1.52 1.25 1.8l1.45.54a1.95 1.95 0 002.4-1.12L12.5 13.5l4.08 8.13a1.95 1.95 0 002.4 1.12l1.45-.54c.75-.29 1.25-1 1.25-1.8V2.37c0-.8-.5-1.52-1.25-1.8l-1.86-.66z"
    ></path>
  </svg>
);
const FirebaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path
      fill="#FFCA28"
      d="M3.46 17.9L1.33 13.3a.65.65 0 01.37-1.02l7.57-3.03L3.46 17.9z"
    ></path>
    <path
      fill="#FFA000"
      d="M12.78 7.85l-6.8-2.73-2.14 4.6 8.94 1.43z"
    ></path>
    <path fill="#F57C00" d="M12.78 7.85L8.9 2.05a.65.65 0 00-1.14-.1L3.98 5.12l8.8 2.73z"></path>
    <path fill="#FFCA28" d="M18.82 20.32L12.78 7.85l8.94 1.43-2.9 11.04z"></path>
    <path
      fill="#455A64"
      d="M18.82 20.32c-.32.1-1.44.15-1.78.1-.34-.04-1.55-1.86-1.55-1.86l-2.72-10.7 6.05 12.46z"
    ></path>
  </svg>
);

const iconMap: { [key: string]: React.ReactNode } = {
  HTML5: <FileCode />,
  CSS3: <FileCode />,
  "Tailwind CSS": <Wind />,
  JavaScript: <FileCode />,
  TypeScript: <FileCode />,
  "Node.js": <ServerCog />,
  Go: <GoIcon />,
  Python: <PythonIcon />,
  React: <ReactIcon />,
  "Next.js": <NextJsIcon />,
  "Next.js 15": <NextJsIcon />,
  Gin: <GinIcon />,
  ExpressJS: <Server />,
  Bootstrap: <BootstrapIcon />,
  MySQL: <Database />,
  MongoDB: <Database />,
  Firebase: <FirebaseIcon />,
  PostgreSQL: <Database />,
  SQLite: <Database />,
  Supabase: <SupabaseIcon />,
  Git: <GitMerge />,
  GitHub: <Github />,
  GitLab: <Gitlab />,
  Postman: <PostmanIcon />,
  Clerk: <ClerkIcon />,
  "shadcn/ui": <ShadcnIcon />,
  npm: <NpmIcon />,
  Prisma: <PrismaIcon />,
  Zod: <Book />,
  Vercel: <VercelIcon />,
  Stripe: <StripeIcon />,
  Framer: <FramerIcon />,
  "Visual Studio Code": <Monitor />,
  Vim: <VimIcon />,
  Neovim: <NeovimIcon />,
  Linux: <Terminal />,
  Lubuntu: <LubuntuIcon />,
  "GitHub Actions": <Github />,
  "Lottie React": <PenTool />,
  Pandas: <Book />,
  "Scikit-learn": <Book />,
  "TensorFlow": <Component />,
  "Matplotlib": <Component />,
  "Framer Motion": <FramerIcon />,
  "Socket.io": <ServerCog />,
  Mongoose: <Database />,
  NodeJS: <ServerCog />,
  "Express JS": <Server />,
  "Font Awesome": <Component />,
  "Responsive Design": <Smartphone />,
  Jupyter: <Book />,
  ReactJS: <ReactIcon />,
};

const createSkill = (name: string): Skill => ({ name, icon: iconMap[name] || <Code /> });


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
    items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Go", "Python", "React", "Next.js", "Gin", "ExpressJS", "Bootstrap"].map(createSkill),
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "Firebase", "PostgreSQL", "SQLite", "Supabase"].map(createSkill),
  },
  {
    title: "Tools & Libraries",
    items: ["Git", "GitHub", "GitLab", "Postman", "Clerk", "shadcn/ui", "npm", "Prisma", "Zod", "Vercel", "Stripe", "Framer"].map(createSkill),
  },
  {
    title: "Code Editor / IDE",
    items: ["Visual Studio Code", "Vim", "Neovim"].map(createSkill),
  },
  {
    title: "Operating Systems",
    items: ["Linux", "Lubuntu"].map(createSkill),
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
