import React, { useRef } from 'react';
import { Float, Text, MeshTransmissionMaterial, Image } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ClientLogo = ({ position, text }) => {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
            <mesh>
                <boxGeometry args={[3, 1.5, 0.2]} />
                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    thickness={0.5}
                    chromaticAberration={0.3}
                    anisotropy={0.1}
                    distortion={0.1}
                    distortionScale={0.1}
                    temporalDistortion={0.1}
                    color="#ffffff"
                    resolution={128} // Optimized resolution
                />
            </mesh>
            <Text
                position={[0, 0, 0.15]}
                fontSize={0.4}
                color="white"
                anchorX="center"
                anchorY="middle"
            >
                {text}
            </Text>
        </Float>
    );
};

const ClientsScene = () => {
    const mapRef = useRef();

    useFrame((state) => {
        if (mapRef.current) {
            // Subtle rotation for the map
            mapRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
        }
    });

    return (
        <group>
            {/* World Map Background ("Glowing World Map") */}
            <mesh ref={mapRef} position={[0, 2, -5]} scale={[1.5, 1.5, 1]}>
                <planeGeometry args={[16, 9]} />
                <meshBasicMaterial
                    color="#004488"
                    transparent
                    opacity={0.3}
                    map={null} // In a real app, load a world map texture here
                    wireframe // Wireframe look for "tech" feel if no texture
                />
            </mesh>

            {/* Title for Clarity */}
            <Text
                position={[0, 5, 0]}
                fontSize={0.8}
                color="#4ecdc4"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#000"
            >
                WHO TRUSTS US
            </Text>

            {/* Orbiting Client Cards */}
            <group position={[0, 0, 0]}>
                <ClientLogo position={[-4, 1, 0]} text="TechCorp" />
                <ClientLogo position={[4, 2, -1]} text="InnovateX" />
                <ClientLogo position={[-3, -1, 1]} text="FutureSystems" />
                <ClientLogo position={[3, -2, 0]} text="GlobalData" />
                <ClientLogo position={[0, 2.5, -2]} text="AlphaNet" />
            </group>
        </group>
    );
};

export default ClientsScene;
