
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const AnimatedButton = ({ children, onClick, className = "" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.5, y: y * 0.5 }); // Magnetic strength
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={`relative px-8 py-3 overflow-hidden text-sm font-bold tracking-widest text-black uppercase bg-white rounded-full group ${className}`}
    >
      <span className="relative z-10 block transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      <span className="absolute inset-0 z-0 bg-blue-600 scale-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-150 origin-center" />
    </motion.button>
  );
};

export default AnimatedButton;
