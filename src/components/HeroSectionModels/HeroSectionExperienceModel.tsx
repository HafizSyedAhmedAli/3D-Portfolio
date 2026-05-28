"use client";

import Particles from "./Particles";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import * as THREE from "three";
import HeroSectionLights from "./HeroSectionLights";
import { Room } from "./Room";

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

  return (
    <Canvas
      camera={{ position: [0, 2, 22], fov: 38 }}
      gl={{ alpha: true }} // ✅ transparent so div bg shows through
      style={{ width: "100%", height: "100%" }} // ✅ fill the div fully
    >
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={0.6}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={22}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.2}
        // minAzimuthAngle={-Math.PI / 8}
        // maxAzimuthAngle={Math.PI / 8}
        target={[0, -2, 0]} // ✅ aim lower so model fills frame
      />

      <HeroSectionLights />
      <Particles count={60} />

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[-1, -3.5, 0]}>
        <planeGeometry args={isMobile ? [24, 15] : [14, 15]} />
        <meshStandardMaterial color="#091520" />
      </mesh>

      <group
        scale={1.8} // ✅ slightly larger (1.6→1.8)
        position={[1, -3.3, 0]} // ✅ higher up (-5 → -3.5) so legs aren't cut off
        rotation={[0, Math.PI / 9, 0]}
      >
        <Room screensRef={screensRef} />
      </group>
    </Canvas>
  );
};

export default HeroSectionExperienceModel;
