import { motion } from "framer-motion";
import GlowButton from "./GlowButton";

const FeatureSection = ({ title, description, image, reversed, onLearnMore, onContact, unifiedCard }) => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-10 pointer-events-auto">
        <div className={`flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl
            ${reversed ? 'md:flex-row-reverse' : ''}
            ${unifiedCard ? 'bg-black/5 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-8 md:p-16' : ''}
        `}>
            {/* Image Side */}
            <motion.div 
                initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.3 }}
                className="w-full md:w-1/2"
            >
                <div className={`relative overflow-hidden group ${unifiedCard ? '' : 'rounded-2xl border border-white/10 shadow-2xl'}`}>
                    {!unifiedCard && <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />}
                    {typeof image === 'string' ? (
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            {image}
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
                initial={{ opacity: 0, x: reversed ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ amount: 0.3 }}
                className="w-full md:w-1/2 text-left"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {title}
                </h2>
                <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                    {description}
                </p>
                <div className="flex gap-4 md:gap-6 items-center">
                    <GlowButton onClick={onContact}>
                        Contact Us
                    </GlowButton>
                    <button 
                        onClick={onLearnMore}
                        className="text-cyan-400 font-bold uppercase tracking-widest hover:text-white transition-colors text-sm"
                    >
                        Learn More
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default FeatureSection;
