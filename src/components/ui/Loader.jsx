import React from 'react';
import { useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';
import GWPLogo from './GWPLogo';

const Loader = () => {
  const { active, progress } = useProgress();

  // Only show if active or progress is not 100
  // We use a small timeout logic in real apps usually, but 'active' from drei is good enough for now
  if (!active && progress === 100) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050510]">
      <div className="flex flex-col items-center gap-2">
        {/* GWP Logo */}
        <div className="scale-75 md:scale-100">
            <GWPLogo />
        </div>

        {/* Progress Stack */}
        <div className="flex flex-col items-center gap-2">
            {/* Percentage */}
            <div className="font-mono text-lg text-sky-400/80 tracking-widest ml-6">
                {Math.round(progress)}%
            </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
