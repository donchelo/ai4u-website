import { renderHook } from '@testing-library/react';
import { useTranslation, useTranslations, useSectionTranslations } from '../useTranslations';
import { LanguageProvider } from '../../context';
import React from 'react';

// Mock del contexto de idioma
const mockLanguageContext = {
  currentLanguage: 'es',
  toggleLanguage: jest.fn(),
  t: jest.fn((key: string) => {
    const translations: Record<string, string> = {
      'nav.home': 'Inicio',
      'nav.services': 'Servicios',
      'nav.about': 'Nosotros',
      'hero.title': 'Bienvenido a AI4U',
      'hero.subtitle': 'Tecnología que potencia',
      'hero.description': 'Transformamos tu negocio',
      'hero.cta': 'Comenzar ahora',
      'services.title': 'Nuestros Servicios',
      'services.subtitle': 'Soluciones integrales',
      'about.name': 'Acerca de nosotros',
      'about.text': 'Somos AI4U'
    };
    return translations[key] || key;
  })
};

jest.mock('../../context', () => ({
  useLanguage: () => mockLanguageContext,
  LanguageProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>
}));

describe('useTranslations hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('useTranslation', () => {
    it('should return translated text for existing key', () => {
      const { result } = renderHook(() => useTranslation('nav.home'));
      
      expect(result.current).toBe('Inicio');
      expect(mockLanguageContext.t).toHaveBeenCalledWith('nav.home');
    });

    it('should return the key if translation does not exist', () => {
      const { result } = renderHook(() => useTranslation('nonexistent.key'));
      
      expect(result.current).toBe('nonexistent.key');
      expect(mockLanguageContext.t).toHaveBeenCalledWith('nonexistent.key');
    });

    it('should handle empty string key', () => {
      const { result } = renderHook(() => useTranslation(''));
      
      expect(result.current).toBe('');
      expect(mockLanguageContext.t).toHaveBeenCalledWith('');
    });
  });

  describe('useTranslations', () => {
    it('should return translations for multiple keys', () => {
      const keys = ['nav.home', 'nav.services', 'nav.about'];
      const { result } = renderHook(() => useTranslations(keys));
      
      expect(result.current).toEqual({
        'nav.home': 'Inicio',
        'nav.services': 'Servicios',
        'nav.about': 'Nosotros'
      });
      
      keys.forEach(key => {
        expect(mockLanguageContext.t).toHaveBeenCalledWith(key);
      });
    });

    it('should handle empty keys array', () => {
      const { result } = renderHook(() => useTranslations([]));
      
      expect(result.current).toEqual({});
    });

    it('should handle mix of existing and non-existing keys', () => {
      const keys = ['nav.home', 'nonexistent.key'];
      const { result } = renderHook(() => useTranslations(keys));
      
      expect(result.current).toEqual({
        'nav.home': 'Inicio',
        'nonexistent.key': 'nonexistent.key'
      });
    });
  });

  describe('useSectionTranslations', () => {
    it('should return translations for hero section', () => {
      const { result } = renderHook(() => useSectionTranslations('hero'));
      
      expect(result.current).toEqual({
        'hero.title': 'Bienvenido a AI4U',
        'hero.subtitle': 'Tecnología que potencia',
        'hero.description': 'Transformamos tu negocio',
        'hero.cta': 'Comenzar ahora'
      });
    });

    it('should return translations for services section', () => {
      const { result } = renderHook(() => useSectionTranslations('services'));
      
      expect(result.current).toEqual({
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Soluciones integrales'
      });
    });

    it('should filter out non-existing translations', () => {
      const { result } = renderHook(() => useSectionTranslations('nonexistent'));
      
      // Solo debería devolver traducciones que existen, no las claves
      expect(result.current).toEqual({});
    });

    it('should return partial translations when some keys exist', () => {
      const { result } = renderHook(() => useSectionTranslations('about'));
      
      expect(result.current).toEqual({
        'about.name': 'Acerca de nosotros',
        'about.text': 'Somos AI4U'
      });
    });

    it('should handle empty section string', () => {
      const { result } = renderHook(() => useSectionTranslations(''));
      
      expect(result.current).toEqual({});
    });

    it('should call translation function for all expected keys', () => {
      renderHook(() => useSectionTranslations('test'));
      
      const expectedKeys = [
        'test.title',
        'test.subtitle', 
        'test.description',
        'test.cta',
        'test.name',
        'test.text'
      ];
      
      expectedKeys.forEach(key => {
        expect(mockLanguageContext.t).toHaveBeenCalledWith(key);
      });
    });
  });

  describe('integration with LanguageProvider', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LanguageProvider>{children}</LanguageProvider>
    );

    it('should work with LanguageProvider wrapper', () => {
      const { result } = renderHook(() => useTranslation('nav.home'), { wrapper });
      
      expect(result.current).toBe('Inicio');
    });
  });
});