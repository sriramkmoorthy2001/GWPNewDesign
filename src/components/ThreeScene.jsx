import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function ThreeScene({isDark}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(8, 6, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // === CONTROL RESTRICTIONS (YOUR REQUIREMENT) ===
    // Disable scroll zooming
    controls.enableZoom = false;
    // Prevent vertical panning in screen space (prefer XZ plane movement)
    controls.screenSpacePanning = false;
    // Limit distance so user can't zoom in/out (optional)
    controls.minDistance = 16;
    controls.maxDistance = 16;

    // Keep the controls' target Y fixed and preserve camera vertical offset
    const fixedTargetY = 0;
    controls.target.y = fixedTargetY;
    const initialOffsetY = camera.position.y - controls.target.y;

    const constrainY = () => {
      // Keep target Y fixed
      controls.target.y = fixedTargetY;

      // Reapply camera vertical offset so Y doesn't change when dragging
      const offset = camera.position.clone().sub(controls.target);
      offset.y = initialOffsetY;
      camera.position.copy(controls.target).add(offset);
      camera.lookAt(controls.target);
    };

    // Run once to ensure initial state
    constrainY();
    controls.addEventListener("change", constrainY);

    // === Your existing 3D shape generation ===
    const A = new THREE.Vector2(1.0, 5.0);
    const A1 = new THREE.Vector2(2.0, 5.0);
    const D1 = new THREE.Vector2(1.22, 1.0);
    const C1 = new THREE.Vector2(3.5, 1.0);
    const C = new THREE.Vector2(4.0, 0.0);
    const D = new THREE.Vector2(0.0, 0.0);

    const shape1 = new THREE.Shape();
    shape1.moveTo(A.x, A.y);
    shape1.lineTo(A1.x, A1.y);
    shape1.lineTo(D1.x, D1.y);
    shape1.lineTo(C1.x, C1.y);
    shape1.lineTo(C.x, C.y);
    shape1.lineTo(D.x, D.y);
    shape1.closePath();

    const geometry1 = new THREE.ExtrudeGeometry(shape1, { depth: 0.6, bevelEnabled: false });
    geometry1.center();

    // === SHAPE 2 (restored) ===
    const E = new THREE.Vector2(2.0, 5.0);
    const F = new THREE.Vector2(6.0, 5.0);
    const G = new THREE.Vector2(5.0, 0.0);

    const E1 = new THREE.Vector2(2.5, 4.0);
    const F1 = new THREE.Vector2(4.78, 4.0);
    const G1 = new THREE.Vector2(4.0, 0.0);

    const shape2 = new THREE.Shape();
    shape2.moveTo(E.x, E.y);
    shape2.lineTo(F.x, F.y);
    shape2.lineTo(G.x, G.y);
    shape2.lineTo(G1.x, G1.y);
    shape2.lineTo(F1.x, F1.y);
    shape2.lineTo(E1.x, E1.y);
    shape2.closePath();

    const geometry2 = new THREE.ExtrudeGeometry(shape2, { depth: 0.6, bevelEnabled: false });
    geometry2.center();

    // === GRADIENT MATERIAL (restored) ===
    geometry1.computeBoundingBox();
    const minY = geometry1.boundingBox.min.y;
    const maxY = geometry1.boundingBox.max.y;
    const height = maxY - minY;

    const gradientMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    gradientMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.minY = { value: minY };
      shader.uniforms.height = { value: height };

      shader.vertexShader = shader.vertexShader.replace(
        "void main() {",
        `
        varying float vY;
        void main() {
          vY = position.y;
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `
        uniform float minY;
        uniform float height;
        varying float vY;
        void main() {
      `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <dithering_fragment>",
        `
        float grad = clamp((vY - minY) / height, 0.0, 1.0);
        grad = smoothstep(0.0, 1.0, grad);
        grad = pow(grad, 0.65);

        vec3 colorTop = vec3(0.627, 0.0, 1.0);
        vec3 colorMid = vec3(0.0, 0.18, 0.85);
        vec3 colorBot = vec3(0.0, 0.788, 0.717);

        vec3 midMix = mix(colorBot, colorMid, grad * 1.5);
        vec3 finalColor = mix(midMix, colorTop, grad);

        gl_FragColor = vec4(finalColor, 1.0);

        #include <dithering_fragment>
        `
      );
    };

    const mesh1 = new THREE.Mesh(geometry1, gradientMaterial);
    const mesh2 = new THREE.Mesh(geometry2, gradientMaterial);

    mesh1.position.x = 1.5;
    mesh2.position.x = 3.5;

    const group = new THREE.Group();
    group.add(mesh1);
    group.add(mesh2);
    scene.add(group);

    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.y += 0.009;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const { clientWidth, clientHeight } = mountRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      controls.removeEventListener("change", constrainY);
      controls.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
