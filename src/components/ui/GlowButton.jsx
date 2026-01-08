import { motion } from "framer-motion";

const GlowButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(87, 194, 255, 0.6)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-8 py-3 
        text-sm font-bold uppercase tracking-widest 
        text-white border border-cyan-500/30 
        bg-cyan-950/30 backdrop-blur-sm 
        rounded-full 
        transition-all duration-300
        hover:border-cyan-400 hover:bg-cyan-500/20
        pointer-events-auto cursor-pointer
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default GlowButton;
