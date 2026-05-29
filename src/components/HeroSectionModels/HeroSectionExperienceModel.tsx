"use client";

import Particles from "./Particles";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useMediaQuery } from "react-responsive";
import { Suspense, useState } from "react";
import * as THREE from "three";
import HeroSectionLights from "./HeroSectionLights";
import { Room } from "./Room";
import { CanvasLoader } from "../Models/TechLogos/TechIcon";

const HeroSectionExperienceModel = () => {
  const isMobile = useMediaQuery(
    { query: "(max-width: 768px)" },
    undefined,
    () => false,
  );

  const isTablet = useMediaQuery(
    { query: "(max-width: 1024px)" },
    undefined,
    () => false,
  );

  const skipBloom = isMobile || isTablet;

  /*
    useState instead of useRef — when Room mounts and calls setScreensMesh,
    React re-renders this component and SelectiveBloom receives the real mesh.
    useRef never triggers a re-render so SelectiveBloom always saw null.
  */
  const [screensMesh, setScreensMesh] = useState<THREE.Mesh | null>(null);

  return (
    <Canvas
      camera={{ position: [0, 2, 22], fov: 38 }}
      gl={{
        alpha: true,
        powerPreference: "high-performance",
        antialias: !isMobile,
      }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
    >
      {/*
        Only mount SelectiveBloom once screensMesh is non-null —
        if selection is null Three.js crashes reading .layers on it
      */}
      {!skipBloom && screensMesh && (
        <EffectComposer>
          <SelectiveBloom
            selection={[screensMesh]}
            intensity={0.6}
            luminanceThreshold={0.4}
            luminanceSmoothing={0.9}
            blendFunction={BlendFunction.ADD}
          />
        </EffectComposer>
      )}

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={22}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.2}
        target={[0, -2, 0]}
      />

      <HeroSectionLights />
      <Particles count={isMobile ? 0 : isTablet ? 30 : 60} />

      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-1, -3.5, 0]}
      >
        <planeGeometry args={[14, 15]} />
        <meshStandardMaterial color="#091520" />
      </mesh>

      <Suspense fallback={<CanvasLoader />}>
        <group scale={1.8} position={[1, -3.3, 0]} rotation={[0, Math.PI / 9, 0]}>
          {/* onMount fires once the mesh is in the scene — sets state, triggers re-render */}
          <Room onScreensMounted={setScreensMesh} />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroSectionExperienceModel;