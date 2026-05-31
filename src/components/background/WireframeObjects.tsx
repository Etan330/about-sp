import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WireframeObjectsProps {
  showAll: boolean;
}

function RotatingTorus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.x += delta * 0.3;
  });
  return (
    <mesh ref={ref} position={[3, 1, -4]}>
      <torusGeometry args={[2.5, 0.03, 16, 100]} />
      <meshBasicMaterial color="#c7ff52" transparent opacity={0.12} />
    </mesh>
  );
}

function RotatingIcosahedron() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.4;
    }
  });
  return (
    <mesh ref={ref} position={[-3.5, -1, -3]}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshBasicMaterial
        color="#ffb84d"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
}

function RotatingDodecahedron() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.35;
      ref.current.rotation.z += delta * 0.25;
    }
  });
  return (
    <mesh ref={ref} position={[1, -2, -2]}>
      <dodecahedronGeometry args={[1.2, 0]} />
      <meshBasicMaterial color="#ff6b35" transparent opacity={0.08} wireframe />
    </mesh>
  );
}

export function WireframeObjects({ showAll }: WireframeObjectsProps) {
  return (
    <>
      <RotatingTorus />
      {showAll && (
        <>
          <RotatingIcosahedron />
          <RotatingDodecahedron />
        </>
      )}
    </>
  );
}
