import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { TimelineItem } from '../ui/TimelineItem';
import { experiences } from '../../data/experience';
import { useLanguage } from '../../hooks/useLanguage';

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      className="flex items-center overflow-hidden px-6 py-20 lg:min-h-screen"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          number="03."
          title={{ zh: '真实业务里的证据', en: 'Proof in the Wild' }}
        />

        <div className="mb-10 max-w-3xl font-editorial text-xl leading-8 text-cyber-dim">
          {t({
            zh: '每段经历都保留一个共同模式：先问为什么，再拆流程、找数据、做实验，最后把经验沉淀为团队可以复用的动作。',
            en: 'Every role follows the same pattern: ask why, map the workflow, find data, run experiments, and turn the learning into reusable team action.',
          })}
        </div>

        <div ref={timelineRef} className="relative">
          {/* Center line - hidden on mobile */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-cyber-border md:left-1/2 md:-translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} entry={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
