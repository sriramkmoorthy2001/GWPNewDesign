
import { Float, Text } from "@react-three/drei";

const ServiceItem = ({ position, title, subtitle, color }) => {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} position={position}>
      {/* Service Title */}
      <Text
        fontSize={1.5}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="black"
      >
        {title}
      </Text>
      
      {/* Subtitle / Description */}
      <Text
        fontSize={0.6}
        color="white"
        anchorX="center"
        anchorY="top"
        position={[0, -1.2, 0]}
        maxWidth={5}
        textAlign="center"
      >
        {subtitle}
      </Text>
      
      {/* Abstract Icon/Shape behind */}
      <mesh position={[0, 0, -2]} scale={[0.5, 0.5, 0.5]}>
        <torusGeometry args={[3, 0.2, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} wireframe />
      </mesh>
    </Float>
  );
};

const Services = () => {
  return (
    <group>
      {/* Service 1: At the start of the tunnel */}
      <ServiceItem 
        position={[0, 0, -60]} 
        title="WEB DEVELOPMENT" 
        subtitle="High-performance applications built for scale."
        color="#00aaff"
      />

      {/* Service 2: Mid-tunnel */}
      <ServiceItem 
        position={[-3, 2, -90]} 
        title="3D EXPERIENCES" 
        subtitle="Immersive WebGL journeys that captivate audiences."
        color="#ff00ff"
      />

      {/* Service 3: Deep tunnel */}
      <ServiceItem 
        position={[3, -2, -120]} 
        title="CLOUD ARCHITECTURE" 
        subtitle="Robust backend systems powering global data."
        color="#00ff88"
      />
    </group>
  );
};

export default Services;
