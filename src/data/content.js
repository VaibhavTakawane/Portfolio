// Edit everything in this file to make the portfolio yours.
// No other file needs to change for basic content updates.

export const profile = {
  name: "Vaibhav Takawane",
  role: "Full-Stack Developer",
  tagline:
    "I build full-stack web apps with Python, Django, FastAPI, and React — and integrate LLMs like Groq to add real AI features.",
  location: "Pune, Maharashtra, India",
  email: "vaibhavtakawane07@gmail.com",
  github: "https://github.com/VaibhavTakawane",
  linkedin: "https://www.linkedin.com/in/vaibhav-takawane-b63b80350/",
  twitter: "", // no Twitter/X handle provided — leave blank or remove from UI
  // TODO: replace with a real hosted link to your resume PDF (e.g. Google Drive "anyone with link can view", or host it in /public)
  resumeUrl: "https://drive.google.com/file/d/1a631JMudPJYpiri8u0QDCShUNTXOPR3C/view",
};

export const skills = [
  "Python",
  "JavaScript",
  "Django",
  "Django REST framework",
  "FastAPI",
  "React.js",
  "Redux Toolkit",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "PostgreSQL",
  "MySQL",
  "C",
  "Groq LLM API",
  "Prompt Engineering",
  "Git",
  "GitHub",
  "Postman",
];

export const experience = [
];

export const projects = [
  {
    name: "AI-JOB-MATCHER",
    description:
      "Full-stack AI job matcher with resume analysis and personalized job recommendations, powered by the Groq LLM API with prompt-engineered resume parsing.",
    tech: ["React", "FastAPI", "Groq LLM API"],
    github: "https://github.com/VaibhavTakawane/AI-JOB-MATCHER",
    live: "",
  },
  {
    name: "Shop_Cart",
    description:
      "Full-stack e-commerce app with product browsing, reviews, cart, JWT authentication, multi-step checkout, and PayPal payments.",
    tech: ["React", "Redux Toolkit", "Django REST Framework"],
    github: "https://github.com/VaibhavTakawane/Shop_Cart",
    live: "",
  },
  {
    name: "Fast-API",
    description:
      "REST API backend project focused on building and testing endpoints with FastAPI.",
    tech: ["Python", "FastAPI"],
    github: "https://github.com/VaibhavTakawane/Fast-API",
    live: "",
  },
];

export const navItems = [
  { path: "/", label: "Introduction" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills & Tools" },
  { path: "/education", label: "Education" },
  { path: "/contact", label: "Contact" },
];

import {
  Code2,
  Monitor,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Layers3,
} from "lucide-react";

export const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    description: "Programming languages I work with",
    skills: ["Python", "JavaScript", "Java", "C"],
  },

  {
    title: "Frameworks",
    icon: Layers3,
    description: "Frameworks and libraries I work with",
    skills: [
      "Django",
      "Django REST framework",
      "FastAPI",
      "React.js",
    ],
  },

  {
    title: "Frontend",
    icon: Monitor,
    description: "Modern web development",
    skills: ["HTML", "CSS", "Tailwind CSS", "React.js", "Bootstrap"],
  },

  {
    title: "Backend",
    icon: Server,
    description: "Server-side development and APIs",
    skills: [
      "Python",
      "Django",
      "Django REST framework",
      "FastAPI",
      "REST APIs",
      "JWT",
    ],
  },

  {
    title: "Databases",
    icon: Database,
    description: "Data storage and management",
    skills: ["PostgreSQL", "MySQL", "SQLite3"],
  },

  {
    title: "AI & LLM",
    icon: BrainCircuit,
    description: "AI-powered application development",
    skills: ["Groq LLM API", "Prompt Engineering"],
  },

  {
    title: "Tools & Deployment",
    icon: Wrench,
    description: "Development and deployment tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export const education = [
  {
    id: 1,
    type: "Bachelor's Degree",
    degree: "Bachelor of Science (Computer Science)",
    institution: "Savitribai Phule Pune University",
    location: "Pune, Maharashtra, India",
    duration: "2022 – 2025",
    description:
      "Completed a Bachelor's degree in Computer Science with a CGPA of 7.56, focused on programming, databases, and modern web technologies.",
    details: [
      "Software Development",
      "Web Development",
      "Database Management",
      "Data Structures & Algorithms",
      "Data Science",
    ],
    link: "",
  },

  {
    id: 2,
    type: "Higher Secondary Education",
    degree: "Higher Secondary Certificate (12th)",
    institution: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune",
    location: "Pune, Maharashtra, India",
    duration: "2021",
    description: "Completed higher secondary education with 73.17%.",
    details: ["Science", "Mathematics"],
    link: "",
  },

  {
    id: 3,
    type: "Secondary Education",
    degree: "Secondary School Certificate (10th)",
    institution: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune",
    location: "Pune, Maharashtra, India",
    duration: "2019",
    description: "Completed secondary education with 70.00%.",
    details: [],
    link: "",
  },
];