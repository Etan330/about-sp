import { useState, useCallback, useEffect, type ReactNode } from 'react';
import { LanguageContext } from './language-context';
import type { Bilingual, Language } from '../types';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('zh');

  const toggleLanguage = useCallback(() => {
    setLang((prev) => prev === 'zh' ? 'en' : 'zh');
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
