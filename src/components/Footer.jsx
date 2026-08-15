import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

const Footer = () => (
  <footer className="border-t border-matrix-border py-6 px-4 md:px-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] text-matrix-text-muted tracking-widest">&gt; SYSTEM STATUS: ONLINE</span>
        <span className="text-[10px] text-matrix-text-muted tracking-widest">&gt; CONNECTION CLOSED.</span>
      </div>
      <div className="flex items-center gap-4">
        <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-matrix-muted hover:text-matrix-primary transition-colors" aria-label="GitHub"><FiGithub size={14} /></a>
        <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-matrix-muted hover:text-matrix-primary transition-colors" aria-label="LinkedIn"><FiLinkedin size={14} /></a>
        <a href={`mailto:${personalInfo.social.email}`} className="text-matrix-muted hover:text-matrix-primary transition-colors" aria-label="Email"><FiMail size={14} /></a>
      </div>
      <p className="text-[10px] text-matrix-text-muted tracking-wider">&copy; {new Date().getFullYear()} {personalInfo.name}</p>
    </div>
  </footer>
);

export default Footer;
