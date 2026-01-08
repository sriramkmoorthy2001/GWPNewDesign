import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Sphere } from '@react-three/drei';

const Student = ({ position }) => {
    // Smaller, simpler stick figure "Learner"
    return (
        <group position={position}>
            {/* Body */}
            <mesh position={[0, 0.4, 0]}>
                <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
                <meshStandardMaterial color="#888" roughness={0.5} />
            </mesh>
            {/* Head - White for focus */}
            <mesh position={[0, 0.8, 0]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#fff" />
            </mesh>
            {/* Desk/Seat */}
            <mesh position={[0, 0.2, 0.2]}>
                <boxGeometry args={[0.5, 0.05, 0.3]} />
                <meshStandardMaterial color="#333" />
            </mesh>
        </group>
    );
};

const ProgressScreen = ({ position, step }) => {
    return (
        <Float speed={0.5} rotationIntensity={0.05} floatIntensity={0.2} position={position}>
            <group>
                {/* Screen */}
                <mesh>
                    <planeGeometry args={[1.5, 1]} />
                    <meshStandardMaterial color="#000" emissive="#4ecdc4" emissiveIntensity={0.1} side={2} />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1.55, 1.05, 0.02]} />
                    <meshBasicMaterial color="#4ecdc4" wireframe />
                </mesh>

                {/* Progress Bar Visual */}
                <mesh position={[0, 0, 0.01]}>
                    <planeGeometry args={[1.2, 0.1]} />
                    <meshBasicMaterial color="#333" />
                </mesh>
                <mesh position={[-0.6 + (0.3 * step), 0, 0.02]}>
                    <planeGeometry args={[0.6 * step, 0.1]} />
                    <meshBasicMaterial color="#4ecdc4" />
                </mesh>

                <Text position={[0, 0.3, 0.02]} fontSize={0.15} color="#fff">
                    MODULE {step}
                </Text>
            </group>
        </Float>
    );
}

const TrainingScene = () => {
    return (
        <group>
            <Text
                position={[0, 5, 0]}
                fontSize={0.8}
                color="#ffffff"
                outlineWidth={0.02}
                outlineColor="#000"
            >
                HOW WE GROW TALENT
            </Text>

            {/* Rows of 'Students' */}
            <group position={[0, 0, 2]}>
                <Student position={[-3, 0, 0]} />
                <Student position={[-1, 0, 0]} />
                <Student position={[1, 0, 0]} />
                <Student position={[3, 0, 0]} />
            </group>

            {/* Floating Educational Screens - Holographic */}
            <ProgressScreen position={[-3, 2, -2]} step={1} />
            <ProgressScreen position={[3, 2, -2]} step={2} />

            {/* Main Screen */}
            <mesh position={[0, 2, -4]}>
                <planeGeometry args={[4, 2.5]} />
                <meshStandardMaterial color="#000" emissive="#4ecdc4" emissiveIntensity={0.05} />
            </mesh>
            <Text position={[0, 2, -3.9]} fontSize={0.2} color="#4ecdc4">
                FUTURE LEADERS ACADEMY
            </Text>
        </group>
    );
};

export default TrainingScene;
