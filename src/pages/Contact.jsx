import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowRight, MapPin } from 'lucide-react';
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import MapBackground from "../components/MapBackground";

const WorldMapSVG = ({ isDark }) => (
    <svg viewBox="0 0 800 400" className="w-full h-full">
        <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={isDark ? "#60a5fa" : "#0284c7"} /> {/* Lighter Blue / Dark Blue */}
                <stop offset="100%" stopColor={isDark ? "#a78bfa" : "#2563eb"} /> {/* Lighter Purple / Blue */}
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        {/* Abstract World Map Dots */}
        <g fill="url(#mapGradient)" filter="url(#glow)">
            {/* North America */}
            <circle cx="150" cy="100" r="6" /> <circle cx="170" cy="110" r="6" /> <circle cx="190" cy="105" r="6" />
            <circle cx="160" cy="130" r="6" /> <circle cx="180" cy="140" r="6" /> <circle cx="200" cy="135" r="6" />
            <circle cx="140" cy="120" r="6" /> <circle cx="165" cy="160" r="6" /> <circle cx="185" cy="180" r="6" />
            {/* South America */}
            <circle cx="220" cy="240" r="6" /> <circle cx="240" cy="260" r="6" /> <circle cx="230" cy="290" r="6" />
            <circle cx="250" cy="230" r="6" /> <circle cx="245" cy="310" r="6" />
            {/* Europe */}
            <circle cx="380" cy="90" r="6" /> <circle cx="400" cy="85" r="6" /> <circle cx="420" cy="95" r="6" />
            <circle cx="390" cy="110" r="6" /> <circle cx="410" cy="105" r="6" /> <circle cx="430" cy="100" r="6" />
            {/* Africa */}
            <circle cx="400" cy="180" r="6" /> <circle cx="420" cy="190" r="6" /> <circle cx="440" cy="180" r="6" />
            <circle cx="410" cy="220" r="6" /> <circle cx="430" cy="240" r="6" /> <circle cx="450" cy="210" r="6" />
            {/* Asia */}
            <circle cx="550" cy="100" r="6" /> <circle cx="580" cy="90" r="6" /> <circle cx="610" cy="100" r="6" />
            <circle cx="560" cy="130" r="6" /> <circle cx="590" cy="120" r="6" /> <circle cx="620" cy="130" r="6" />
            <circle cx="570" cy="160" r="6" /> <circle cx="600" cy="150" r="6" /> <circle cx="630" cy="160" r="6" />
            <circle cx="530" cy="140" r="6" /> {/* India approx */}
            <circle cx="650" cy="140" r="6" />
            {/* Oceania */}
            <circle cx="650" cy="280" r="6" /> <circle cx="670" cy="290" r="6" /> <circle cx="690" cy="280" r="6" />

            {/* Connecting Lines (More Visible) */}
            <path d="M165 160 Q 300 200 400 180" stroke="url(#mapGradient)" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M420 190 Q 500 220 530 140" stroke="url(#mapGradient)" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M180 140 Q 350 100 390 110" stroke="url(#mapGradient)" strokeWidth="2" fill="none" opacity="0.6" />

            {/* Location Markers */}
            <circle cx="160" cy="140" r="10" fill="transparent" stroke="white" strokeWidth="3">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
            </circle> {/* USA Marker */}

            <circle cx="530" cy="140" r="10" fill="transparent" stroke="white" strokeWidth="3">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" delay="1s" />
                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" delay="1s" />
            </circle> {/* India Marker */}

        </g>
    </svg>
);

const Contact = ({ isDark }) => {
    return (
        <div className={`min-h-screen pt-32 relative ${isDark ? 'bg-slate-950 text-gray-200' : 'bg-sky-75 text-gray-700'}`}>

            {/* 3D Map Background - Scoped to Contact Page Hero */}
            <div className="absolute top-0 left-0 w-full h-[700px] z-0 overflow-hidden">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="w-full h-full">
                    <Suspense fallback={null}>
                        <MapBackground isDark={isDark} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Wrapper - Pointer Events to pass through to canvas where needed, but inputs clickable */}
            <div className="relative z-10 pointer-events-none">
                <div className="pointer-events-auto">

                    {/* Header Section */}
                    <div className="max-w-7xl mx-auto px-8 md:px-16 mb-20 pt-32 text-center md:text-left relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className={`text-5xl md:text-7xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
                        >
                            Let's Build<br />
                            the Future Together.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className={`text-xl max-w-2xl font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                            We deliver digital excellence. Whether you're a potential client or valued partner, we're ready to start the conversation.
                        </motion.p>
                    </div>

                    <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-3 gap-16 pb-24 relative z-10">

                        {/* Left Column: Contact Form (Glassmorphism) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className={`lg:col-span-2 p-8 md:p-12 rounded-[2rem] border shadow-2xl ${isDark ? 'bg-[#20242dcc] border-white/10' : 'bg-white/40 border-white/60 backdrop-blur-2xl'}`}
                        >
                            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Send us a message.
                            </h2>
                            <p className="opacity-70 mb-8">
                                We want to hear from you! Contact our team to learn about the services and language solutions we can provide to aid your business.
                            </p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>First name*</label>
                                        <input type="text" placeholder="John" className={`w-full p-4 rounded-xl border ${isDark ? 'bg-black/40 border-white/10 focus:border-blue-500 text-white placeholder-gray-200 placeholder-opacity-70' : 'bg-white/80 border-gray-200 focus:border-cyan-600 text-gray-900'} outline-none transition-all focus:ring-2 focus:ring-blue-500/20`} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>Last name*</label>
                                        <input type="text" placeholder="Doe" className={`w-full p-4 rounded-xl border ${isDark ? 'bg-black/40 border-white/10 focus:border-blue-500 text-white placeholder-gray-200 placeholder-opacity-70' : 'bg-white/80 border-gray-200 focus:border-cyan-600 text-gray-900'} outline-none transition-all focus:ring-2 focus:ring-blue-500/20`} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>Company</label>
                                        <input type="text" placeholder="Your Company Ltd." className={`w-full p-4 rounded-xl border ${isDark ? 'bg-black/40 border-white/10 focus:border-blue-500 text-white placeholder-gray-200 placeholder-opacity-70' : 'bg-white/80 border-gray-200 focus:border-cyan-600 text-gray-900'} outline-none transition-all focus:ring-2 focus:ring-blue-500/20`} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>Email*</label>
                                        <input type="email" placeholder="john@example.com" className={`w-full p-4 rounded-xl border ${isDark ? 'bg-black/40 border-white/10 focus:border-blue-500 text-white placeholder-gray-200 placeholder-opacity-70' : 'bg-white/80 border-gray-200 focus:border-cyan-600 text-gray-900'} outline-none transition-all focus:ring-2 focus:ring-blue-500/20`} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>Business area*</label>
                                    <div className="relative">
                                        <select className={`w-full p-4 rounded-xl border appearance-none ${isDark ? 'bg-black/40 border-white/10 focus:border-blue-500 text-gray-200 opacity-70' : 'bg-white/80 border-gray-200 focus:border-cyan-600 text-gray-500'} outline-none transition-all focus:ring-2 focus:ring-blue-500/20`}>
                                            <option className={`bg-white/10 text-black`}>Select a service</option>
                                            <option className={`bg-white/10 text-black`}>Web Development</option>
                                            <option className={`bg-white/10 text-black`}>AI Solutions</option>
                                            <option className={`bg-white/10 text-black`}>Consulting</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">▼</div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>How can we help you?*</label>
                                    <textarea rows="4" placeholder="Tell us about your project..." className={`w-full p-4 rounded-xl border ${isDark ? 'bg-black/40 border-white/10 focus:border-blue-500 text-white placeholder-gray-200 placeholder-opacity-70' : 'bg-white/80 border-gray-200 focus:border-cyan-600 text-gray-900'} outline-none transition-all focus:ring-2 focus:ring-blue-500/20`}></textarea>
                                </div>

                                <button className={`w-full md:w-auto px-10 py-4 rounded-xl font-bold text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg ${isDark ? 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700' : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500'}`}>
                                    Send Message
                                </button>
                            </form>
                        </motion.div>

                        {/* Right Column: Sidebar (Featured & Content) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-12"
                        >

                            {/* Featured Article Card */}
                            <div>
                                <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 opacity-60 ${isDark ? 'text-white' : 'text-gray-900'}`}>Featured Insight</h3>
                                <div className={`group cursor-pointer rounded-2xl p-6 border transition-all hover:-translate-y-1 ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/80 border-gray-200 shadow-xl hover:shadow-2xl'}`}>
                                    <div className="h-40 bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"></div>
                                        <span className="relative z-10 text-white font-bold tracking-widest text-sm">AI OPTIMIZATION</span>
                                    </div>
                                    <h4 className={`font-bold text-lg mb-2 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        AI-Powered Web Content Optimizer
                                    </h4>
                                    <p className="text-sm opacity-70 mb-4 line-clamp-3 leading-relaxed">
                                        Creating optimized content that resonates with audiences while meeting technical requirements has become increasingly complex...
                                    </p>
                                    <a href="#" className={`text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all ${isDark ? 'text-blue-400' : 'text-cyan-600'}`}>
                                        Read More <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* Locations with World Map Visualization */}
                            <div className={`rounded-3xl p-8 border relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-blue-900/20 to-black/40 border-white/10' : 'bg-white/60 border-gray-200'}`}>
                                {/* Background Map SVG - Holographic Overlay */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                                    <div className="absolute inset-0 scale-[2] origin-center opacity-50">
                                        <WorldMapSVG isDark={isDark} />
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className={`text-xl font-bold mb-8 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        <MapPin className="text-blue-500" /> Global Hubs
                                    </h3>
                                    <div className="space-y-8">
                                        {/* USA */}
                                        <div className="flex items-start gap-4 group">
                                            <div className="relative">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
                                                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75 mt-2"></div>
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold opacity-60 tracking-wider">HEADQUARTERS</span>
                                                <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>Temecula, CA</p>
                                                <div className="flex items-center gap-2 mt-1 opacity-80 text-sm">
                                                    <svg className="w-5 h-3 rounded-sm" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="30" height="20" fill="#B22234" />
                                                        <path d="M0,2.2 H30 M0,6.6 H30 M0,11 H30 M0,15.4 H30" stroke="#FFFFFF" strokeWidth="2.2" />
                                                        <rect width="12" height="11" fill="#3C3B6E" />
                                                        <path d="M2,2 h8 M2,5 h8 M2,8 h8" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1,2" />
                                                    </svg>
                                                    <span>United States</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* India */}
                                        <div className="flex items-start gap-4 group">
                                            <div className="relative">
                                                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                                                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75 mt-2"></div>
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold opacity-60 tracking-wider">DEVELOPMENT CENTER</span>
                                                <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>Trivandrum, KL</p>
                                                <div className="flex items-center gap-2 mt-1 opacity-80 text-sm">
                                                    <svg className="w-5 h-3 rounded-sm" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="30" height="20" fill="#FFFFFF" />
                                                        <rect width="30" height="6.6" fill="#FF9933" />
                                                        <rect y="13.3" width="30" height="6.7" fill="#138808" />
                                                        <circle cx="15" cy="10" r="2.5" fill="#000080" />
                                                    </svg>
                                                    <span>India</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stay Connected */}
                            <div>
                                <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 opacity-60 ${isDark ? 'text-white' : 'text-gray-900'}`}>Socials</h3>
                                <div className="flex gap-4">
                                    <a href="#" className={`p-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white border border-gray-200 hover:border-blue-300 text-blue-600'}`}>
                                        <Linkedin size={24} />
                                    </a>
                                    <a href="#" className={`p-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white border border-gray-200 hover:border-blue-300 text-blue-600'}`}>
                                        <Mail size={24} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
