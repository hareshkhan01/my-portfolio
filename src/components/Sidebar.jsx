import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail, FiHome, FiUser, FiCode, FiFolder, FiBriefcase, FiSend } from "react-icons/fi";
import { personalInfo, navItems } from "../data/portfolio";

const iconMap = {
  home: FiHome,
  about: FiUser,
  skills: FiCode,
  projects: FiFolder,
  experience: FiBriefcase,
  contact: FiSend,
};

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden lg:flex flex-col w-56 xl:w-64 fixed left-0 top-0 h-screen border-r border-matrix-border bg-matrix-surface/80 backdrop-blur-sm z-40">
      {/* Brand */}
      <div className="p-5 border-b border-matrix-border">
        <h1 className="text-matrix-primary text-lg font-bold tracking-wider glow-text">
          HK.exe
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-2 h-2 rounded-full bg-matrix-primary animate-pulse" />
          <span className="text-[10px] text-matrix-text-muted tracking-widest uppercase">
            Running
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3" aria-label="Main navigation">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.id];
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-xs tracking-wider transition-all duration-200 group ${
                    isActive
                      ? "text-matrix-primary bg-matrix-glow border border-matrix-border-bright glow-box"
                      : "text-matrix-text-muted hover:text-matrix-primary hover:bg-matrix-glow/50 border border-transparent"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {Icon && (
                    <Icon
                      size={14}
                      className={`transition-colors ${
                        isActive
                          ? "text-matrix-primary"
                          : "text-matrix-muted group-hover:text-matrix-primary"
                      }`}
                    />
                  )}
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="p-5 border-t border-matrix-border">
        <div className="flex items-center gap-4">
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-matrix-muted hover:text-matrix-primary transition-colors" aria-label="GitHub">
            <FiGithub size={16} />
          </a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-matrix-muted hover:text-matrix-primary transition-colors" aria-label="LinkedIn">
            <FiLinkedin size={16} />
          </a>
          <a href={`mailto:${personalInfo.social.email}`} className="text-matrix-muted hover:text-matrix-primary transition-colors" aria-label="Email">
            <FiMail size={16} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
