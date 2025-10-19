export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type Education = {
  institution: string;
  degree: string;
  period:string;
  details: string;
};

export type Skill = string;

export type SkillCategory = {
  title: string;
  items: Skill[];
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
};
