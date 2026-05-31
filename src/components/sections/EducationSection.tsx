import { useEffect, useRef, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionTitle } from '../ui/SectionTitle';
import { ScrollReveal } from '../effects/ScrollReveal';
import { education } from '../../data/education';

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <section
      id="education"
      className="flex items-center px-6 py-20 lg:min-h-screen"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          number="05."
          title={{ zh: '好奇心的养分', en: 'Roots of Curiosity' }}
        />

        <div className="mb-8 max-w-3xl font-editorial text-xl leading-8 text-cyber-dim">
          {t({
            zh: '工商管理 + 电子商务——文科背景让我更关注"人"的需求，而好奇心驱动我补上了技术这一半。',
            en: 'Business Administration + E-Commerce — a liberal arts foundation taught me to focus on human needs; curiosity filled in the technical half.',
          })}
        </div>

        <div className="max-w-5xl space-y-8 lg:space-y-10">
          {education.map((edu, i) => (
            <ScrollReveal
              key={edu.id}
              direction="up"
              delay={i * 0.15}
              duration={0.5}
            >
              <EduCard entry={edu} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EduCard({ entry, index }: { entry: typeof education[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const boundsRef = useRef<DOMRect | null>(null);
  const tiltRef = useRef({ x: 0, y: 0 });
  const { t } = useLanguage();

  const applyTilt = () => {
    if (!ref.current) return;
    const { x, y } = tiltRef.current;
    ref.current.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 5}deg)`;
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
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass group relative overflow-hidden rounded-[1.75rem] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-cyan/35 md:p-8"
      initial={{ opacity: 0, y: 30 }}
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
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(199,255,82,0.12), transparent 55%)',
        }}
      />

      <div className="relative z-10">
        {entry.logo && (
          <div className="absolute right-6 top-6 h-16 w-16 overflow-hidden rounded-full border border-cyber-cyan/25 bg-cyber-surface/60">
            <img
              src={entry.logo}
              alt={t(entry.institution)}
              className="h-full w-full object-contain p-1.5"
            />
          </div>
        )}
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-cyan">
          {t(entry.period)}
        </span>
        <h3 className="mt-3 font-display text-4xl leading-none text-cyber-text">
          {t(entry.degree)}
        </h3>
        <p className="mt-2 text-sm font-medium text-cyber-purple">
          {t(entry.institution)}
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-cyber-dim">
          {t(entry.description)}
        </p>
      </div>
    </motion.div>
  );
}
