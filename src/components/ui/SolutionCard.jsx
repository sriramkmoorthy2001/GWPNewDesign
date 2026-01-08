import { motion } from "framer-motion";
import GlowButton from "./GlowButton";

const SolutionCard = ({ title, description, image, onLearnMore, onContact }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="flex flex-col bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden max-w-xl w-full"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
        <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
            {description}
        </p>
        
        <div className="flex gap-4 mt-auto">
          <button 
            onClick={onLearnMore}
            className="text-cyan-400 text-sm font-bold uppercase tracking-wider hover:text-cyan-300 transition-colors"
          >
            Learn More
          </button>
          <GlowButton onClick={onContact} className="px-6 py-2 text-xs">
            Contact Us
          </GlowButton>
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionCard;
