import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Articles from '../components/Articles';
import CinematicSlider from '../components/CinematicSlider';

const AboutPage = ({ isDark }) => {

    const team = [
        {
            name: "Byron Prather",
            role: "CEO & Founder",
            bio: "Byron Prather has more than 20 years of experience as a Microsoft senior manager, programming digital experiences and supervising teams responsible for web development, search engine optimization and experimentation. At Microsoft, he played a pivotal role shaping the company’s digital offerings, driving innovation and creating user experiences that resonated with millions of site visitors worldwide. Byron strives to empower businesses of all sizes with the same success for which he was responsible during his years at Microsoft.",
            image: "/ByronPrather900.webp"
        },
        {
            name: "Rajalekshmi Santha",
            role: "Chief Technology Officer",
            bio: "Rajalekshmi Santha is a distinguished IT leader with a career spanning over 17 years. Her extensive experience and leadership qualities make her an invaluable addition to the Global Web Production team. Known for her ability to drive innovation and foster a culture of critical thinking, Rajalekshmi’s leadership is grounded in thoughtfulness and a deep understanding of complex business processes. She excels in designing and delivering customized products for clients, showcasing her prowess in stakeholder coordination and Salesforce management.",
            image: "/Lekshmi_900.webp"
        },
        {
            name: "Marty Kneeland",
            role: "Sr. Director of Enterprise Business Development",
            bio: "Marty Kneeland is a relationship-driven business development leader with more than twenty years of experience delivering enterprise web and marketing programs for Microsoft and other global brands. At Global Web Production, Marty helps enterprise teams move faster and execute with precision. He builds trusted partnerships, connects business objectives to technical delivery, and focuses on measurable outcomes. His background spans go-to-market strategy, marketing automation, and content operations at global scale.",
            image: "/Marty_Kneeland.jpg"
        }
    ];

    return (
        <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-sky-75 text-gray-900'} font-sans selection:bg-cyan-500/30 overflow-x-hidden`}>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 md:pt-48 md:pb-32 overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden bg-black">
                    <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay for readability */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black" /> {/* Gradient blend */}

                    <div className="absolute inset-0 w-full h-full scale-[1.5]"> {/* Scale up to hide controls */}
                        <iframe
                            className="w-full h-full object-cover pointer-events-none opacity-50 md:opacity-100" // Lower opacity on mobile to hide buffering artifacts
                            src="https://www.youtube.com/embed/itQQCkA87Hs?autoplay=1&mute=1&controls=0&loop=1&playlist=itQQCkA87Hs,itQQCkA87Hs&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&enablejsapi=1&start=0"
                            title="Hero Background Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="eager"
                            style={{ border: 'none' }}
                        />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-white"
                    >
                        Where Technology <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Meets Reliability
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                        Global Web Production is an IT services and consulting company that partners with businesses to deliver reliable technology solutions, streamline operations, and support digital transformation.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all"
                    >
                        Contact Us
                    </motion.button>
                </div>
            </section>

            {/* Overview Section */}
            <section className={`py-24 px-6 md:px-12 relative ${isDark ? 'bg-black' : 'bg-sky-75'}`}>
                {/* Background Glows */}
                {isDark && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
                    </div>
                )}

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Top Intro Section (Full Width) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-block mb-6">
                            <h2 className={`text-4xl md:text-5xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Overview</h2>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto" />
                        </div>

                        <p className={`text-xl leading-relaxed mb-6 font-light ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                            We are a digital technology company based in Temecula, California. We specialize in web technologies and platforms with an emphasis on strategy and measurement. <span className="text-cyan-400 font-semibold">Global Web Production</span> was founded by ex-Microsoft manager Byron Prather.
                        </p>
                        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Explore our vision, mission, and purpose below.
                        </p>
                    </motion.div>

                    {/* Cinematic Slider Integration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <CinematicSlider />
                    </motion.div>

                </div>
            </section>

            {/* Management Team Section - Vertical Timeline */}
            <section className={`py-24 px-6 md:px-12 relative overflow-hidden ${isDark ? 'bg-black' : ''}`}>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-24"
                    >
                        <h2 className={`text-4xl md:text-5xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Company Management</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
                    </motion.div>

                    <div className="relative">
                        {/* Central Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500/20 via-blue-500/50 to-cyan-500/20 hidden md:block" />

                        <div className="space-y-24">
                            {team.map((member, idx) => (
                                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 md:gap-0`}>

                                    {/* Content Side */}
                                    <motion.div
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className={`flex-1 w-full ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}
                                    >
                                        <div className={`inline-block max-w-lg ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                            <h3 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{member.name}</h3>
                                            <p className="text-cyan-400 font-bold mb-4 text-lg tracking-wide uppercase">{member.role}</p>
                                            <p className={`leading-relaxed text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {member.bio}
                                            </p>

                                            {/* Social Types */}
                                            <div className={`flex gap-4 mt-6 ${idx % 2 === 0 ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                                                <button className="p-3 rounded-full bg-white/5 hover:bg-cyan-500 text-white transition-all hover:scale-110 border border-white/10">
                                                    <Linkedin size={20} />
                                                </button>
                                                <button className="p-3 rounded-full bg-white/5 hover:bg-cyan-500 text-white transition-all hover:scale-110 border border-white/10">
                                                    <Mail size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Center Node (Mobile Hidden/Different) */}
                                    <div className="relative flex-shrink-0 z-10 hidden md:flex items-center justify-center w-12 h-12">
                                        <div className="w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
                                        <div className="absolute w-12 h-12 border border-cyan-500/30 rounded-full animate-pulse" />
                                    </div>

                                    {/* Image Side */}
                                    <motion.div
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50, scale: 0.9 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className="flex-1 w-full"
                                    >
                                        <div className={`relative max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>

                                            <motion.img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                initial={{ filter: "grayscale(100%)" }}
                                                whileInView={{ filter: "grayscale(0%)" }}
                                                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                                                transition={{ duration: 1 }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                            {/* Decorative Corner */}
                                            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-xl" />
                                            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-xl" />
                                        </div>
                                    </motion.div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Integration */}
            <Articles isDark={isDark} />
        </div>
    );
};

export default AboutPage;
