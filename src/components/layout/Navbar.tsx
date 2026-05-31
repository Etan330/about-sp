import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { LanguageToggle } from '../ui/LanguageToggle';

const navLinks = [
  { id: 'hero', zh: '个人首页', en: 'Home' },
  { id: 'about', zh: '好奇心引擎', en: 'Curiosity Engine' },
  { id: 'skills', zh: '提问工具箱', en: 'Toolbox' },
  { id: 'experience', zh: '业务证据', en: 'Experience' },
  { id: 'projects', zh: '好奇心实验室', en: 'Projects' },
  { id: 'education', zh: '教育背景', en: 'Education' },
  { id: 'contact', zh: '联系方式', en: 'Contact' },
];

export function Navbar() {
  const { t } = useLanguage();
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -60% 0px' },
    );

    for (const link of navLinks) {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color] duration-300 ${
        scrolled
          ? 'border-b border-cyber-border/70 bg-cyber-bg/72 py-3 backdrop-blur-2xl'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="group flex items-center gap-3 text-left transition-opacity hover:opacity-85"
        >
          <span
            className="relative h-9 w-9 overflow-hidden rounded-[0.65rem] border border-cyber-border bg-cyber-surface/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            aria-hidden="true"
          >
            <span className="absolute left-2 top-2 h-5 w-1.5 rotate-12 rounded-full bg-cyber-cyan" />
            <span className="absolute left-4 top-1.5 h-6 w-1.5 rotate-12 rounded-full bg-cyber-purple" />
            <span className="absolute bottom-2 right-2 h-1.5 w-4 rounded-full bg-cyber-text/80" />
          </span>
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.26em] text-cyber-dim">
              {t({ zh: '好奇心驱动的实践', en: 'Curiosity-Driven' })}
            </span>
            <span className="block font-display text-2xl leading-none text-gradient">
              Etan
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative rounded-full px-3 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${
                active === link.id
                  ? 'text-cyber-cyan'
                  : 'text-cyber-dim hover:text-cyber-text'
              }`}
            >
              {active === link.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t(link)}</span>
            </button>
          ))}
          <div className="ml-3 pl-3 border-l border-cyber-border">
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 rounded-full border border-cyber-border bg-cyber-surface/80 p-2"
            aria-label="Toggle menu"
          >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-cyber-cyan"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-cyber-cyan"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-cyber-cyan"
          />
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'text-cyber-cyan bg-cyber-cyan/10'
                      : 'text-cyber-dim'
                  }`}
                >
                  {t(link)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
