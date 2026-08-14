import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skills } from "../data/portfolio";

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 border-t border-matrix-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="03" title="SKILLS" />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="flex flex-col items-center gap-2 p-3 md:p-4 border border-matrix-border rounded-sm bg-matrix-surface hover:border-matrix-primary hover:bg-matrix-glow/30 transition-all duration-300 group cursor-default glow-box-hover"
              >
                <Icon
                  size={24}
                  className="text-matrix-muted group-hover:text-matrix-primary transition-colors duration-300"
                  strokeWidth={1.5}
                />
                <span className="text-[9px] md:text-[10px] text-matrix-text-muted group-hover:text-matrix-text tracking-wider text-center transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
