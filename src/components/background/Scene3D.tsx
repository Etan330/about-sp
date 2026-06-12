import { Canvas } from '@react-three/fiber';
import { FluidVeil } from './FluidVeil';
import { ParticleField } from './ParticleField';
import { WireframeObjects } from './WireframeObjects';

export function Scene3D() {
  const isMobile = window.innerWidth < 768;

  return (
    <div
      className="fixed inset-0"
      style={{ zIndex: 1, pointerEvents: 'none', mixBlendMode: 'screen' }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: false, alpha: true, preserveDrawingBuffer: true }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        performance={{ min: 0.3 }}
      >
        <ambientLight intensity={0.22} />
        <pointLight position={[5, 5, 5]} intensity={0.34} color="#c7ff52" />
        <pointLight position={[-5, -3, 2]} intensity={0.24} color="#ffb84d" />
        <FluidVeil compact={isMobile} />
        <ParticleField count={isMobile ? 60 : 160} />
        <WireframeObjects showAll={!isMobile} />
      </Canvas>
    </div>
  );
}
