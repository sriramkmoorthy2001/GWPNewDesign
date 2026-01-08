import { motion } from "framer-motion";

const EnterpriseStatement = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl text-center px-6"
      >
        <p className="text-xs tracking-[0.35em] text-cyan-400 mb-8 font-bold uppercase">
          Your Partner in Digital Innovation
        </p>

        <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white leading-relaxed mb-10">
          A technology-driven digital solutions company specializing in modern,
          scalable, and performance-focused web platforms.
        </h2>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          We partner with organizations worldwide to design, develop, and deploy
          reliable digital experiences that support long-term growth,
          operational efficiency, and global reach.
        </p>
      </motion.div>
    </section>
  );
};

export default EnterpriseStatement;
