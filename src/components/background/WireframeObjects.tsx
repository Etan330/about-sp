import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WireframeObjectsProps {
  showAll: boolean;
}

function RotatingTorus() {
  const ref = useRef<THREE.Mesh>(null);
  const elapsedRef = useRef(0);
  useFrame((_, delta) => {
    if (!ref.current) return;
    elapsedRef.current += delta;
    const elapsed = elapsedRef.current;
    ref.current.rotation.x = Math.sin(elapsed * 0.38) * 0.5 + elapsed * 0.08;
    ref.current.rotation.y = Math.cos(elapsed * 0.21) * 0.28;
    ref.current.position.y = 1 + Math.sin(elapsed * 0.31) * 0.28;
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
  const elapsedRef = useRef(0);
  useFrame((_, delta) => {
    if (ref.current) {
      elapsedRef.current += delta;
      const elapsed = elapsedRef.current;
      ref.current.rotation.x = Math.sin(elapsed * 0.27 + 0.6) * 0.72;
      ref.current.rotation.y = elapsed * 0.12 + Math.cos(elapsed * 0.39) * 0.4;
      ref.current.position.x = -3.5 + Math.cos(elapsed * 0.19) * 0.34;
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
  const elapsedRef = useRef(0);
  useFrame((_, delta) => {
    if (ref.current) {
      elapsedRef.current += delta;
      const elapsed = elapsedRef.current;
      ref.current.rotation.y = Math.sin(elapsed * 0.33) * 0.66;
      ref.current.rotation.z = elapsed * 0.1 + Math.cos(elapsed * 0.24) * 0.4;
      ref.current.position.y = -2 + Math.sin(elapsed * 0.23 + 2.2) * 0.2;
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
