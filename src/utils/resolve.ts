import type { Bilingual, Language } from '../types';

export function resolveBilingual<T>(data: Bilingual<T>, lang: Language): T {
  return data[lang];
}
