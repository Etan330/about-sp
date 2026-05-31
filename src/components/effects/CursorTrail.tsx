import { useEffect, useRef } from 'react';

const TRAIL_LENGTH = 12;
const START = -120;

type Point = {
  x: number;
  y: number;
};

type TrailDot = Point & {
  opacity: number;
};

export function CursorTrail() {
  const cursorRef = useRef<Point>({ x: START, y: START });
  const ringPos = useRef<Point>({ x: START, y: START });
  const dotEls = useRef<HTMLDivElement[]>([]);
  const dotState = useRef<TrailDot[]>([]);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useRef(false);
  const activity = useRef(0);
  const lastMoveAt = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!supportsFinePointer || prefersReducedMotion) return;

    const container = document.createElement('div');
    container.style.cssText =
      'position:fixed;inset:0;pointer-events:none;z-index:9998;contain:layout style paint';
    document.body.appendChild(container);

    const dots: HTMLDivElement[] = [];
    const state: TrailDot[] = [];
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const ratio = 1 - i / TRAIL_LENGTH;
      const dot = document.createElement('div');
      dot.style.cssText =
        [
          'position:fixed',
          'left:0',
          'top:0',
          `width:${5 + ratio * 3}px`,
          `height:${5 + ratio * 3}px`,
          'border-radius:50%',
          'background:radial-gradient(circle, rgba(241,234,216,0.96) 0%, rgba(199,255,82,0.88) 46%, rgba(255,184,77,0.22) 100%)',
          'box-shadow:0 0 14px rgba(199,255,82,0.22)',
          'mix-blend-mode:screen',
          'pointer-events:none',
          'z-index:9998',
          'opacity:0',
          'will-change:transform,opacity',
          'transform:translate3d(-120px,-120px,0) scale(0.5)',
        ].join(';');
      container.appendChild(dot);
      dots.push(dot);
      state.push({ x: START, y: START, opacity: 0 });
    }
    dotEls.current = dots;
    dotState.current = state;

    const ring = document.createElement('div');
    ring.style.cssText =
      [
        'position:fixed',
        'left:0',
        'top:0',
        'width:28px',
        'height:28px',
        'border-radius:50%',
        'border:1px solid rgba(199,255,82,0.38)',
        'box-shadow:0 0 22px rgba(199,255,82,0.12), inset 0 0 10px rgba(255,184,77,0.10)',
        'pointer-events:none',
        'z-index:9999',
        'opacity:0',
        'will-change:transform,opacity',
        'transform:translate3d(-120px,-120px,0)',
      ].join(';');
    container.appendChild(ring);
    ringRef.current = ring;

    const inner = document.createElement('div');
    inner.style.cssText =
      [
        'position:fixed',
        'left:0',
        'top:0',
        'width:7px',
        'height:7px',
        'border-radius:50%',
        'background:#f1ead8',
        'box-shadow:0 0 12px rgba(199,255,82,0.66), 0 0 24px rgba(255,184,77,0.22)',
        'pointer-events:none',
        'z-index:9999',
        'opacity:0',
        'will-change:transform,opacity',
        'transform:translate3d(-120px,-120px,0)',
      ].join(';');
    container.appendChild(inner);
    innerRef.current = inner;

    let idleTimer = 0;

    function applyDotStyle(i: number) {
      const s = dotState.current[i];
      const el = dotEls.current[i];
      const scale = 0.45 + s.opacity * 0.95;
      el.style.opacity = String(s.opacity);
      el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) translate3d(-50%, -50%, 0) scale(${scale})`;
    }

    const clearTrail = () => {
      activity.current = 0;
      for (let i = 0; i < TRAIL_LENGTH; i++) {
        dotState.current[i].opacity = 0;
        applyDotStyle(i);
      }
    };

    const updateCursor = (e: PointerEvent) => {
      isVisible.current = true;
      activity.current = 1;
      lastMoveAt.current = performance.now();
      cursorRef.current = { x: e.clientX, y: e.clientY };
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(clearTrail, 620);
    };

    const hideCursor = () => {
      isVisible.current = false;
      activity.current = 0;
      window.clearTimeout(idleTimer);
      clearTrail();
    };

    const animate = () => {
      const now = performance.now();
      const cx = cursorRef.current.x;
      const cy = cursorRef.current.y;
      const idleFor = now - lastMoveAt.current;
      const targetActivity = isVisible.current && idleFor < 90 ? 1 : 0;
      activity.current += (targetActivity - activity.current) * 0.14;
      if (idleFor > 620 || !isVisible.current) activity.current = 0;

      ringPos.current = {
        x: ringPos.current.x + (cx - ringPos.current.x) * 0.22,
        y: ringPos.current.y + (cy - ringPos.current.y) * 0.22,
      };

      if (ringRef.current) {
        const ringOpacity = isVisible.current ? 0.72 : 0;
        ringRef.current.style.opacity = String(ringOpacity);
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }
      if (innerRef.current) {
        innerRef.current.style.opacity = isVisible.current ? '0.9' : '0';
        innerRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate3d(-50%, -50%, 0)`;
      }

      let target = cursorRef.current;
      for (let i = 0; i < TRAIL_LENGTH; i++) {
        const s = dotState.current[i];
        const ratio = 1 - i / TRAIL_LENGTH;
        const follow = 0.34 - i * 0.012;
        s.x += (target.x - s.x) * follow;
        s.y += (target.y - s.y) * follow;
        s.opacity += (activity.current * ratio * 0.46 - s.opacity) * 0.18;
        if (idleFor > 620 || !isVisible.current) s.opacity = 0;
        if (s.opacity < 0.006) s.opacity = 0;
        applyDotStyle(i);
        target = s;
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener('pointermove', updateCursor, { passive: true });
    document.addEventListener('pointerleave', hideCursor);
    window.addEventListener('blur', hideCursor);

    return () => {
      window.removeEventListener('pointermove', updateCursor);
      document.removeEventListener('pointerleave', hideCursor);
      window.removeEventListener('blur', hideCursor);
      window.clearTimeout(idleTimer);
      cancelAnimationFrame(rafRef.current);
      container.remove();
    };
  }, []);

  return null;
}
