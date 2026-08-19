import { motion } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import TerminalWindow from "./TerminalWindow";
import { projects } from "../data/portfolio";

const Projects = () => (
  <section id="projects" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 border-t border-matrix-border">
    <div className="max-w-6xl mx-auto">
      <SectionHeader number="04" title="PROJECTS" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {projects.map((project, index) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.1, duration: 0.5 }}>
            <TerminalWindow title={`${project.id}.exe`}>
              <div className="space-y-3">
                {project.highlight && (
                  <p className="text-[9px] text-matrix-secondary tracking-widest uppercase">&gt; {project.highlight}</p>
                )}
                <h3 className="text-sm md:text-base text-matrix-text font-bold">{project.title}</h3>
                <p className="text-[11px] md:text-xs text-matrix-text-muted leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[9px] md:text-[10px] px-2 py-0.5 border border-matrix-border text-matrix-muted tracking-wider rounded-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-matrix-border">
                  <div className="flex items-center gap-3">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-matrix-muted hover:text-matrix-primary transition-colors" aria-label={`${project.title} GitHub`}><FiGithub size={14} /></a>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-matrix-muted hover:text-matrix-primary transition-colors" aria-label={`${project.title} Demo`}><FiExternalLink size={14} /></a>}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-matrix-primary tracking-wider cursor-default group">&gt; VIEW PROJECT <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
