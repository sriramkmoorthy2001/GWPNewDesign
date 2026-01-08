import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, Bookmark } from 'lucide-react';
import BlogHeroCarousel from '../components/BlogHeroCarousel';

const BlogsPage = ({ isDark }) => {

    const featuredArticle = {
        title: "AI-Powered Web Content Optimizer: Enhancing UX",
        description: "Creating optimized content that resonates with audiences while meeting technical requirements has become increasingly complex. AI tools are revolutionizing how we approach content strategy, ensuring perfectly tailored messaging for every user segment.",
        author: "Sarah Jenks",
        readTime: "5 min read",
        videoUrl: "https://www.youtube.com/embed/UKp_zXdxVTI?autoplay=1&mute=1&controls=0&loop=1&playlist=UKp_zXdxVTI&showinfo=0&modestbranding=1",
        tag: "Artificial Intelligence"
    };

    const topReads = [
        {
            title: "The Importance of Website Performance",
            tag: "web-blog",
            readTime: "3 min read",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500"
        },
        {
            title: "The Basics of the Software Development Lifecycle",
            tag: "web-blog",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500"
        },
        {
            title: "Top Web Development Programs",
            tag: "web-blog",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=500"
        }
    ];

    return (
        <div className={`min-h-screen ${isDark ? 'bg-black text-gray-200' : 'bg-sky-75 text-gray-800'}`}>

            {/* Full-Screen Hero Carousel */}
            <div className="relative">
                <BlogHeroCarousel isDark={isDark} />

                {/* Gradient blend overlay at bottom of hero */}
                <div className={`absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-20 bg-gradient-to-b ${isDark ? 'from-transparent to-black' : 'from-transparent to-black/20'}`} />

            </div>

            {/* Main Content Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative">{/* Negative margin removed to lower content */}

                {/* Main Content Grid - Equal Height */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch h-[800px]">

                    {/* Featured Article (Left - 2 Cols) */}
                    <div className="lg:col-span-2 h-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className={`group h-full relative rounded-[2.5rem] overflow-hidden border flex flex-col
                                ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-xl'}`}
                        >
                            {/* Video Area - Takes available space */}
                            <div className="flex-1 w-full relative overflow-hidden min-h-[50%]">
                                <iframe
                                    src={featuredArticle.videoUrl}
                                    title={featuredArticle.title}
                                    className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-125"
                                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    frameBorder="0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white uppercase tracking-wider">
                                        Featured
                                    </span>
                                </div>
                            </div>

                            {/* Content Area - Bottom */}
                            <div className="p-8 md:p-10 relative shrink-0">
                                <div className="flex items-center gap-4 text-sm mb-4 text-blue-500 font-medium">
                                    <span>{featuredArticle.tag}</span>
                                    <span>•</span>
                                    <span>{featuredArticle.readTime}</span>
                                </div>
                                <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {featuredArticle.title}
                                </h2>
                                <p className={`text-lg mb-8 leading-relaxed line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {featuredArticle.description}
                                </p>
                                <button className={`flex items-center gap-2 font-bold transition-all group-hover:gap-4 ${isDark ? 'text-white' : 'text-blue-600'}`}>
                                    Read More <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Top Reads (Right - 1 Col) - Flex col to distribute height */}
                    <div className="lg:col-span-1 flex flex-col gap-6 h-full">

                        <div className="flex items-center gap-2 mb-2">
                            <Bookmark className="w-5 h-5 text-blue-500" />
                            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Top Reads
                            </h3>
                        </div>

                        {topReads.map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className={`flex-1 flex gap-4 p-4 rounded-3xl border transition-all cursor-pointer group overflow-hidden
                                    ${isDark
                                        ? 'bg-white/5 border-white/10 hover:bg-white/10'
                                        : 'bg-white border-gray-200 shadow-md hover:shadow-lg'
                                    }`}
                            >
                                {/* Left Image */}
                                <div className="w-1/3 h-full relative rounded-xl overflow-hidden shrink-0">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Right Content */}
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="text-xs font-bold text-blue-500 mb-2 uppercase tracking-wide">
                                        {article.tag}
                                    </div>
                                    <h4 className={`text-base font-bold mb-2 leading-snug line-clamp-2 group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        {article.title}
                                    </h4>
                                    <div className="flex items-center justify-between mt-auto pt-2">
                                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                            {article.readTime}
                                        </span>
                                        <span className={`text-xs font-semibold flex items-center gap-1 ${isDark ? 'text-white' : 'text-blue-600'}`}>
                                            Read
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
