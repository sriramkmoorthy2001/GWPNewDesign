import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import GlowButton from "./GlowButton";

const articles = [
  {
    id: 1,
    title: "The Future of AI in Enterprise",
    excerpt: "How generative AI is reshaping business operations and decision-making processes across global industries.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400",
    category: "TECHNOLOGY"
  },
  {
    id: 2,
    title: "Sustainable Digital Transformation",
    excerpt: "Strategies for reducing carbon footprint while accelerating digital growth in the modern eco-conscious market.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
    category: "SUSTAINABILITY"
  },
  {
    id: 3,
    title: "Cloud Native Architecture",
    excerpt: "Best practices for building scalable, resilient applications using modern cloud-native principles and microservices.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400", // Reusing for placeholder
    category: "ENGINEERING"
  },
  {
    id: 4,
    title: "Data-Driven Customer Experience",
    excerpt: "Leveraging big data analytics to create personalized, seamless journeys that drive customer loyalty.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
    category: "INSIGHTS"
  },
  {
    id: 5,
    title: "Cybersecurity in 2026",
    excerpt: "Emerging threats and the next-generation defense mechanisms every CTO needs to be aware of.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
    category: "SECURITY"
  }
];

const ArticleCard = ({ article, isActive }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isActive ? 1 : 0.5, 
        scale: isActive ? 1 : 0.9,
        filter: isActive ? "blur(0px)" : "blur(2px)"
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-2xl flex-shrink-0 w-80 md:w-96 h-[500px] flex flex-col ${isActive ? 'z-10 ring-1 ring-cyan-500/50' : 'z-0'}`}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-cyan-400 border border-cyan-500/30">
          {article.category}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4 leading-tight">{article.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {article.excerpt}
        </p>
        
        <button className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-2 group mt-auto">
          READ MORE 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </motion.div>
  );
};

const IndustryArticles = () => {
  // We track the index of the CENTER card
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  // Calculate visible indices. We want 3 cards visible.
  // Previous, Current, Next.
  // Using modulo math to handle wrapping.
  const getVisibleArticles = () => {
    const prev = (activeIndex - 1 + articles.length) % articles.length;
    const next = (activeIndex + 1) % articles.length;
    // Return ordered list for rendering: [Prev, Active, Next]
    // Note: In a real circular carousel without duplication, 'layout' animation can be tricky.
    // simpler approach: Render active and its neighbors. 
    return [
      { ...articles[prev], position: 'left' },
      { ...articles[activeIndex], position: 'center' },
      { ...articles[next], position: 'right' }
    ];
  };

  const visibleArticles = getVisibleArticles();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 pointer-events-auto relative">
       {/* Background Glow */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end w-full max-w-6xl px-6 mb-12 border-b border-gray-800 pb-8">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2 tracking-wide">INDUSTRY ARTICLES</h2>
          <p className="text-gray-400">Insights and trends from the digital frontier.</p>
        </div>
        <GlowButton className="hidden md:flex bg-transparent border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
          View all articles
        </GlowButton>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl flex items-center justify-center gap-4 md:gap-8 px-4">
        
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-slate-800/50 hover:bg-cyan-500/20 text-white transition-all backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 z-20"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        {/* Cards Wrapper */}
        <div className="flex justify-center items-center gap-6 overflow-hidden py-10 w-full">
          <AnimatePresence mode="popLayout">
            {visibleArticles.map((article) => (
             <ArticleCard 
               key={article.id} 
               article={article} 
               isActive={article.position === 'center'} 
             />
            ))}
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-slate-800/50 hover:bg-cyan-500/20 text-white transition-all backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 z-20"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Dots */}
      <div className="flex gap-3 mt-8">
        {articles.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === activeIndex 
                ? "w-8 h-2 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
                : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Mobile View All Button (Visible only on small screens) */}
       <div className="mt-8 md:hidden">
        <GlowButton className="bg-transparent border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
            View all articles
        </GlowButton>
       </div>

    </section>
  );
};

export default IndustryArticles;
