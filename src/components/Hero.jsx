import { motion } from "framer-motion";
import { FiChevronDown, FiDownload } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";
import heroImg from "../assets/my-matrix-image.webp";

const Hero = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-[calc(100dvh-3rem)] lg:min-h-[calc(100dvh-3.5rem)] flex flex-col relative overflow-hidden">
      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:px-12 py-6 lg:py-0">
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
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 relative hero-glitch-container">
            <div className="absolute inset-0 border border-matrix-border rounded-sm overflow-hidden glow-box hero-glitch">
              <img src={heroImg} alt="Haresh Khan" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-matrix-bg/80 via-transparent to-transparent" />
              <div className="hero-glitch-scan" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={(e) => handleScroll(e, "#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-3 left-0 right-0 z-10 flex flex-col items-center gap-1 cursor-pointer group"
      >
        <span className="text-[10px] text-matrix-text-muted tracking-widest group-hover:text-matrix-primary transition-colors">SCROLL</span>
        <FiChevronDown size={14} className="text-matrix-muted group-hover:text-matrix-primary animate-bounce transition-colors" />
      </motion.a>
    </section>
  );
};

export default Hero;
