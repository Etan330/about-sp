import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-1 rounded-full border border-cyber-border bg-cyber-surface/80 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors hover:border-cyber-cyan/30"
      aria-label="Toggle language"
    >
      <span
        className={`text-xs font-mono font-medium transition-colors ${
          lang === 'zh' ? 'text-cyber-cyan' : 'text-cyber-dim'
        }`}
      >
        中文
      </span>
      <span className="text-cyber-dim text-xs">|</span>
      <span
        className={`text-xs font-mono font-medium transition-colors ${
          lang === 'en' ? 'text-cyber-cyan' : 'text-cyber-dim'
        }`}
      >
        EN
      </span>
      <motion.div
        className="absolute inset-0 rounded-full border border-cyber-cyan/40"
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          clipPath: lang === 'zh' ? 'inset(0 50% 0 0)' : 'inset(0 0 0 50%)',
        }}
      />
    </button>
  );
}
