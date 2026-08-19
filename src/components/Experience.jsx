import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiLoader } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import TerminalWindow from "./TerminalWindow";
import { experienceMessages, education } from "../data/portfolio";

const TypingText = ({ text, delay = 0, speed = 40 }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout;
    const startTyping = () => {
      let i = 0;
      const type = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(type, speed);
        } else {
          setDone(true);
        }
      };
      type();
    };
    timeout = setTimeout(startTyping, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span>
      {displayed}
      {!done && <span className="inline-block w-[2px] h-[1em] bg-matrix-primary ml-0.5 align-middle animate-pulse" />}
    </span>
  );
};

const Experience = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2400),
      setTimeout(() => setPhase(3), 4200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 border-t border-matrix-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="05" title="EXPERIENCE" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: The "Loading" experience terminal */}
          <div className="lg:col-span-3">
            <TerminalWindow title="experience.log">
              <div className="space-y-5 py-2">
                {/* Status line */}
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  >
                    <FiLoader size={16} className="text-matrix-primary" />
                  </motion.div>
                  <div>
                    <span className="text-xs tracking-widest text-matrix-primary font-bold glow-text">
                      {experienceMessages.title}:
                    </span>
                    <span className="ml-2 text-xs tracking-widest text-matrix-secondary">
                      <TypingText text={experienceMessages.status} delay={300} speed={100} />
                    </span>
                  </div>
                </div>

                {/* Loading bar */}
                <div className="relative">
                  <div className="h-[3px] bg-matrix-border rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-matrix-primary rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: ["0%", "42%", "67%", "42%", "78%", "55%"] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      style={{ boxShadow: "0 0 8px rgba(57, 255, 20, 0.6)" }}
                    />
                  </div>
                  <motion.p
                    className="text-[10px] text-matrix-text-muted tracking-widest mt-1.5 text-right"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    AWAITING OPPORTUNITY...
                  </motion.p>
                </div>

                {/* Separator */}
                <div className="border-t border-matrix-border" />

                {/* Typed messages */}
                <div className="space-y-4">
                  <AnimatePresence>
                    {phase >= 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="text-xs md:text-sm text-matrix-text leading-relaxed">
                          <span className="text-matrix-primary mr-1">&gt;</span>
                          <TypingText
                            text={experienceMessages.lines[0]}
                            delay={200}
                            speed={35}
                          />
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {phase >= 2 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="text-xs md:text-sm text-matrix-text leading-relaxed">
                          <span className="text-matrix-primary mr-1">&gt;</span>
                          <TypingText
                            text={experienceMessages.lines[1]}
                            delay={200}
                            speed={35}
                          />
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {phase >= 3 && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-[10px] text-matrix-muted tracking-widest pt-2 cursor-blink"
                      >
                        &gt; READY TO EXECUTE_
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </TerminalWindow>
          </div>

          {/* Right: Education timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="mb-4">
              <h3 className="text-xs tracking-widest text-matrix-primary font-medium glow-text">
                &gt; EDUCATION
              </h3>
            </div>
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-matrix-border" />
              <div className="space-y-5">
                {education.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.12, duration: 0.5 }}
                      className="relative pl-8"
                    >
                      <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-matrix-primary bg-matrix-bg z-10 flex items-center justify-center">
                        <Icon size={7} className="text-matrix-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-matrix-primary tracking-widest font-medium mb-0.5">
                          {item.period}
                        </p>
                        <h4 className="text-xs md:text-sm text-matrix-text font-bold leading-snug">
                          {item.degree}
                        </h4>
                        {item.institution && (
                          <p className="text-[10px] md:text-[11px] text-matrix-secondary mt-0.5">
                            {item.institution}
                          </p>
                        )}
                        <p className="text-[10px] text-matrix-text-muted mt-0.5 tracking-wider">
                          {item.score}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
