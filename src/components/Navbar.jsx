import { useState, useEffect } from "react";
import { personalInfo, navItems } from "../data/portfolio";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observers = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`hidden lg:block sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-matrix-surface/90 backdrop-blur-md border-b border-matrix-border shadow-[0_1px_12px_rgba(57,255,20,0.05)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-3" aria-label="Main navigation">
        {/* Left: Brand */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-matrix-primary font-bold text-sm tracking-wider glow-text">
            HK.exe
          </span>
          <span className="flex items-center gap-1.5 text-[9px] text-matrix-text-muted tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-matrix-primary animate-pulse" />
            SYSTEM ONLINE
          </span>
        </div>

        {/* Center: Nav Links */}
        <ul className="flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 text-[10px] tracking-widest rounded-sm transition-all duration-200 ${
                    isActive
                      ? "text-matrix-primary glow-text"
                      : "text-matrix-text-muted hover:text-matrix-primary"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {isActive && <span className="mr-0.5">&gt;</span>}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: Quote */}
        <div className="text-right flex-shrink-0">
          <p className="text-[10px] text-matrix-text-muted tracking-wider leading-relaxed">
            &gt; WHO LOOKS OUTSIDE, DREAMS<br />WHO LOOKS INSIDE, AWAKES.
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
