import { useState, useCallback, useEffect, type ReactNode } from 'react';
import { LanguageContext } from './language-context';
import type { Bilingual, Language } from '../types';

function getInitialLang(): Language {
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLang);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'zh' ? 'en' : 'zh';
      try { localStorage.setItem('lang', next); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const t = useCallback(
    <T,>(bilingual: Bilingual<T>): T => bilingual[lang],
    [lang],
  );

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
