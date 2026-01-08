import React, { useState, useRef, useEffect } from 'react';
import { Text, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const InsightCard = ({ position, title, isPicked }) => {
    const meshRef = useRef();
    const [targetPos, setTargetPos] = useState(new THREE.Vector3(...position));

    useEffect(() => {
        if (isPicked) {
            // Move to "reading" position (up/center), then "stream" position (down)
            // Simplified animation logic:
            // This would ideally be a complex timeline, here we just float it up significantly
            // In a real app, we'd use react-spring or GSAP for the timeline sequence
        }
    }, [isPicked]);

    useFrame((state) => {
        if (isPicked && meshRef.current) {
            // Animate: Lift up "to read", then drop down
            const time = state.clock.elapsedTime;
            // Simple visual hack: Oscillation that looks like "being held"
            meshRef.current.rotation.x = Math.sin(time) * 0.1;
            meshRef.current.position.y = Math.sin(time * 2) * 0.2 + 2; // Lifted up
        }
    });

    return (
        <Float speed={isPicked ? 0 : 1.5} rotationIntensity={0.3} floatIntensity={0.5} position={isPicked ? [0, 0, 0] : position}>
            <group ref={meshRef}>
                {/* Card Background - Glassy Look */}
                <mesh>
                    <boxGeometry args={[3, 4, 0.1]} />
                    <meshPhysicalMaterial
                        color={isPicked ? "#ffffff" : "#f0f0f0"}
                        roughness={0.1}
                        metalness={0.1}
                        transmission={0.1}
                        transparent
                        opacity={0.9}
                    />
                </mesh>

                {/* Title Text */}
                <Text
                    position={[0, 1.5, 0.1]}
                    fontSize={0.25}
                    color="black"
                    anchorX="center"
                    maxWidth={2.5}
                >
                    {title}
                </Text>

                {/* Fake 'Image' area */}
                <mesh position={[0, -0.5, 0.1]}>
                    <planeGeometry args={[2.5, 2.5]} />
                    <meshStandardMaterial color={isPicked ? "#4ecdc4" : "#222"} />
                </mesh>
            </group>
        </Float>
    );
};

const InsightsScene = () => {
    // Simulate "picking" the middle card
    const [pickedIndex, setPickedIndex] = useState(-1);

    useEffect(() => {
        // Pick card after delay
        const timer = setTimeout(() => {
            setPickedIndex(1);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <group>
            <Text
                position={[0, 5, 0]}
                fontSize={0.8}
                color="#ffffff"
                outlineWidth={0.02}
                outlineColor="#000"
            >
                HOW WE THINK
            </Text>

            <InsightCard position={[-4, 0, 0]} title="Web3 Futures" isPicked={false} />
            <InsightCard position={[0, 1, -2]} title="AI Ethics" isPicked={pickedIndex === 1} />
            <InsightCard position={[4, 0, 0]} title="Node Scaling" isPicked={false} />

            {/* Knowledge Stream */}
            {Array.from({ length: 30 }).map((_, i) => (
                <mesh key={i} position={[
                    (Math.random() - 0.5) * 15,
                    -4,
                    (Math.random() - 0.5) * 5
                ]}>
                    <sphereGeometry args={[0.05]} />
                    <meshBasicMaterial color="#4ecdc4" transparent opacity={Math.random() * 0.8} />
                </mesh>
            ))}
        </group>
    );
};

export default InsightsScene;
