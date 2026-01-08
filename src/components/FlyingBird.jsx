import { useRef, useEffect, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FlyingBird = ({ scrollOffset = 0 }) => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF("/flying_synthwave_bird/scene.gltf");
  const { actions } = useAnimations(animations, birdRef);

  // Intro Constants
  const INTRO_POS = { x: -8.1, y: 0.0, z: 0.7 };
  const INTRO_ROT_Y = Math.PI * 1.5; // 270 degrees
  const INTRO_SCALE = 3.5;

  // Play flying animation
  useEffect(() => {
    if (actions) {
      Object.keys(actions).forEach(key => actions[key].play());
    }
  }, [actions]);





    // Cache materials to avoid traversing the scene every frame
    const birdMaterials = useMemo(() => {
      const materials = [];
      if (scene) {
        scene.traverse((child) => {
          if (child.isMesh) {
            // Apply material once
            child.material = new THREE.MeshBasicMaterial({
              color: "#0EA5E9",
              wireframe: true,
              transparent: true,
              opacity: 1,
            });
            materials.push(child.material);
          }
        });
      }
      return materials;
    }, [scene]);

    useFrame((state) => {
    if (!birdRef.current) return;

    // --- INTRO ANIMATION (Time-based) ---
    // Match text: delay ~0.5s, duration ~1s -> finishes around 1.5s
    const time = state.clock.elapsedTime;
    const introDelay = 0.5;
    const introDuration = 1.0;
    
    // 0 to 1 value for intro progress
    let introProgress = THREE.MathUtils.smoothstep(time, introDelay, introDelay + introDuration);
    
    // Intro visuals
    const introOpacity = introProgress; 
    const introYOffset = THREE.MathUtils.lerp(-2.0, 0, introProgress); // Start 2 units lower

    // --- SCROLL ANIMATION (Scroll-based) ---
    const fadeStart = 0.0;
    const fadeEnd = 0.4; // Extended to allow full flight
    const scrollStartFade = 0.25; // Start fading as it leaves screen
    const scrollEndFade = 0.35;   // Fully gone by 0.35

    // Re-use objects if possible, but for simple vectors standard JS GC is usually fine if not creating thousands.
    // However, defining them here is fine.
    
    // Use local variables for target calculation
    let tx = INTRO_POS.x, ty = INTRO_POS.y, tz = INTRO_POS.z;
    let targetScale = INTRO_SCALE;
    let targetRotY = INTRO_ROT_Y;
    let targetRotZ = 0;
    let scrollOpacity = 1;

    if (scrollOffset > 0 && scrollOffset <= fadeEnd) {
      const progress = (scrollOffset - fadeStart) / (fadeEnd - fadeStart);
      const swoopProgress = progress; 
      
      const curveX = THREE.MathUtils.lerp(0, Math.sin(swoopProgress * Math.PI) * 7, swoopProgress); 
      const curveY = THREE.MathUtils.lerp(0, Math.cos(swoopProgress * Math.PI * 0.5) * 1, swoopProgress);
      const curveZ = THREE.MathUtils.lerp(0, 4.5, swoopProgress); 

      tx = INTRO_POS.x + curveX;
      ty = INTRO_POS.y + curveY;
      tz = INTRO_POS.z + curveZ;
      
      targetScale = INTRO_SCALE + progress * 2.0;
      targetRotY = THREE.MathUtils.lerp(INTRO_ROT_Y, Math.PI / 2 + Math.sin(swoopProgress * Math.PI) * 2.0, swoopProgress);
      targetRotZ = THREE.MathUtils.lerp(0, Math.sin(swoopProgress * Math.PI) * 1.5, swoopProgress);
      
      scrollOpacity = 1.0 - THREE.MathUtils.smoothstep(scrollOffset, scrollStartFade, scrollEndFade);
    } else if (scrollOffset > fadeEnd) {
      scrollOpacity = 0;
    }

    // --- COMBINE ANIMATIONS ---
    // Apply intro offset to the calculated Y position
    ty += introYOffset;

    // Use the lower of the two opacities (so it fades in at start, and fades out at scroll)
    const finalOpacity = introOpacity * scrollOpacity;

    // Apply values
    birdRef.current.position.set(tx, ty, tz);
    birdRef.current.scale.setScalar(targetScale);
    birdRef.current.rotation.y = targetRotY;
    birdRef.current.rotation.z = targetRotZ;

    // Apply opacity efficiently
    birdMaterials.forEach(mat => {
      mat.opacity = finalOpacity;
      // We don't toggle visible on mesh here, just opacity. 
      // Material opacity 0 is effectively invisible but still drawn. 
      // Optimally we'd toggle mesh.visible but then we'd need to store meshes not materials.
      // For a single bird, 0 opacity is fine.
    });
    
    // If fully invisible, we can hide the whole group
    birdRef.current.visible = finalOpacity > 0.001;
  });

  return (
    <group ref={birdRef}>
       <primitive object={scene} />
    </group>
  );
};

useGLTF.preload("/flying_synthwave_bird/scene.gltf");

export default FlyingBird;
