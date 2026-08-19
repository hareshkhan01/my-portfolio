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
  FiBookOpen,
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
  SiExpress,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

import { FaJava, FaAndroid } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";

export const personalInfo = {
  name: "Haresh Khan",
  title: "Full Stack Developer",
  tagline: "I DON'T USE",
  taglineAccent: "TECHNOLOGY.",
  taglineEnd: "I UNDERSTAND IT.",
  subtitle: "Hi, I'm Haresh Khan",
  initializingText: "> INITIALIZING PORTFOLIO...",
  social: {
    github: "https://github.com/hareshkhan01",
    linkedin: "https://www.linkedin.com/in/haresh-khan-481451331/",
    email: "hareshkhan060@gmail.com",
  },
  resumeUrl: "https://drive.google.com/file/d/15RTBIExe50bfZf8Q67Fk_vPa5ZzC1RVx/view?usp=drive_link",
};

export const aboutData = {
  heading: "I BUILD SOLUTIONS.",
  headingAccent: "NOT JUST CODE.",
  bio: [
    "Full Stack Developer with experience in building both frontend and backend parts of web applications. I've worked with HTML, CSS, JavaScript, and React on the frontend, and Node.js, Express, and Java with Spring Boot on the backend.",
    "I enjoy solving real-world problems through code and always try to write clean, maintainable solutions. Comfortable working in a team, using Git, and following agile practices.",
    "When I'm not coding, I love to cook, play games and explore new tech.",
  ],
  terminalPrompt: 'C:\\> echo "Stay curious, keep building.."',
  infoCards: [
    { icon: FiMapPin, label: "LOCATION", value: "Kolkata, West Bengal, India" },
    { icon: FiCalendar, label: "BIRTHDAY", value: "12 September 2003" },
    { icon: FiCode, label: "LANGUAGES", value: "Java, JavaScript, SQL, HTML/CSS" },
    { icon: FiCoffee, label: "CURRENT FOCUS", value: "Building cool products" },
    { icon: FiTerminal, label: "STATUS", value: "Always learning..." },
  ],
};

export const skills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: FaCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Java", icon: FaJava },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "Python", icon: SiPython },
  { name: "Android", icon: FaAndroid },
];

export const projects = [
  {
    id: "project_01",
    title: "KisanMandi",
    description:
      "A full-stack agricultural marketplace connecting farmers directly with buyers, eliminating intermediaries. Built with secure authentication, product listings, and order management through RESTful APIs.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    demo: "",
    highlight: "Built in Binary Hackathon 2025",
  },
  {
    id: "project_02",
    title: "Plutoploy",
    description:
      "A Vercel-like cloud deployment platform that automates application builds and production deployments from GitHub repositories. Features real-time monitoring via SSE & WebSockets, isolated Podman containers with Caddy reverse proxy.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "GitHub Actions"],
    github: "",
    demo: "",
    highlight: "Cloud-Based Deployment Platform",
  },
];

export const education = [
  {
    period: "2024 — 2026",
    degree: "Master of Computer Application",
    institution: "Kalyani Government Engineering College",
    score: "CGPA: 7.92 / 10.0",
    icon: FiBookOpen,
  },
  {
    period: "2021 — 2024",
    degree: "Bachelor of Computer Application",
    institution: "Mahishadal Raj College",
    score: "72.19%",
    icon: FiBookOpen,
  },
  {
    period: "2021",
    degree: "Class 12th (WBSCTE&SD)",
    institution: "",
    score: "67.4%",
    icon: FiFileText,
  },
  {
    period: "2019",
    degree: "Class 10th (WBBSE)",
    institution: "",
    score: "53.4%",
    icon: FiFileText,
  },
];

export const experienceMessages = {
  title: "Experience",
  status: "Loading...",
  lines: [
    "Give me a chance, I'll turn it into experience.",
    "Give me enough experience, and who knows where it’ll take me.",
  ],
};

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
