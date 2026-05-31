import { useMemo, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count: number;
}

function seededRandom(index: number) {
  const x = Math.sin(index * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export function ParticleField({ count }: ParticleFieldProps) {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (seededRandom(i3 + 1) - 0.5) * 20;
      pos[i3 + 1] = (seededRandom(i3 + 2) - 0.5) * 14;
      pos[i3 + 2] = (seededRandom(i3 + 3) - 0.5) * 6;
      const t = seededRandom(i3 + 4);
      col[i3] = 0.78 + 0.22 * t;
      col[i3 + 1] = 1 - 0.28 * t;
      col[i3 + 2] = 0.32 - 0.12 * t;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    groupRef.current.rotation.y += delta * 0.02;
    groupRef.current.position.x += (mx * 1.5 - groupRef.current.position.x) * 0.008;
    groupRef.current.position.y += (my * 1 - groupRef.current.position.y) * 0.008;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={count}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
