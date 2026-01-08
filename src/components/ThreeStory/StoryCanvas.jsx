import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import Stickman from './Stickman';
import StoryEnvironment from './StoryEnvironment';
import StoryOverlay from './StoryOverlay';

// Scene Components (Placeholders for now)
import ClientsScene from './scenes/ClientsScene';
import StatsScene from './scenes/StatsScene';
import CapabilitiesScene from './scenes/CapabilitiesScene';
import ServicesScene from './scenes/ServicesScene';
import InsightsScene from './scenes/InsightsScene';
import TrainingScene from './scenes/TrainingScene';

const StoryContent = () => {
    const scroll = useScroll();
    const stickmanRef = useRef();
    const cameraRef = useRef();

    // Total distance the stickman will travel
    const TOTAL_DISTANCE = 150;

    useFrame((state, delta) => {
        // Calculate current position on path based on scroll offset
        const currentPos = scroll.offset * TOTAL_DISTANCE;

        // Update Stickman position (he moves forward along -z axis or defined path)
        if (stickmanRef.current) {
            // Smooth movement interpolation could be added here
            stickmanRef.current.position.z = -currentPos;

            // Basic walking animation trigger based on scroll speed could go here
            // const scrollSpeed = scroll.delta;
        }

        // Camera Follow Logic within the scroll container
        if (cameraRef.current && stickmanRef.current) {
            // Camera trails behind and slightly above
            const targetCamPos = {
                x: stickmanRef.current.position.x,
                y: stickmanRef.current.position.y + 3,
                z: stickmanRef.current.position.z + 10
            };

            // Smooth dampening - lower value = smoother/slower follow
            cameraRef.current.position.lerp(targetCamPos, 0.05);
            cameraRef.current.lookAt(
                stickmanRef.current.position.x,
                stickmanRef.current.position.y + 1,
                stickmanRef.current.position.z - 5
            );
        }
    });

    return (
        <>
            <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 3, 10]} />

            {/* Invisible anchor for camera to follow (removed Stickman visual) */}
            <group ref={stickmanRef} />

            {/* Story Scenes positioned along the path - Shifted first scene for smoother entry */}
            {/* Scene 1: Clients - Starts at -15 (was -10) */}
            <group position={[0, 0, -15]}>
                <ClientsScene />
            </group>

            {/* Scene 2: Stats - Starts around -40 */}
            <group position={[0, 0, -40]}>
                <StatsScene />
            </group>

            {/* Scene 3: Capabilities - Starts around -65 */}
            <group position={[0, 0, -65]}>
                <CapabilitiesScene />
            </group>

            {/* Scene 4: Services - Starts around -90 */}
            <group position={[0, 0, -90]}>
                <ServicesScene />
            </group>

            {/* Scene 5: Insights - Starts around -115 */}
            <group position={[0, 0, -115]}>
                <InsightsScene />
            </group>

            {/* Scene 6: Training - Starts around -140 */}
            <group position={[0, 0, -140]}>
                <TrainingScene />
            </group>
        </>
    );
};

const StoryCanvas = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas shadows gl={{ antialias: true }} dpr={[1, 2]}>
                <color attach="background" args={['#000510']} />
                <fog attach="fog" args={['#000510', 5, 25]} />

                <StoryEnvironment />

                {/* ScrollControls with 8 pages represents the length of the journey */}
                <ScrollControls pages={8} damping={0.6}>
                    <Scroll html style={{ width: '100%', height: '100%' }}>
                        <StoryOverlay />
                    </Scroll>
                    <StoryContent />
                </ScrollControls>
            </Canvas>
        </div>
    );
};

export default StoryCanvas;
