import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import TerminalWindow from "./TerminalWindow";
import { experience } from "../data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 border-t border-matrix-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="05" title="EXPERIENCE" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-matrix-border" />
              <div className="space-y-8">
                {/* {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-matrix-primary bg-matrix-bg z-10" />
                    <div>
                      <p className="text-[10px] text-matrix-primary tracking-widest font-medium mb-1">{item.period}</p>
                      <h3 className="text-sm md:text-base text-matrix-text font-bold">
                        {item.role}
                        {item.company && <span className="text-matrix-secondary font-normal"> @ {item.company}</span>}
                      </h3>
                      <p className="text-[11px] md:text-xs text-matrix-text-muted mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))} */}
                <p>Blah Blah Balh</p>
              </div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-2 flex items-start">
            <TerminalWindow title="system.log" className="w-full">
              <div className="flex flex-col items-center justify-center py-6 md:py-8">
                <p className="text-2xl md:text-3xl font-black text-matrix-primary glow-text text-center leading-tight tracking-tight">WAKE UP.<br />CODE.<br />REPEAT.</p>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
