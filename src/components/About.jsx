import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { aboutData } from "../data/portfolio";
import heroImg from "../assets/my-matrix-image.png";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="02" title="ABOUT_ME" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex items-start justify-center"
          >
            <div className="w-48 h-56 md:w-56 md:h-64 border border-matrix-border rounded-sm overflow-hidden glow-box relative">
              <img
                src={heroImg}
                alt="Developer portrait"
                className="w-full h-full object-cover "
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matrix-bg/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Center: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl md:text-2xl font-bold text-matrix-text leading-tight mb-4">
              {aboutData.heading}
              <br />
              <span className="text-matrix-primary glow-text">
                {aboutData.headingAccent}
              </span>
            </h3>

            <div className="space-y-3 text-xs md:text-sm text-matrix-text-muted leading-relaxed">
              {aboutData.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-5 text-[10px] md:text-xs text-matrix-muted tracking-wider">
              {aboutData.terminalPrompt}
            </p>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            {aboutData.infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 border border-matrix-border rounded-sm bg-matrix-surface hover:border-matrix-border-bright transition-colors group"
                >
                  <Icon
                    size={14}
                    className="text-matrix-primary mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-[10px] text-matrix-primary tracking-widest font-medium mb-0.5">
                      {card.label}
                    </p>
                    <p className="text-xs text-matrix-text-muted group-hover:text-matrix-text transition-colors">
                      {card.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
