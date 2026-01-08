import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sun, Moon } from "lucide-react";

import GlobeScene from "./GlobeScene";
import GlobeSceneLight from "./GlobeSceneLight";
import CinematicOverlay from "./overlays/CinematicOverlay";
import CinematicOverlayLight from "./overlays/CinematicOverlayLight";
import Scene2Overlay from "./overlays/Scene2Overlay";
import Scene3Overlay from "./overlays/Scene3Overlay";
import Scene4CTA from "./overlays/Scene4CTA";

import { useScrollProgress } from "../../hooks/useScrollProgress";

const HeroShowcase = () => {
  const [isDark, setIsDark] = useState(true);
  const scroll = useScrollProgress();

  return (
    <>
      {/* ================= FIXED CINEMATIC LAYER ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* THEME TOGGLE */}
        <button
          onClick={() => setIsDark((v) => !v)}
          className={`fixed top-6 right-6 z-50 p-3 rounded-full pointer-events-auto ${
            isDark ? "bg-white/10 text-white" : "bg-blue-600 text-white"
          }`}
        >
          {isDark ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* 3D CANVAS */}
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            {isDark ? (
              <GlobeScene scroll={scroll} />
            ) : (
              <GlobeSceneLight scroll={scroll} />
            )}
          </Suspense>
        </Canvas>

        {/* HTML OVERLAYS */}
        {isDark && <Scene2Overlay scroll={scroll} />}
        {isDark && <Scene3Overlay scroll={scroll} />}
        {isDark && <Scene4CTA scroll={scroll} />}

        {isDark ? (
          <CinematicOverlay scroll={scroll} />
        ) : (
          <CinematicOverlayLight scroll={scroll} />
        )}
      </div>

      {/* ================= SCROLL TRACK (INVISIBLE) ================= */}
      <div className="relative w-full h-[300vh]" />

      {/* ================= NEXT SECTION (BLENDED) ================= */}
      <section className="relative min-h-screen bg-black text-white z-10">
        <div className="container mx-auto px-16 py-40">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Our Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            We design and engineer digital ecosystems that help businesses stand
            out, scale globally, and perform with confidence.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroShowcase;
