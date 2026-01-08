import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, useScroll, Scroll, Stars } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

import AnimatedButton from "../ui/AnimatedButton";
import FeatureSection from "../ui/FeatureSection";
import GWPLogo from "../ui/GWPLogo"; 
import SceneContent from "../SceneContent"; 
import Tunnel from "../Tunnel";
import IndustryArticles from "../ui/IndustryArticles";

// Camera Controller for the About Page Tunnel Effect
const AboutCameraController = () => {
  const scroll = useScroll();
  const { camera } = useThree();
  
  useFrame((state, delta) => {
    if (!scroll) return;

    const offset = scroll.offset || 0; // 0 to 1
    const p = new THREE.Vector3(0, 0, 15); // Start Position

    // Move deep into the tunnel as user scrolls
    // Tunnel cylinder is centered at -100, length 100. Extends from -50 to -150.
    // Start at -60 (inside tunnel), end at -130 (near end)
    p.z = THREE.MathUtils.lerp(-60, -130, offset);

    // Add some subtle wobble for realism
    p.x = Math.sin(offset * 5) * 1.5;
    p.y = Math.cos(offset * 5) * 1.5;

    const lookAtTarget = new THREE.Vector3(0, 0, p.z - 20);

    // Smooth camera update
    camera.position.lerp(p, delta * 2);
    camera.lookAt(lookAtTarget);
  });
  return null;
}

const About = () => {
    return (
        <div className="h-screen w-full bg-black relative">
            <Canvas gl={{ preserveDrawingBuffer: true }}>
                <color attach="background" args={['#050510']} />
                
                {/* Adjust pages based on content length. */}
                <ScrollControls pages={8} damping={0.2}>
                    <AboutCameraController />
                    
                    {/* Scene Elements */}
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={2} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Tunnel />

                    <Scroll html style={{ width: '100%', height: '100%' }}>
                        <div className="w-full text-white pt-24 pb-20 pointer-events-none">
                            
                            {/* Header Section */}
                            <motion.section 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ amount: 0.5 }}
                                className="flex flex-col items-center justify-center text-center px-6 py-20 max-w-4xl mx-auto pointer-events-auto"
                            >
                                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-8">
                                    ABOUT US
                                </h1>
                                
                                <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                                    <p>
                                        We are a digital technology company based in Temecula, California. We specialize in web technologies and platforms with an emphasis on strategy and measurement. Global Web Production was founded by ex-Microsoft manager Byron Prather.
                                    </p>
                                    <p>
                                        Click the tabs below for more information on our vision, mission and purpose. Contact us to discuss your digital technology needs.
                                    </p>
                                </div>

                                <div className="flex gap-4 mt-8 justify-center">
                                    {["Vision", "Mission", "Purpose"].map((tab) => (
                                        <button key={tab} className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 text-sm font-semibold transition-colors">
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </motion.section>

                            {/* Our Mission */}
                            <div className="pointer-events-auto">
                                <FeatureSection 
                                    title="Our Mission"
                                    description={
                                        <>
                                            <p className="mb-4">
                                                Our mission is to be the strategic partner of choice for businesses seeking to unlock their full digital potential. We provide tailor-made solutions that transcend conventional boundaries, helping our clients succeed in a fast-evolving digital landscape.
                                            </p>
                                            <p>
                                                We empower our clients with tools & expertise to achieve their objectives, drive sustainable growth, and make a positive global impact.
                                            </p>
                                        </>
                                    }
                                    image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                    reversed={false}
                                    onContact={() => window.location.href = "/contact"}
                                    onLearnMore={() => {}}
                                />
                            </div>

                            {/* COMPANY MANAGEMENT Section */}
                            <section className="py-20 pointer-events-auto">
                                <motion.div 
                                    className="text-center mb-12"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ amount: 0.5 }}
                                >
                                     <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">COMPANY MANAGEMENT</h2>
                                </motion.div>
                                <FeatureSection 
                                    title="Byron Prather"
                                    description={
                                        <div className="space-y-4">
                                            <p className="text-cyan-400 font-bold text-xl uppercase tracking-widest">CEO & Founder</p>
                                            <p>
                                                Byron Prather has more than 20 years of experience as a Microsoft senior manager, programming digital experiences and supervising teams responsible for web development, search engine optimization and experimentation.
                                            </p>
                                            <p>
                                                At Microsoft, he played a pivotal role shaping the company’s digital offerings, driving innovation and creating user experiences that resonated with millions of site visitors worldwide. His pursuit of excellence and dedication to strategic thinking have been instrumental in the success of Microsoft’s digital ventures.
                                            </p>
                                            <p>
                                                Byron strives to empower businesses of all sizes with the same success for which he was responsible during his years at Microsoft.
                                            </p>
                                        </div>
                                    }
                                    image="/ByronPrather900.webp"
                                    reversed={true}
                                    onContact={() => window.location.href = "/contact"} 
                                    onLearnMore={() => {}}
                                />

                                 <FeatureSection 
                                    title="Rajalekshmi Santha"
                                    description={
                                        <div className="space-y-4">
                                            <p className="text-cyan-400 font-bold text-xl uppercase tracking-widest">Chief Technology Officer</p>
                                            <p>
                                                Rajalekshmi Santha is a distinguished IT leader with a career spanning over 17 years. Her extensive experience and leadership qualities make her an invaluable addition to the Global Web Production team. Known for her ability to drive innovation and foster a culture of critical thinking, Rajalekshmi’s leadership is grounded in thoughtfulness and a deep understanding of complex business processes.
                                            </p>
                                            <p>
                                                Rajalekshmi excels in designing and delivering customized products for clients, showcasing her prowess in stakeholder coordination and Salesforce management. Her dedication to continuous improvement and her passion for innovation are evident in her work. She is a problem solver at heart, and her ability to collaborate with various stakeholders to co-create innovative solutions sets her apart.
                                            </p>
                                        </div>
                                    }
                                    image="/Lekshmi_900.webp"
                                    reversed={false}
                                    onContact={() => window.location.href = "/contact"} 
                                    onLearnMore={() => {}}
                                />

                                 <FeatureSection 
                                    title="Marty Kneeland"
                                    description={
                                        <div className="space-y-4">
                                            <p className="text-cyan-400 font-bold text-xl uppercase tracking-widest">Sr. Director of Enterprise Business Development</p>
                                            <p>
                                                Marty Kneeland is a relationship-driven business development leader with more than twenty years of experience delivering enterprise web and marketing programs for Microsoft and other global brands. He began his career as a technical program manager supporting large-scale product and web launches, then expanded into consulting, where he led global site operations, localization, and data-driven marketing initiatives across dozens of international markets.
                                            </p>
                                            <p>
                                                At Global Web Production, Marty helps enterprise teams move faster and execute with precision. He builds trusted partnerships, connects business objectives to technical delivery, and focuses on measurable outcomes. His background spans go-to-market strategy, marketing automation, and content operations at global scale.
                                            </p>
                                            <p>
                                                Marty brings an entrepreneurial mindset to every engagement. He listens first, solves with clarity, and works across stakeholders to turn complex needs into programs that ship on time and perform.
                                            </p>
                                        </div>
                                    }
                                    image="/Marty_Kneeland.jpg"
                                    reversed={true}
                                    onContact={() => window.location.href = "/contact"} 
                                    onLearnMore={() => {}}
                                />
                            </section>

                            {/* INDUSTRY ARTICLES Section */}
                            <motion.div 
                                className="pointer-events-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ amount: 0.3 }}
                            >
                                <IndustryArticles />
                            </motion.div>

                            {/* CTA at Bottom */}
                            <motion.section 
                                className="py-20 flex flex-col items-center justify-center text-center px-6 pointer-events-auto"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ amount: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold text-white mb-8">Ready to start your journey?</h2>
                                    <AnimatedButton 
                                        className="text-lg px-10 py-3"
                                        onClick={() => window.location.href = "/"}
                                    >
                                        Back to Home
                                    </AnimatedButton>
                            </motion.section>
                        </div>
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    );
};

export default About;
