
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Tunnel = () => {
  const tunnelRef = useRef(null);

  useFrame((state, delta) => {
    if (tunnelRef.current) {
      // Rotation for dynamic effect
      tunnelRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group ref={tunnelRef} position={[0, 0, -100]}>
      {/* Long Wireframe Cylinder */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[4, 4, 100, 16, 32, true]} />
        <meshBasicMaterial 
          color="#00aaff"  // Cyan Wireframe
          wireframe 
          side={THREE.DoubleSide} 
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Floating Particles inside tunnel */}
       <points rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[2, 2, 100, 16, 32]} />
          <pointsMaterial color="#ffffff" size={0.05} />
       </points>
    </group>
  );
};

export default Tunnel;
