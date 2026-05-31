import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { WorkExperience } from '../../types';

interface TimelineItemProps {
  entry: WorkExperience;
  index: number;
}

export function TimelineItem({ entry, index }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });
  const isLeft = index % 2 === 0;
  const { t } = useLanguage();

  return (
    <div
      ref={ref}
      className={`relative mb-12 flex items-stretch gap-6 pl-10 md:pl-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:flex-row`}
    >
      {/* Content card */}
      <motion.div
        className={`glass relative flex-1 overflow-hidden rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-cyan/35 ${
          isLeft ? 'md:text-right' : 'md:text-left'
        } text-left`}
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -40 : 40 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-transparent" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-cyan">{t(entry.period)}</span>
        <h3 className="mt-3 font-display text-3xl leading-none text-cyber-text">
          {t(entry.role)}
        </h3>
        <p className="mt-2 text-sm font-medium text-cyber-purple">
          {t(entry.company)}
        </p>
        <ul className={`mt-3 space-y-1.5 ${isLeft ? 'md:ml-auto md:mr-0' : ''} ml-0`}>
          {t(entry.description).map((desc, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm leading-6 text-cyber-dim"
            >
              <span className="text-cyber-cyan mt-1.5 w-1 h-1 rounded-full shrink-0 bg-cyber-cyan" />
              {desc}
            </li>
          ))}
        </ul>
        <div
          className={`flex gap-2 mt-4 flex-wrap ${
            isLeft ? 'md:justify-end' : 'md:justify-start'
          }`}
        >
          {t(entry.technologies).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyber-cyan/20 bg-cyber-cyan/10 px-2.5 py-1 text-xs text-cyber-cyan"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="absolute left-2 top-8 z-10 flex shrink-0 items-center justify-center md:static"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="h-4 w-4 rounded-full border-2 border-cyber-bg bg-cyber-cyan animate-pulse-glow" />
      </motion.div>

      {/* Spacer for alternating */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}
