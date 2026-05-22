"use client"; 

import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, Suspense, useMemo } from 'react'; 
import * as THREE from 'three';

type TechStack = {
   model: {
      name: string;
      modelPath: string;
      scale: number;
      rotation: readonly [number, number, number];
   };
};

// INNER COMPONENT: Handles everything inside the 3D WebGL context
const Model = ({ model }: TechStack) => {
   const { scene } = useGLTF(model.modelPath);

   // Clone the scene so your material mutations don't permanently alter the globally cached original
   const clonedScene = useMemo(() => scene.clone(), [scene]);

   useEffect(() => {
      if (model.name === 'Interactive Developer') {
         clonedScene.traverse((child) => {
            const mesh = child as THREE.Mesh;
            if (mesh.isMesh && child.name === 'Object_5') {
               mesh.material = new THREE.MeshStandardMaterial({
                  color: 'white',
               });
            }
         });
      }
   }, [clonedScene, model.name]);

   return (
      <Float speed={5.5} rotationIntensity={0.5}>
         <group scale={model.scale} rotation={model.rotation}>
            <primitive object={clonedScene} />
         </group>
      </Float>
   );
};

// OUTER COMPONENT: Handles the standard DOM and sets up the Canvas
const TechIcon = ({ model }: TechStack) => {
   return (
      <Canvas>
         <ambientLight intensity={0.3} />
         <directionalLight position={[5, 5, 5]} intensity={1} />

         <Environment preset="city" />

         <OrbitControls enableZoom={false} />

         {/* 4. Suspense catches the loading state of useGLTF */}
         <Suspense fallback={null}>
            <Model model={model} />
         </Suspense>
      </Canvas>
   );
};

export default TechIcon;