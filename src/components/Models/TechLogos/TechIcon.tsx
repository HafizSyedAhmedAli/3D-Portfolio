"use client";

import { TechStackIcon } from "@/types";
import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
  Html,
} from "@react-three/drei"; // Added Html
import { Canvas } from "@react-three/fiber";
import { Component, useEffect, Suspense, useMemo } from "react";
import type { ErrorInfo, ReactNode } from "react";
import * as THREE from "three";

// ─── Types ────────────────────────────────────────────────────────────────────

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

// ─── ModelFallback ────────────────────────────────────────────────────────────
// Rendered when the model completely fails to load. Displays a neutral
// 3D wireframe block instead of disappearing into a void.

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

// ─── CanvasLoader ─────────────────────────────────────────────────────────────
// Rendered during the initial download phase. Uses Drei's <Html> wrapper
// to render a clean CSS/Tailwind spinner directly centered inside the WebGL viewport.

export const CanvasLoader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-3 select-none pointer-events-none w-32">
        {/* Tailwind spinning loader circle */}
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-[10px] text-white/40 font-mono tracking-widest uppercase">
          Loading
        </p>
      </div>
    </Html>
  );
};

// ─── Model ────────────────────────────────────────────────────────────────────

const Model = ({ model }: TechStack) => {
  const { scene } = useGLTF(model.modelPath);
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    if (model.name !== "Interactive Developer") return;

    const newMaterials: THREE.MeshStandardMaterial[] = [];

    clonedScene.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.isMesh && child.name === "Object_5") {
        if (mesh.material instanceof THREE.Material) {
          mesh.material.dispose();
        } else if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose());
        }

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

// ─── TechIcon ─────────────────────────────────────────────────────────────────

const TechIcon = ({ model }: TechStack) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset="city" />
      <OrbitControls enableZoom={false} />

      <ModelErrorBoundary
        onError={(err) => {
          console.error("Model load error:", err);
        }}
      >
        {/* Swapped null for our clean CanvasLoader component */}
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
