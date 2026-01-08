import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CinematicOverlay = ({ scroll }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const splitText = (text) =>
    text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 + i * 0.03 }}
        className="inline-block"
        aria-hidden
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    // ✅ SCROLL-CONTROLLED WRAPPER
    <motion.div
      className="absolute inset-0 pointer-events-none z-10"
      style={{
        opacity: 1 - scroll * 1.4, // fades out around ~70% scroll
      }}
    >
      <div className="container mx-auto px-8 md:px-16 h-full flex flex-col justify-between py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-between items-start"
        >
          <div className="text-sm tracking-widest text-gray-400">
            GLOBAL WEB PRODUCTION
          </div>
          <div className="text-sm text-gray-500 pointer-events-auto cursor-pointer hover:text-white transition-colors">
            MENU
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-none mb-6">
              <span className="text-white">{splitText("DIGITAL")}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
                {splitText("EXCELLENCE")}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8"
          >
            Empowering businesses with cutting-edge AI solutions, full-stack
            development, and cloud infrastructure. From automation to
            deployment, we engineer digital ecosystems that scale globally.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-linear-to-r hover:from-cyan-400 hover:to-blue-600 hover:text-white transition-all duration-300"
          >
            EXPLORE OUR WORK
          </motion.button>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex justify-between items-end text-sm text-gray-500"
        >
          <div className="space-y-1">
            <div>Scroll to discover</div>
            <div className="w-px h-16 bg-linear-to-b from-gray-500 to-transparent mx-auto"></div>
          </div>
          <div className="text-right space-y-1">
            <div>Engineering the future</div>
            <div>of digital innovation</div>
            <div>— globally</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CinematicOverlay;
