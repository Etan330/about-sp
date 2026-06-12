import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FluidVeilProps {
  compact: boolean;
}

const fluidVertexShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uLayer;

  varying vec2 vUv;
  varying float vWave;
  varying float vRim;

  void main() {
    vUv = uv;

    vec3 pos = position;
    float time = uTime + uLayer * 7.13;
    float broad = sin(pos.x * 1.18 + time * 0.62);
    float cross = sin((pos.x + pos.y) * 1.42 - time * 0.74);
    float curl = cos(pos.y * 2.18 + sin(time * 0.41) * 1.8);
    float thread = sin((pos.x * pos.x * 0.08 + pos.y * 1.25) - time * 1.08);
    float wave = broad * 0.44 + cross * 0.3 + curl * 0.2 + thread * 0.18;

    vec2 normalized = vec2(pos.x / 7.6, pos.y / 4.2);
    float pointerPull = exp(-distance(normalized, uPointer * vec2(0.72, 0.52)) * 3.2);

    pos.z += wave * 0.58 + pointerPull * 0.7;
    pos.x += sin(pos.y * 0.82 + time * 0.48) * 0.18 + pointerPull * uPointer.x * 0.36;
    pos.y += cos(pos.x * 0.7 - time * 0.55) * 0.16 + pointerPull * uPointer.y * 0.24;

    vWave = wave + pointerPull;
    vRim = 1.0 - smoothstep(0.16, 0.5, distance(uv, vec2(0.5)));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fluidFragmentShader = `
  uniform vec3 uTintA;
  uniform vec3 uTintB;
  uniform vec3 uTintC;
  uniform float uAlpha;

  varying vec2 vUv;
  varying float vWave;
  varying float vRim;

  void main() {
    float edgeX = smoothstep(0.0, 0.16, vUv.x) * smoothstep(1.0, 0.84, vUv.x);
    float edgeY = smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.88, vUv.y);
    float contour = smoothstep(0.35, 0.92, abs(sin((vUv.x + vWave * 0.08) * 18.0)));
    float lift = smoothstep(-0.42, 1.12, vWave);

    vec3 color = mix(uTintA, uTintB, lift);
    color = mix(color, uTintC, contour * 0.28 + vRim * 0.16);

    float alpha = edgeX * edgeY * (0.11 + lift * 0.18 + contour * 0.05) * uAlpha;
    gl_FragColor = vec4(color, alpha);
  }
`;

const layerSettings = [
  {
    alpha: 0.78,
    layer: 0,
    position: [0.2, 1.1, -5.2] as [number, number, number],
    rotation: [-0.34, 0.18, -0.14] as [number, number, number],
    scale: [1.05, 0.82, 1] as [number, number, number],
  },
  {
    alpha: 0.46,
    layer: 1,
    position: [-1.8, -1.0, -5.7] as [number, number, number],
    rotation: [0.18, -0.32, 0.2] as [number, number, number],
    scale: [0.88, 0.68, 1] as [number, number, number],
  },
];

export function FluidVeil({ compact }: FluidVeilProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pointerRef = useRef(new THREE.Vector2(0, 0));
  const easedPointerRef = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      pointerRef.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      );
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const uniforms = useMemo(
    () =>
      layerSettings.map((setting) => ({
        uAlpha: { value: compact ? setting.alpha * 0.68 : setting.alpha },
        uLayer: { value: setting.layer },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uTime: { value: 0 },
        uTintA: { value: new THREE.Color('#c7ff52') },
        uTintB: { value: new THREE.Color('#ffb84d') },
        uTintC: { value: new THREE.Color('#ff6b35') },
      })),
    [compact],
  );

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    easedPointerRef.current.lerp(pointerRef.current, 0.035);

    uniforms.forEach((uniformSet, index) => {
      uniformSet.uTime.value = elapsed;
      uniformSet.uPointer.value.copy(easedPointerRef.current);
      uniformSet.uAlpha.value = compact
        ? layerSettings[index].alpha * 0.68
        : layerSettings[index].alpha;
    });

    if (!groupRef.current) return;
    groupRef.current.rotation.z = Math.sin(elapsed * 0.17) * 0.075;
    groupRef.current.rotation.x = Math.sin(elapsed * 0.13 + 1.4) * 0.035;
    groupRef.current.position.x = Math.sin(elapsed * 0.21) * 0.22;
    groupRef.current.position.y = Math.cos(elapsed * 0.16) * 0.16;
  });

  return (
    <group ref={groupRef}>
      {layerSettings.map((setting, index) => (
        <mesh
          key={setting.layer}
          position={setting.position}
          rotation={setting.rotation}
          scale={setting.scale}
        >
          <planeGeometry args={[compact ? 8.2 : 12.5, compact ? 4.8 : 7.2, 92, 56]} />
          <shaderMaterial
            uniforms={uniforms[index]}
            vertexShader={fluidVertexShader}
            fragmentShader={fluidFragmentShader}
            transparent
            depthWrite={false}
            depthTest={false}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}
