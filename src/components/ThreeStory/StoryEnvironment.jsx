import React, { useRef } from 'react';
import { Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const StoryEnvironment = () => {
    const gridRef = useRef();

    useFrame((state) => {
        if (gridRef.current) {
            // Move grid to simulate speed/infinite scrolling
            gridRef.current.position.z = (state.clock.getElapsedTime() * 10) % 10;
        }
    });

    return (
        <>
            {/* Dynamic Lighting */}
            <ambientLight intensity={0.2} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
            />
            {/* Fog for depth and focusing attention */}
            <fog attach="fog" args={['#000510', 5, 40]} />

            {/* Background */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Moving Grid Effect for "Exciting" Speed */}
            <group ref={gridRef}>
                <gridHelper
                    args={[100, 50, 0x4ecdc4, 0x111111]}
                    position={[0, -1, -50]}
                />
                <gridHelper
                    args={[100, 50, 0x4ecdc4, 0x111111]}
                    position={[0, -1, 50]}
                />
            </group>

            {/* Ground Plane */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
                <planeGeometry args={[100, 500]} />
                <meshStandardMaterial
                    color="#000510"
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>
        </>
    );
};

export default StoryEnvironment;
