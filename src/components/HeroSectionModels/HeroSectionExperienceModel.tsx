"use client";

import Particles from "./Particles";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useMediaQuery } from "react-responsive";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import HeroSectionLights from "./HeroSectionLights";
import { Room } from "./Room";
import { CanvasLoader } from "../Models/TechLogos/TechIcon";

const HeroSectionExperienceModel = () => {
  const screensRef = useRef<THREE.Mesh>(null!);

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

  return (
    <Canvas
      camera={{ position: [0, 2, 22], fov: 38 }}
      gl={{
        alpha: true,
        powerPreference: "high-performance",
        antialias: !isMobile,
      }}
      dpr={isMobile ? 1 : isTablet ? 1 : [1, 2]}
      style={{ width: "100%", height: "100%" }}
    >
      {!skipBloom && (
        <EffectComposer>
          <SelectiveBloom
            selection={screensRef}
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

      {/*
        Suspense belongs HERE — inside the Canvas context.
        useGLTF in Room throws a promise while the GLB downloads.
        Catching it here with CanvasLoader (which uses R3F Html)
        keeps the Canvas mounted and shows a spinner inside it
        instead of killing the whole Canvas from outside.
      */}
      <Suspense fallback={<CanvasLoader />}>
        <group scale={1.8} position={[1, -3.3, 0]} rotation={[0, Math.PI / 9, 0]}>
          <Room screensRef={screensRef} />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroSectionExperienceModel;