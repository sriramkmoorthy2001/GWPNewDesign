import { motion } from "framer-motion";
import { sceneProgress } from "../../engine/sceneProgress";
import { SCENES } from "../../engine/sceneTimeline";

const Scene4CTA = ({ scroll }) => {
  const p = sceneProgress(scroll, ...SCENES.CTA);

  return (
    <motion.div
      className="absolute inset-0 z-40 pointer-events-auto flex items-center justify-center"
      style={{ opacity: p }}
    >
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6">
          Let’s build something global.
        </h2>

        <button className="px-8 py-4 bg-cyan-400 text-black rounded-full font-medium hover:scale-105 transition">
          Contact Us
        </button>
      </div>
    </motion.div>
  );
};

export default Scene4CTA;
