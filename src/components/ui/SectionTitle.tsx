import { cn } from '../../utils/cn';
import { useLanguage } from '../../hooks/useLanguage';
import type { Bilingual } from '../../types';

interface SectionTitleProps {
  number: string;
  title: Bilingual<string>;
  className?: string;
}

export function SectionTitle({ number, title, className }: SectionTitleProps) {
  const { t } = useLanguage();

  return (
    <div className={cn('mb-12 md:mb-16', className)}>
      <span className="section-kicker text-xs text-cyber-cyan">
        {number}
      </span>
      <h2 className="mt-3 font-display text-5xl font-black leading-none tracking-tight md:text-7xl">
        <span className="neon-cyan">{t(title)}</span>
      </h2>
      <div className="mt-5 h-px w-36 bg-gradient-to-r from-cyber-cyan via-cyber-purple/60 to-transparent" />
    </div>
  );
}
