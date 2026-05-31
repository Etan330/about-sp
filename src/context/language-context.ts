import { createContext } from 'react';
import type { Bilingual, Language } from '../types';

export interface LanguageState {
  lang: Language;
  toggleLanguage: () => void;
  t: <T>(bilingual: Bilingual<T>) => T;
}

export const LanguageContext = createContext<LanguageState | null>(null);
