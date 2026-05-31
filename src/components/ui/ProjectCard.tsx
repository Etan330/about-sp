import { useEffect, useRef, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const boundsRef = useRef<DOMRect | null>(null);
  const tiltRef = useRef({ x: 0, y: 0 });
  const { t } = useLanguage();

  const applyTilt = () => {
    if (!ref.current) return;
    const { x, y } = tiltRef.current;
    ref.current.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg)`;
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
    ref.current.style.transform =
      'perspective(800px) rotateY(0deg) rotateX(0deg)';
  };

  useEffect(() => () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass group relative overflow-hidden rounded-[2rem] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-cyan/35 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Moving glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(199,255,82,0.14), transparent 58%)',
        }}
      />

      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-cyber-cyan">
              Case Study
            </span>
            <h3 className="mt-3 font-display text-4xl leading-none text-cyber-text md:text-5xl">
              {t(project.title)}
            </h3>
          </div>
          {project.featured && (
            <span className="shrink-0 rounded-full border border-cyber-purple/30 bg-cyber-purple/15 px-3 py-1 font-mono text-xs text-cyber-purple">
              {t({ zh: '精选', en: 'Featured' })}
            </span>
          )}
        </div>
        <p className="mb-4 text-sm font-medium text-cyber-purple">
          {t(project.subtitle)}
        </p>
        <p className="mb-5 text-sm leading-7 text-cyber-dim">
          {t(project.description)}
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {t(project.technologies).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyber-border bg-cyber-bg/60 px-2.5 py-1 text-xs text-cyber-dim"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.links.map((link) => (
            <a
              key={link.type}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-cyber-cyan hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-xs">
                {link.type === 'github'
                  ? 'GitHub'
                  : link.type === 'demo'
                    ? 'Demo'
                    : 'Article'}
              </span>
              <span>&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
