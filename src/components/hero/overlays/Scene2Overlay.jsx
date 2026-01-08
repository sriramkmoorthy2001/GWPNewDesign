import { motion } from "framer-motion";
import { sceneProgress } from "../../engine/sceneProgress";
import { SCENES } from "../../engine/sceneTimeline";

const Scene2Overlay = ({ scroll }) => {
  const inP = sceneProgress(scroll, ...SCENES.PROBLEM_IN);
  const holdP = sceneProgress(scroll, ...SCENES.PROBLEM_HOLD);
  const outP = sceneProgress(scroll, ...SCENES.PROBLEM_OUT);

  // Cinematic opacity curve
  const opacity =
    inP < 1
      ? inP // fade in
      : outP > 0
      ? 1 - outP // fade out
      : 1; // hold

  return (
    <motion.div
      className="absolute inset-0 z-10 pointer-events-none flex items-center"
      style={{ opacity }}
    >
      <div className="container mx-auto px-8 md:px-16">
        <motion.h2
          style={{ y: 40 - Math.min(inP, 1) * 40, scale: 0.98 + holdP * 0.02 }}
          className="text-4xl md:text-6xl font-semibold text-white max-w-3xl leading-tight"
        >
          The digital world is crowded.
          <br />
          <span className="text-cyan-400">
            Standing out is harder than ever.
          </span>
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Scene2Overlay;
