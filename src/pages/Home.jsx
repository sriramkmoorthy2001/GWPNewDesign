import React from "react";
import CinematicOverlay from "../components/CinematicOverlay";
import CinematicOverlayLight from "../components/CinematicOverlayLight";
import Intro from "../components/Intro";
import Solutions from "../components/Solutions";
import Services from "../components/Services";
import Articles from "../components/Articles";
import Partner from "../components/Partner";
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import GlobeScene from "../components/GlobeScene";
import GlobeSceneLight from "../components/GlobeSceneLight";

const Home = ({ isDark, setIsDark }) => {

    return (
        <div className="relative w-full">

            {/* SCROLLABLE CONTENT (High Z-Index) */}
            <div className="relative z-10 w-full">
                {/* HERO SECTION */}
                <div className="relative min-h-screen">
                    {/* Hero Background Globe - Scoped */}
                    <div className="absolute inset-0 z-0">
                        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="w-full h-full">
                            <Suspense fallback={null}>
                                {isDark ? <GlobeScene /> : <GlobeSceneLight />}
                            </Suspense>
                        </Canvas>
                    </div>
                    {/* Hero Content Overlay */}
                    <div className="relative z-10 pointer-events-none">
                        {isDark ? <CinematicOverlay /> : <CinematicOverlayLight />}
                    </div>

                    {/* Gradient Fade to Content */}
                    <div className={`absolute bottom-0 w-full h-24 z-20 pointer-events-none bg-gradient-to-t ${isDark ? 'from-black via-black/50 to-transparent' : 'from-sky-75 via-sky-75/50 to-transparent'}`} />
                </div>

                {/* PAGE CONTENT */}
                <Intro isDark={isDark} />
                <Solutions isDark={isDark} />
                <Services isDark={isDark} />
                <Articles isDark={isDark} />
                <Partner isDark={isDark} />
            </div>
        </div>
    );
};

export default Home;
