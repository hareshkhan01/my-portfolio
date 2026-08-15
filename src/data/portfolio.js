import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiCalendar,
  FiCode,
  FiGlobe,
  FiDatabase,
  FiSmartphone,
  FiGitBranch,
  FiServer,
  FiFileText,
  FiCoffee,
  FiTerminal,
  FiLayers,
} from "react-icons/fi";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiPython,
  SiSpringboot,
} from "react-icons/si";

import { FaJava, FaAndroid } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";

export const personalInfo = {
  name: "Haresh Khan",
  title: "Software Developer",
  tagline: "I DON'T USE",
  taglineAccent: "TECHNOLOGY.",
  taglineEnd: "I UNDERSTAND IT.",
  subtitle: "Hi, I'm Haresh Khan",
  initializingText: "> INITIALIZING PORTFOLIO...",
  social: {
    github: "https://github.com/hareshkhan0",
    linkedin: "https://www.linkedin.com/in/haresh-khan-481451331/",
    email: "hareshkhan060@gmail.com",
  },
  resumeUrl: "https://drive.google.com/file/d/15RTBIExe50bfZf8Q67Fk_vPa5ZzC1RVx/view?usp=drive_link",
};

export const aboutData = {
  heading: "I BUILD SOLUTIONS.",
  headingAccent: "NOT JUST CODE.",
  bio: [
    "Passionate Full Stack Developer who loves building scalable, efficient and futuristic web applications.",
    "I enjoy turning complex problems into simple, beautiful and intuitive solutions.",
    'When I\'m not coding, I love to cook, play games and explore tech.',
  ],
  terminalPrompt: 'C:\\> echo "Stay curious, keep building.."',
  infoCards: [
    { icon: FiMapPin, label: "LOCATION", value: "India" },
    { icon: FiCalendar, label: "BIRTHDAY", value: "18 October 2001" },
    { icon: FiCode, label: "LANGUAGES", value: "Java, JavaScript, Python" },
    { icon: FiCoffee, label: "CURRENT FOCUS", value: "Building cool products" },
    { icon: FiTerminal, label: "STATUS", value: "Always learning..." },
  ],
};

export const skills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: FaCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Android", icon: FaAndroid },
];

export const projects = [
  {
    id: "project_01",
    title: "AI Expense Tracker",
    description:
      "AI-powered expense tracking web app that understands natural language and categorizes expenses using Gemini API.",
    technologies: ["Next.js", "TailwindCSS", "Gemini API"],
    github: "",
    demo: "",
  },
  {
    id: "project_02",
    title: "E-Commerce Store",
    description:
      "Full-featured e-commerce web app with cart, wishlist, authentication and secure payments.",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    github: "",
    demo: "",
  },
  {
    id: "project_03",
    title: "Music Player App",
    description:
      "Android music player with playlist, seekbar, media controls and offline support.",
    technologies: ["Java", "Android", "Room", "Retrofit"],
    github: "",
    demo: "",
  },
];

export const experience = [
  {
    period: "2024 — Present",
    role: "Freelance Developer",
    company: "",
    description:
      "Building modern web applications and mobile apps for clients worldwide.",
  },
  {
    period: "2023 — 2024",
    role: "Full Stack Developer Intern",
    company: "XYZ Corp",
    description:
      "Worked on real-world projects, REST APIs, and optimized frontend performance.",
  },
  {
    period: "2022 — 2023",
    role: "Android Developer Intern",
    company: "ABC Apps",
    description:
      "Developed Android applications, integrated APIs and improved app performance.",
  },
];

export const contactInfo = {
  heading: "LET'S BUILD SOMETHING",
  headingAccent: "AMAZING TOGETHER.",
  details: [
    { icon: FiMail, label: "Email", value: "hareshkhan060@gmail.com" },
    { icon: FiPhone, label: "Phone", value: "+91 8967740629" },
    { icon: FiMapPin, label: "Location", value: "Kolkata, West Bengal, India" },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "github.com/hareshkhan01",
      href: "https://github.com/hareshkhan01",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/haresh-khan-481451331/",
      href: "https://www.linkedin.com/in/haresh-khan-481451331/",
    },
  ],
};

export const navItems = [
  { id: "home", label: "01_HOME", href: "#home" },
  { id: "about", label: "02_ABOUT", href: "#about" },
  { id: "skills", label: "03_SKILLS", href: "#skills" },
  { id: "projects", label: "04_PROJECTS", href: "#projects" },
  { id: "experience", label: "05_EXPERIENCE", href: "#experience" },
  { id: "contact", label: "06_CONTACT", href: "#contact" },
];
