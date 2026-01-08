import { motion } from "framer-motion";
import { sceneProgress } from "../../engine/sceneProgress";
import { SCENES } from "../../engine/sceneTimeline";

const Scene3Overlay = ({ scroll }) => {
  const inP = sceneProgress(scroll, ...SCENES.SOLUTION_IN);
  const holdP = sceneProgress(scroll, ...SCENES.SOLUTION_HOLD);
  const outP = sceneProgress(scroll, ...SCENES.SOLUTION_OUT);

  const opacity =
    inP < 1
      ? inP
      : outP > 0
      ? 1 - outP
      : 1;

  return (
    <motion.div
      className="absolute inset-0 z-20 pointer-events-none flex items-center"
      style={{ opacity }}
    >
      <div className="container mx-auto px-8 md:px-16">
        <motion.h2
          style={{
            y: 30 - inP * 30,
             scale: 0.98 + holdP * 0.02,
          }}
          className="text-4xl md:text-6xl font-semibold text-white max-w-4xl leading-tight"
        >
          We help brands cut through the noise.
          <br />
          <span className="text-cyan-400">
            With clarity, technology, and scale.
          </span>
        </motion.h2>

        <motion.p
          style={{ opacity: holdP }}
          className="mt-8 text-lg text-gray-400 max-w-2xl"
        >
          Strategy, design, and engineering — unified into digital systems
          that grow globally.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Scene3Overlay;
