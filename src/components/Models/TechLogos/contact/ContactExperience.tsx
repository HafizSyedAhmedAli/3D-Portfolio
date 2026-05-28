"use client";

import {
  OrbitControls,
  Torus,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useEffect } from "react";
import * as THREE from "three";
import { CanvasLoader } from "../TechIcon";

/* ── patch releasePointerCapture to silence three-stdlib bug ── */
const usePatchPointerCapture = () => {
  useEffect(() => {
    const original = Element.prototype.releasePointerCapture;
    Element.prototype.releasePointerCapture = function (pointerId: number) {
      try {
        original.call(this, pointerId);
      } catch {
        // three-stdlib OrbitControls calls this with an already-released
        // pointer ID when the mouse leaves the canvas — safe to ignore
      }
    };
    return () => {
      Element.prototype.releasePointerCapture = original;
    };
  }, []);
};

/* ── rest of your components unchanged ── */

const PulsingRing = ({
  radius,
  tube,
  color,
  speed,
  tiltX = 0,
  tiltZ = 0,
}: {
  radius: number;
  tube: number;
  color: string;
  speed: number;
  tiltX?: number;
  tiltZ?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * speed;
    const s = 1 + Math.sin(clock.getElapsedTime() * 0.8) * 0.04;
    ref.current.scale.setScalar(s);
  });
  return (
    <Torus
      ref={ref}
      args={[radius, tube, 24, 100]}
      rotation={[tiltX, 0, tiltZ]}
    >
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.25}
      />
    </Torus>
  );
};

const CoreSphere = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.18;
    ref.current.rotation.x = clock.getElapsedTime() * 0.07;
  });
  return (
    <Sphere ref={ref} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#10b981"
        emissive="#059669"
        emissiveIntensity={0.4}
        distort={0.35}
        speed={2.5}
        roughness={0.1}
        metalness={0.6}
      />
    </Sphere>
  );
};

const WireframeSphere = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = -clock.getElapsedTime() * 0.09;
    ref.current.rotation.z = clock.getElapsedTime() * 0.04;
  });
  return (
    <Sphere ref={ref} args={[1.65, 18, 18]}>
      <meshStandardMaterial
        color="#34d399"
        wireframe
        transparent
        opacity={0.12}
      />
    </Sphere>
  );
};

const OrbitingDots = ({ count = 80 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.06;
    ref.current.rotation.x = clock.getElapsedTime() * 0.03;
  });

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    const r = 2.4 + Math.random() * 0.6;
    positions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
    positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#86efc7"
        size={0.04}
        transparent
        opacity={0.9}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => (
  <>
    <ambientLight intensity={0.3} />
    <pointLight position={[4, 4, 4]} intensity={30} color="#34d399" />
    <pointLight position={[-4, -2, -4]} intensity={15} color="#0d9488" />
    <pointLight position={[0, 6, 0]} intensity={10} color="#fff" />

    <CoreSphere />
    <WireframeSphere />
    <OrbitingDots count={80} />

    <PulsingRing
      radius={2.2}
      tube={0.008}
      color="#34d399"
      speed={0.25}
      tiltX={Math.PI / 3}
    />
    <PulsingRing
      radius={2.5}
      tube={0.006}
      color="#10b981"
      speed={-0.18}
      tiltZ={Math.PI / 5}
    />
    <PulsingRing
      radius={2.8}
      tube={0.005}
      color="#86efc7"
      speed={0.12}
      tiltX={Math.PI / 7}
      tiltZ={Math.PI / 4}
    />

    <OrbitControls
      enableZoom={false}
      enablePan={false}
      autoRotate
      autoRotateSpeed={0.6}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={(2 * Math.PI) / 3}
    />
  </>
);

const ContactExperience = () => {
  usePatchPointerCapture();

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <Suspense fallback={<CanvasLoader />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
