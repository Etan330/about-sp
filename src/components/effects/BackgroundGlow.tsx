import { useEffect, useRef } from 'react';

export function BackgroundGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const posRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.setProperty('--mx', `${posRef.current.x * 100}%`);
            ref.current.style.setProperty('--my', `${posRef.current.y * 100}%`);
          }
          frameRef.current = 0;
        });
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0"
      style={{
        zIndex: 0,
        background:
          'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(199,255,82,0.06) 0%, rgba(255,184,77,0.04) 30%, transparent 55%)',
        transition: 'opacity 0.6s',
      }}
    />
  );
}
