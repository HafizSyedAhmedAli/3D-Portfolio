import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, type ComponentProps } from "react";
import * as THREE from "three";
import { type GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Stoo1_Stoo1_0: THREE.Mesh;
    sit_sit_0: THREE.Mesh;
    pc_pc_0: THREE.Mesh;
  };
  materials: {
    Stoo1: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    material_2: THREE.MeshStandardMaterial;
  };
};

type Props = ComponentProps<"group"> & {
  /*
    Callback instead of a ref — parent passes its state setter here.
    When the mesh mounts, we call it with the real THREE.Mesh instance,
    which triggers a re-render in the parent so SelectiveBloom gets
    a non-null selection immediately.
  */
  onScreensMounted?: (mesh: THREE.Mesh) => void;
};

export function Room({ onScreensMounted, ...props }: Props) {
  const { nodes, materials } = useGLTF(
    "/models/gaming_setup-transformed.glb",
  ) as unknown as GLTFResult;

  const chairFrameMaterial = useMemo(() => {
    const mat = materials.Stoo1.clone();
    mat.roughness = 0.4;
    mat.metalness = 0.3;
    return mat;
  }, [materials.Stoo1]);

  const chairCushionMaterial = useMemo(() => {
    const mat = materials.material.clone();
    mat.roughness = 0.6;
    mat.metalness = 0.1;
    return mat;
  }, [materials.material]);

  const deskMaterial = useMemo(() => {
    const mat = materials.material_2.clone();
    mat.roughness = 0.3;
    mat.metalness = 0.4;
    return mat;
  }, [materials.material_2]);

  // pc_pc_0 is the screens mesh — notify parent once it exists
  const screensMesh = useMemo(
    () => new THREE.Mesh(nodes.pc_pc_0.geometry, deskMaterial),
    [nodes.pc_pc_0.geometry, deskMaterial],
  );

  useEffect(() => {
    if (onScreensMounted) onScreensMounted(screensMesh);
  }, [screensMesh, onScreensMounted]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stoo1_Stoo1_0.geometry}
        material={chairFrameMaterial}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sit_sit_0.geometry}
        material={chairCushionMaterial}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pc_pc_0.geometry}
        material={deskMaterial}
        scale={0.3}
      />
    </group>
  );
}

useGLTF.preload("/models/gaming_setup-transformed.glb");
