import { useEffect, useRef } from 'react';

type Point = {
  x: number;
  y: number;
  strength: number;
};

export function PointerAura() {
  const auraRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!supportsFinePointer || prefersReducedMotion) return;

    const current: Point = { x: window.innerWidth / 2, y: window.innerHeight / 2, strength: 0 };
    const target: Point = { ...current };
    let lastMoveAt = 0;
    let rafId = 0;

    const move = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      target.strength = 1;
      lastMoveAt = performance.now();
    };

    const animate = () => {
      const idleFor = performance.now() - lastMoveAt;
      if (idleFor > 120) target.strength = 0.28;
      if (idleFor > 1800) target.strength = 0;

      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      current.strength += (target.strength - current.strength) * 0.08;

      const aura = auraRef.current;
      if (aura) {
        const soft = Math.max(0, current.strength * 0.055);
        aura.style.setProperty('--aura-x', `${current.x}px`);
        aura.style.setProperty('--aura-y', `${current.y}px`);
        aura.style.setProperty('--aura-main', String(soft));
        aura.style.setProperty('--aura-soft', String(soft * 0.42));
        aura.style.setProperty('--grid-shift-x', `${current.x * 0.018}px`);
        aura.style.setProperty('--grid-shift-y', `${current.y * 0.018}px`);
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', move, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={auraRef} className="pointer-aura" aria-hidden="true" />;
}
