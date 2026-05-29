"use client";

import { TechStackIcon } from "@/types";
import { Float, OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Component, useEffect, Suspense, useMemo } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";

type TechStack = {
  model: TechStackIcon;
};

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, info: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ModelErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.props.onError?.(error, info);
    if (process.env.NODE_ENV !== "production") {
      console.error(
        "[ModelErrorBoundary] Failed to load 3-D model:",
        error,
        info,
      );
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback ?? <ModelFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

const ModelFallback = ({ error }: { error: Error | null }) => {
  const isDev = process.env.NODE_ENV !== "production";
  return (
    <group>
      {isDev && error && (
        <Html center>
          <div className="bg-red-950/80 border border-red-500 text-red-200 text-xs p-2 rounded max-w-xs text-center backdrop-blur-sm pointer-events-none select-none">
            <p className="font-semibold">Failed to load asset</p>
          </div>
        </Html>
      )}
    </group>
  );
};

export const CanvasLoader = () => (
  <Html center>
    <div className="flex flex-col items-center justify-center gap-3 select-none pointer-events-none w-32">
      <div className="w-6 h-6 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
      <p className="text-[10px] text-white/40 font-mono tracking-widest uppercase">
        Loading
      </p>
    </div>
  </Html>
);

const Model = ({ model }: TechStack) => {
  const { scene } = useGLTF(model.modelPath);
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    if (model.name !== "Interactive Developer") return;
    const newMaterials: THREE.MeshStandardMaterial[] = [];
    clonedScene.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.isMesh && child.name === "Object_5") {
        if (mesh.material instanceof THREE.Material) mesh.material.dispose();
        else if (Array.isArray(mesh.material))
          mesh.material.forEach((m) => m.dispose());
        const mat = new THREE.MeshStandardMaterial({ color: "white" });
        mesh.material = mat;
        newMaterials.push(mat);
      }
    });
    return () => {
      newMaterials.forEach((m) => m.dispose());
    };
  }, [clonedScene, model.name]);

  return (
    <Float speed={5.5} rotationIntensity={0.5}>
      <group scale={model.scale} rotation={model.rotation}>
        <primitive object={clonedScene} />
      </group>
    </Float>
  );
};

const TechIcon = ({ model }: TechStack) => {
  const isMobile = useMediaQuery(
    { query: "(max-width: 768px)" },
    undefined,
    () => false,
  );

  return (
    <Canvas
      /*
        Mobile: no antialias (expensive), DPR capped at device ratio max 2.
        Same pattern as the hero — sharp but not burning GPU memory at 3x.
        Desktop: antialias on, DPR up to 2.
      */
      gl={{
        antialias: !isMobile,
        powerPreference: "high-performance",
      }}
      dpr={[1, 2]}
    >
      {/*
        No Environment / HDR texture — replaced with manual lights.
        Each Environment was loading a full HDR map per canvas instance,
        which was the single biggest memory cost across 5 canvases.
      */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight
        position={[-4, -2, -3]}
        intensity={0.5}
        color="#4a90d9"
      />
      <pointLight
        position={[0, 4, 3]}
        intensity={0.8}
        color="#34d399"
        distance={10}
      />

      <OrbitControls enableZoom={false} />

      <ModelErrorBoundary
        onError={(err) => console.error("Model load error:", err)}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Model model={model} />
        </Suspense>
      </ModelErrorBoundary>
    </Canvas>
  );
};

export default TechIcon;
export { ModelErrorBoundary };
export type { ErrorBoundaryProps };
