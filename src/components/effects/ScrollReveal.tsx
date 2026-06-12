import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const directionOffset = {
  up: { y: 60, x: 0, rotate: -1.4 },
  down: { y: -60, x: 0, rotate: 1.4 },
  left: { y: 0, x: -60, rotate: 1.8 },
  right: { y: 0, x: 60, rotate: -1.8 },
};

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
}: ScrollRevealProps) {
  const offset = directionOffset[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.965,
        rotate: offset.rotate,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1, x: 0, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
