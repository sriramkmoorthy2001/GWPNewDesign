import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Ladder7Logo() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // ================= SCENE =================
    const scene = new THREE.Scene();

    // ================= CAMERA =================
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(8, 6, 12);

    // ================= RENDERER =================
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // ✅ allow transparent background
    });

    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // ================= CONTROLS =================
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false; // Disable zoom to better fit in a UI section

    // ================= SHAPE 1 POINTS =================
    const A = new THREE.Vector2(1.0, 5.0);
    const A1 = new THREE.Vector2(2.0, 5.0);
    const D1 = new THREE.Vector2(1.22, 1.0);
    const C1 = new THREE.Vector2(3.5, 1.0);
    const C = new THREE.Vector2(4.0, 0.0);
    const D = new THREE.Vector2(0.0, 0.0);

    // ================= SHAPE 2 POINTS =================
    const E = new THREE.Vector2(2.0, 5.0);
    const F = new THREE.Vector2(6.0, 5.0);
    const G = new THREE.Vector2(5.0, 0.0);

    const E1 = new THREE.Vector2(2.5, 4.0);
    const F1 = new THREE.Vector2(4.78, 4.0);
    const G1 = new THREE.Vector2(4.0, 0.0);

    // ================= SHAPE 1 =================
    const shape1 = new THREE.Shape();
    shape1.moveTo(A.x, A.y);
    shape1.lineTo(A1.x, A1.y);
    shape1.lineTo(D1.x, D1.y);
    shape1.lineTo(C1.x, C1.y);
    shape1.lineTo(C.x, C.y);
    shape1.lineTo(D.x, D.y);
    shape1.closePath();

    const geometry1 = new THREE.ExtrudeGeometry(shape1, {
      depth: 0.6,
      bevelEnabled: false,
    });
    geometry1.center();

    // ================= SHAPE 2 =================
    const shape2 = new THREE.Shape();
    shape2.moveTo(E.x, E.y);
    shape2.lineTo(F.x, F.y);
    shape2.lineTo(G.x, G.y);
    shape2.lineTo(G1.x, G1.y);
    shape2.lineTo(F1.x, F1.y);
    shape2.lineTo(E1.x, E1.y);
    shape2.closePath();

    const geometry2 = new THREE.ExtrudeGeometry(shape2, {
      depth: 0.6,
      bevelEnabled: false,
    });
    geometry2.center();

    // ================= GRADIENT =================
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

    // ================= MESHES =================
    const mesh1 = new THREE.Mesh(geometry1, gradientMaterial);
    const mesh2 = new THREE.Mesh(geometry2, gradientMaterial);

    mesh1.position.x = -3.0; // Offset to shift pivot to the right
    mesh2.position.x = -1.0; // Offset to shift pivot to the right

    const combinedGroup = new THREE.Group();
    combinedGroup.add(mesh1);
    combinedGroup.add(mesh2);
    scene.add(combinedGroup);

    // ================= ANIMATION =================
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      combinedGroup.rotation.y += 0.003;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // ================= RESIZE =================
    const onResize = () => {
      if (!mountRef.current) return;

      const { clientWidth, clientHeight } = mountRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener("resize", onResize);

    // ================= CLEANUP =================
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry1.dispose();
      geometry2.dispose();
      gradientMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[400px] md:h-[500px]" />;
}
