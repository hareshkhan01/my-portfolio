import { motion } from "framer-motion";
import { FiChevronDown, FiDownload } from "react-icons/fi";
import { personalInfo, navItems } from "../data/portfolio";
import heroImg from "../assets/hero-cyberpunk.png";

const Hero = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Top Navigation Bar (desktop only) + Quote */}
      <div className="hidden lg:flex items-center justify-center gap-1 py-3 border-b border-matrix-border text-[10px] tracking-widest text-matrix-text-muted relative">
        <span className="text-matrix-border">[</span>
        {navItems.map((item, i) => (
          <span key={item.id}>
            <a href={item.href} onClick={(e) => handleScroll(e, item.href)} className="hover:text-matrix-primary transition-colors px-2 py-1">
              {item.label}
            </a>
            {i < navItems.length - 1 && <span className="text-matrix-border mx-1">|</span>}
          </span>
        ))}
        <span className="text-matrix-border">]</span>

        {/* Quote straddling the border line */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-right flex flex-col items-end">
          <p className="text-[10px] text-matrix-text-muted tracking-wider leading-none mb-1.5">
            &gt; WHO LOOKS OUTSIDE, DREAMS
          </p>
          <div className="w-full h-px bg-matrix-border my-0" />
          <p className="text-[10px] text-matrix-text-muted tracking-wider leading-none mt-1.5">
            WHO LOOKS INSIDE, AWAKES.
          </p>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:px-12 py-12 lg:py-0">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-xs text-matrix-muted tracking-widest mb-4 md:mb-6">
              {personalInfo.initializingText}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-matrix-text tracking-tight">
                {personalInfo.tagline}<br />
                <span className="text-matrix-primary glow-text">{personalInfo.taglineAccent}</span><br />
                <span className="cursor-blink">{personalInfo.taglineEnd}</span>
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }} className="mt-4 md:mt-6">
              <p className="text-sm md:text-base text-matrix-text font-medium">HI, I&apos;M {personalInfo.name.toUpperCase()}</p>
              <p className="text-xs md:text-sm text-matrix-secondary tracking-widest mt-1">{personalInfo.title.toUpperCase()}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }} className="mt-6 md:mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#projects" onClick={(e) => handleScroll(e, "#projects")} className="inline-flex items-center gap-2 px-5 py-2.5 border border-matrix-primary text-matrix-primary text-xs tracking-widest uppercase hover:bg-matrix-primary hover:text-matrix-bg transition-all duration-300 glow-box-hover">
                &gt; ACCESS MAINFRAME
              </a>
              <a href={personalInfo.resumeUrl} className="inline-flex items-center gap-2 px-5 py-2.5 border border-matrix-border text-matrix-text-muted text-xs tracking-widest uppercase hover:border-matrix-primary hover:text-matrix-primary transition-all duration-300">
                <FiDownload size={12} /> DOWNLOAD CV
              </a>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 relative">
            <div className="absolute inset-0 border border-matrix-border rounded-sm overflow-hidden glow-box">
              <img src={heroImg} alt="Cyberpunk developer silhouette with neon green digital accents" className="w-full h-full object-cover opacity-80" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-matrix-bg/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.5 }} className="flex flex-col items-center pb-6 gap-1">
        <span className="text-[10px] text-matrix-text-muted tracking-widest">SCROLL</span>
        <FiChevronDown size={14} className="text-matrix-muted animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
