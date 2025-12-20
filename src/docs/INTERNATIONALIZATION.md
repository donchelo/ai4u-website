# Sistema de Internacionalización AI4U

## Descripción General

El sistema de internacionalización de AI4U es una solución escalable y mantenible para manejar múltiples idiomas en la aplicación. Está diseñado siguiendo las mejores prácticas de React y TypeScript.

## Arquitectura

### 1. Context API (`LanguageContext.tsx`)
- **Estado global**: Maneja el idioma actual y las funciones de cambio
- **Persistencia**: Guarda la preferencia en localStorage
- **Detección automática**: Detecta el idioma del navegador
- **Función de traducción**: Proporciona la función `t()` para acceder a traducciones

### 2. Archivos de Traducción (`translations.ts`)
- **Estructura jerárquica**: Organización por secciones (nav, hero, services, etc.)
- **Tipado fuerte**: TypeScript para prevenir errores
- **Escalabilidad**: Fácil agregar nuevos idiomas y traducciones

### 3. Hooks Personalizados (`useTranslations.ts`)
- **useTranslation**: Para traducciones individuales
- **useTranslations**: Para múltiples traducciones a la vez
- **useSectionTranslations**: Para todas las traducciones de una sección

### 4. Componente de UI (`LanguageToggle.tsx`)
- **Múltiples variantes**: icon, text, both
- **Diseño AI4U**: Sigue la paleta de colores y estilos de la marca
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## Uso Básico

### 1. Configuración Inicial

```tsx
// App.tsx
import { LanguageProvider } from './context';

function App() {
  return (
    <LanguageProvider>
      {/* Resto de la aplicación */}
    </LanguageProvider>
  );
}
```

### 2. Usar Traducciones en Componentes

```tsx
import { useLanguage } from '../context';

const MyComponent = () => {
  const { t, language } = useLanguage();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>Idioma actual: {language}</p>
    </div>
  );
};
```

### 3. Hooks Personalizados

```tsx
import { useTranslation, useTranslations, useSectionTranslations } from '../hooks';

const MyComponent = () => {
  // Traducción individual
  const title = useTranslation('hero.title');
  
  // Múltiples traducciones
  const navItems = useTranslations(['nav.home', 'nav.services', 'nav.contact']);
  
  // Todas las traducciones de una sección
  const heroSection = useSectionTranslations('hero');
  
  return (
    <div>
      <h1>{title}</h1>
      <nav>
        {Object.entries(navItems).map(([key, value]) => (
          <a key={key} href="#">{value}</a>
        ))}
      </nav>
    </div>
  );
};
```

### 4. Botón de Cambio de Idioma

```tsx
import { LanguageToggle } from '../components/shared/ui/atoms';

const Navbar = () => {
  return (
    <nav>
      {/* Otros elementos */}
      <LanguageToggle variant="icon" size="small" />
    </nav>
  );
};
```

## Agregar Nuevos Idiomas

### 1. Actualizar el Tipo

```tsx
// translations.ts
export type Language = 'es' | 'en' | 'fr'; // Agregar nuevo idioma
```

### 2. Agregar Traducciones

```tsx
export const translations: Record<Language, Translations> = {
  es: { /* traducciones en español */ },
  en: { /* traducciones en inglés */ },
  fr: { /* nuevas traducciones en francés */ }
};
```

### 3. Actualizar el Context

```tsx
// LanguageContext.tsx
const getInitialLanguage = (): Language => {
  const savedLanguage = localStorage.getItem('ai4u-language') as Language;
  if (savedLanguage && ['es', 'en', 'fr'].includes(savedLanguage)) {
    return savedLanguage;
  }
  
  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith('es')) return 'es';
  if (browserLanguage.startsWith('fr')) return 'fr';
  
  return 'en';
};
```

## Agregar Nuevas Traducciones

### 1. Estructura Recomendada

```tsx
export const translations = {
  es: {
    // Secciones principales
    nav: { /* navegación */ },
    hero: { /* sección principal */ },
    services: { /* servicios */ },
    footer: { /* pie de página */ },
    
    // Nuevas secciones
    about: {
      title: 'Sobre Nosotros',
      description: 'Descripción de la empresa'
    },
    contact: {
      title: 'Contacto',
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        message: 'Mensaje'
      }
    }
  },
  en: {
    // Mismas secciones en inglés
  }
};
```

### 2. Usar en Componentes

```tsx
const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section>
      <h2>{t('about.title')}</h2>
      <p>{t('about.description')}</p>
    </section>
  );
};
```

## Características Avanzadas

### 1. Fallbacks Inteligentes

El sistema maneja automáticamente casos donde no existe una traducción:

```tsx
// Si no existe 'about.title', retorna 'about.title'
const title = t('about.title'); // Retorna la clave como fallback
```

### 2. Persistencia de Preferencias

```tsx
// El idioma se guarda automáticamente en localStorage
// Se recupera al recargar la página
```

### 3. Detección Automática

```tsx
// Detecta el idioma del navegador al cargar por primera vez
// Si no hay preferencia guardada, usa el idioma del navegador
```

### 4. Atributo HTML

```tsx
// Actualiza automáticamente el atributo lang del HTML
// <html lang="es"> o <html lang="en">
```

## Mejores Prácticas

### 1. Organización de Traducciones

- **Agrupar por sección**: nav, hero, services, etc.
- **Usar nombres descriptivos**: 'hero.title' en lugar de 'title'
- **Mantener consistencia**: Misma estructura en todos los idiomas

### 2. Nomenclatura

```tsx
// ✅ Bueno
t('nav.home')
t('hero.title')
t('services.superAI.description')

// ❌ Evitar
t('home')
t('title')
t('description')
```

### 3. Componentes Reutilizables

```tsx
// Crear componentes que usen traducciones automáticamente
const TranslatedButton = ({ translationKey, ...props }) => {
  const { t } = useLanguage();
  return <Button {...props}>{t(translationKey)}</Button>;
};
```

### 4. Testing

```tsx
// Probar que las traducciones existen
const testTranslations = () => {
  const { t } = useLanguage();
  const requiredKeys = ['nav.home', 'hero.title', 'footer.copyright'];
  
  requiredKeys.forEach(key => {
    const translation = t(key);
    if (translation === key) {
      console.warn(`Missing translation for: ${key}`);
    }
  });
};
```

## Troubleshooting

### 1. Traducción No Encontrada

```tsx
// Problema: t('missing.key') retorna 'missing.key'
// Solución: Verificar que la clave existe en translations.ts
```

### 2. Context No Disponible

```tsx
// Error: useLanguage must be used within a LanguageProvider
// Solución: Asegurar que el componente esté dentro de LanguageProvider
```

### 3. Persistencia No Funciona

```tsx
// Verificar que localStorage esté disponible
// En algunos entornos (SSR) localStorage puede no estar disponible
```

## Demostración

Visita `/i18n-demo` para ver una demostración completa del sistema con ejemplos de uso de todos los hooks y características.

## Escalabilidad

El sistema está diseñado para escalar fácilmente:

1. **Nuevos idiomas**: Solo agregar al tipo y objeto de traducciones
2. **Nuevas secciones**: Agregar al objeto de traducciones
3. **Nuevos hooks**: Crear hooks específicos para casos de uso especiales
4. **Integración con APIs**: Fácil integración con servicios de traducción externos

## Validación y Mantenimiento

### Script de Validación

Se incluye un script para detectar texto hardcodeado:

```bash
npm run validate-translations
```

Este script:
- Busca patrones de texto en español que deberían estar traducidos
- Identifica atributos como `title`, `label`, `text`, `alt` con texto hardcodeado
- Excluye archivos de demo que pueden tener texto hardcodeado intencionalmente
- Proporciona un reporte detallado de problemas encontrados

### Mejores Prácticas para Mantener Traducciones

1. **Siempre usar la función `t()`** para texto visible al usuario
2. **Ejecutar el script de validación** antes de commits importantes
3. **Agregar nuevas traducciones** al archivo `translations.ts` inmediatamente
4. **Mantener consistencia** en la estructura de traducciones
5. **Probar ambos idiomas** regularmente

## Estado Actual

### ✅ Completamente Traducido
- Navegación principal
- Hero Section
- Footer
- Páginas principales (Home, Services, WhyAI4U, Gallery, UseCases)
- Componentes de UI principales
- Sistema de cambio de idioma

### ⚠️ Componentes de Demo
- Los componentes de demostración pueden tener texto hardcodeado intencionalmente
- No afectan la funcionalidad principal de la aplicación

## Conclusión

El sistema de internacionalización de AI4U proporciona una base sólida y escalable para aplicaciones multilingües, siguiendo las mejores prácticas de React y manteniendo la consistencia con el diseño de la marca. El sistema está ahora completamente funcional con herramientas de validación para mantener la calidad. 