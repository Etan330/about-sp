import { useEffect, useRef, type MouseEvent, type RefObject } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowOpacity?: number;
  tiltIntensity?: number;
}

export function TiltCard({
  children,
  className = '',
  glowOpacity = 0.1,
  tiltIntensity = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const boundsRef = useRef<DOMRect | null>(null);
  const tiltRef = useRef({ x: 0, y: 0 });

  const applyTilt = () => {
    if (!ref.current) return;
    const { x, y } = tiltRef.current;
    ref.current.style.transform = `perspective(800px) rotateY(${x * tiltIntensity}deg) rotateX(${-y * (tiltIntensity * 0.6)}deg)`;
    ref.current.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
    ref.current.style.setProperty('--my', `${(y + 0.5) * 100}%`);
    frameRef.current = 0;
  };

  const handleMouseEnter = () => {
    boundsRef.current = ref.current?.getBoundingClientRect() ?? null;
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = boundsRef.current ?? ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltRef.current = { x, y };
    if (!frameRef.current) frameRef.current = requestAnimationFrame(applyTilt);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    boundsRef.current = null;
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    }
    ref.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
  };

  useEffect(() => () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <motion.div
      ref={ref as RefObject<HTMLDivElement>}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group overflow-hidden ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Moving glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(199,255,82,${glowOpacity}), transparent 55%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
