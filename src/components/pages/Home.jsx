import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, PerspectiveCamera, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { motion } from 'framer-motion';
import FlyingBird from '../FlyingBird';
import Globe from '../Globe';
import Loader from '../ui/Loader';
import * as THREE from 'three';

const SceneContent = () => {
  const scroll = useScroll();
  const { camera } = useThree();
  const birdGroupRef = useRef();
  const globeGroupRef = useRef();

  useFrame((state) => {
    const offset = scroll.offset;
    
    // CAMERA: Smooth transition from intro to globe
    camera.position.x = THREE.MathUtils.lerp(5, 0, offset);
    camera.position.y = THREE.MathUtils.lerp(3, 0, offset);
    camera.position.z = THREE.MathUtils.lerp(5, 12, offset);
    camera.lookAt(0, -0.5, -1);
    
    if (birdGroupRef.current) {
        // Move bird RIGHT faster to exit before globe
        // offset * 3 means it reaches 20 by offset ~0.33
        birdGroupRef.current.position.x = THREE.MathUtils.lerp(0, 25, offset * 3);
        birdGroupRef.current.visible = offset < 0.4;
    }

    if (globeGroupRef.current) {
        // Start globe entry earlier for smoother approach
        const globeFade = THREE.MathUtils.smoothstep(offset, 0.25, 0.75);
        // Move globe from further LEFT (x: -25) to center (x: 0)
        globeGroupRef.current.position.x = THREE.MathUtils.lerp(-25, 0, globeFade);
        globeGroupRef.current.position.y = 0; 
        globeGroupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.8, 1, globeFade));
        globeGroupRef.current.visible = offset > 0.2;
    }
  });

  return (
    <>

      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0EA5E9" />
      
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <group ref={birdGroupRef}>
          <FlyingBird scrollOffset={scroll.offset * 0.4} />
      </group>

      <group ref={globeGroupRef} position={[0, -10, 0]}>
          <Globe />
      </group>

      <directionalLight position={[5, 5, 5]} intensity={1} />
    </>
  );
};

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-[#050510] overflow-hidden">
      <Loader />
      <div className="absolute inset-0 z-0">
        <Canvas gl={{ antialias: true }}>
          <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
          
          <Suspense fallback={null}>
            <ScrollControls pages={3} damping={0.2}>
              <SceneContent />
              
              <Scroll html style={{ width: '100%' }}>
                {/* SECTION 1: BIRD INTRO */}
                <section className="h-screen flex flex-col items-center justify-center px-4 text-center relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    <h1 
                      style={{ fontFamily: "'Antonio', sans-serif" }}
                      className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-white mb-6 tracking-tighter uppercase leading-[0.85]"
                    >
                      Experience <br/> The Globe
                    </h1>
                    <p className="max-w-2xl text-xs md:text-sm text-white/70 font-medium tracking-[0.3em] uppercase">
                      We design experiences that move people and transform spaces
                    </p>
                  </motion.div>
                  
                  {/* Scroll Down Indicator */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                  >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white"></div>
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase">
                      Scroll Down
                    </span>
                  </motion.div>
                </section>

                {/* SECTION 2: THE GLOBE */}
                <section className="h-screen flex flex-col items-center justify-center px-4 text-center">
                  <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">
                      GLOBAL REACH
                    </span>
                  </h2>
                  <p className="max-w-2xl text-lg text-white/70 mb-10 text-balance">
                    Connecting ideas across the digital landscape with high-performance solutions.
                  </p>
                  <div className="flex gap-4">
                    <button className="px-8 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-400 transition-shadow hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                      Learn More
                    </button>
                  </div>
                </section>

                {/* SECTION 3: CALL TO ACTION */}
                <section className="h-screen flex flex-col items-center justify-center px-4 text-center">
                   <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">READY TO BUILD?</h2>
                   <div className="flex flex-col sm:flex-row gap-6">
                      <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-sky-100 transition-transform hover:scale-105">
                        Get Started
                      </button>
                      <button className="px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                        View Portfolio
                      </button>
                   </div>
                </section>
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};







export default Home;
