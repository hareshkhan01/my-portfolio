import { motion } from "framer-motion";

const SectionHeader = ({ number, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-8 md:mb-12"
    >
      <h2 className="text-sm md:text-base text-matrix-primary font-medium tracking-widest uppercase glitch-text">
        <span className="text-matrix-muted">&gt; </span>
        {number}_{title}
      </h2>
      <div className="mt-2 h-px w-16 bg-matrix-primary opacity-50" />
    </motion.div>
  );
};

export default SectionHeader;
