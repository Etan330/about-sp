import { useLanguage } from '../../hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-cyber-border/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-cyber-dim text-sm font-mono">
          &copy; {year} Etan. {t({ zh: 'Curiosity is all you need. 用 React + Three.js 构建。', en: 'Curiosity is all you need. Built with React + Three.js.' })}
        </p>
      </div>
    </footer>
  );
}
