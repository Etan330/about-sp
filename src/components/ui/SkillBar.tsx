import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { SkillItem } from '../../types';

interface SkillBarProps {
  item: SkillItem;
  index: number;
}

export function SkillBar({ item, index }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-30px' });
  const { t } = useLanguage();

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-sm text-cyber-dim transition-colors group-hover:text-cyber-text">
          {t(item.name)}
        </span>
        <motion.span
          className="text-xs font-mono text-cyber-dim shrink-0 ml-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 1 }}
        >
          {item.percentage}%
        </motion.span>
      </div>
      <div className="h-2 overflow-hidden rounded-full border border-cyber-border/60 bg-cyber-bg/70">
        <motion.div
          className="relative h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${item.color}, color-mix(in srgb, ${item.color} 62%, #f1ead8))`,
            boxShadow: `0 0 18px color-mix(in srgb, ${item.color} 34%, transparent)`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${item.percentage}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </div>
  );
}
