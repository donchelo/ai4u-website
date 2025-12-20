import { useLanguage } from '../context';

/**
 * Hook personalizado para acceder a traducciones con tipado fuerte
 * @param key - Clave de traducción (ej: 'nav.home', 'hero.title')
 * @returns La traducción correspondiente al idioma actual
 */
export const useTranslation = (key: string): string => {
  const { t } = useLanguage();
  return t(key);
};

/**
 * Hook para obtener múltiples traducciones a la vez
 * @param keys - Array de claves de traducción
 * @returns Objeto con las traducciones
 */
export const useTranslations = (keys: string[]): Record<string, string> => {
  const { t } = useLanguage();
  
  const translations: Record<string, string> = {};
  keys.forEach(key => {
    translations[key] = t(key);
  });
  
  return translations;
};

/**
 * Hook para obtener traducciones de una sección específica
 * @param section - Sección de traducciones (ej: 'nav', 'hero')
 * @returns Objeto con todas las traducciones de esa sección
 */
export const useSectionTranslations = (section: string): Record<string, string> => {
  const { t } = useLanguage();
  
  // Esto es una implementación básica. En un sistema más avanzado,
  // podrías tener tipado fuerte para las secciones
  const sectionKeys = [
    `${section}.title`,
    `${section}.subtitle`,
    `${section}.description`,
    `${section}.cta`,
    `${section}.name`,
    `${section}.text`
  ];
  
  const translations: Record<string, string> = {};
  sectionKeys.forEach(key => {
    const translation = t(key);
    if (translation !== key) { // Solo incluir si existe la traducción
      translations[key] = translation;
    }
  });
  
  return translations;
}; 