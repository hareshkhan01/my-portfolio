import { useState } from "react";
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiFolder, FiBriefcase, FiSend } from "react-icons/fi";
import { navItems } from "../data/portfolio";

const iconMap = {
  home: FiHome,
  about: FiUser,
  skills: FiCode,
  projects: FiFolder,
  experience: FiBriefcase,
  contact: FiSend,
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 bg-matrix-surface/90 backdrop-blur-md border-b border-matrix-border">
        <div>
          <span className="text-matrix-primary font-bold text-sm tracking-wider glow-text">HK.exe</span>
          <span className="ml-2 w-1.5 h-1.5 rounded-full bg-matrix-primary inline-block animate-pulse" />
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-matrix-primary p-1 hover:bg-matrix-glow rounded-sm transition-colors" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>
      {isOpen && (
        <div className="bg-matrix-surface/95 backdrop-blur-md border-b border-matrix-border">
          <nav aria-label="Mobile navigation">
            <ul className="py-2">
              {navItems.map((item) => {
                const Icon = iconMap[item.id];
                return (
                  <li key={item.id}>
                    <a href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="flex items-center gap-3 px-6 py-3 text-xs tracking-wider text-matrix-text-muted hover:text-matrix-primary hover:bg-matrix-glow/30 transition-all">
                      {Icon && <Icon size={14} className="text-matrix-muted" />}
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
