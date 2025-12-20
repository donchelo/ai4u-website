import React, { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react';
import { Language, translations, getTranslation } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children?: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Obtener idioma inicial del localStorage o detectar del navegador
  const getInitialLanguage = (): Language => {
    const savedLanguage = localStorage.getItem('ai4u-language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      return savedLanguage;
    }
    
    // Detectar idioma del navegador
    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('es')) {
      return 'es';
    }
    
    return 'en'; // Por defecto inglés
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Función para cambiar idioma
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ai4u-language', lang);
    
    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;
  };

  // Función para alternar entre idiomas
  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
  };

  // Función de traducción
  const t = useMemo(() => {
    return (key: string): string => {
      return getTranslation(translations[language], key);
    };
  }, [language]);

  // Efecto para establecer el idioma inicial en el HTML
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
    toggleLanguage
  }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 