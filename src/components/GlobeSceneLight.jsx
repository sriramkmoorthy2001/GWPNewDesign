import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
    const globeRef = useRef();

    useFrame(() => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.002;
        }
    });

    return (
        <group>
            {/* Wireframe Globe – resized to match dark theme */}
            <Sphere ref={globeRef} args={[2.3, 32, 32]}>
                <meshBasicMaterial
                    color="#06B6D4"
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </Sphere>

            {/* Location Markers */}
            {[
                [1.2, 2.8, 1.2],
                [-2.5, 1.8, -1.5],
                [2.8, -0.8, 2.2],
            ].map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshBasicMaterial color="#06B6D4" />
                </mesh>
            ))}
        </group>
    );
};

const GlobeSceneLight = () => {
    return (
        <>
            <color attach="background" args={['#E8F6FF']} />
            <ambientLight intensity={1.2} />

            <Globe />

            {/* Atmosphere/Shade around the globe */}
            <Sphere args={[2.6, 64, 64]}> {/* Slightly larger than main globe (2.3) */}
                <meshBasicMaterial
                    color="#0EA5E9"
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                />
            </Sphere>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
                autoRotate
                autoRotateSpeed={0.2}
            />
        </>
    );
};

export default GlobeSceneLight;
