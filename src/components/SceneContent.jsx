import { Stars, useScroll } from "@react-three/drei";
import Globe from "./Globe";
import Model from "./Model";
import FlyingBird from "./FlyingBird";

const SceneContent = () => {
  const scroll = useScroll();
  const scrollOffset = scroll?.offset || 0;

  return (
    <>
      {/* 0. FLYING SYNTHWAVE BIRD - First Animation */}
      <FlyingBird scrollOffset={scrollOffset} />
      
      {/* 1. ACTUAL GLOBE COMPONENT - Only visible after bird phase */}
      {scrollOffset > 0.25 && <Globe />}

      {/* Cinematic Lighting - Synchronized with user GlobeScene */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0EA5E9" />

      {/* Cinematic Starfield */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      <directionalLight position={[10, 10, 5]} intensity={1} />
    </>
  );
};

export default SceneContent;

