## 📋 **Guía Completa para Agentes de Código - AI4U Website v2.0**

### **1. Arquitectura del Proyecto**
```
- Framework: React 18 + TypeScript + Material-UI v6 + Tailwind CSS
- Bundler: React Scripts + react-app-rewired (config-overrides.js)
- Estructura: Atomic Design (atoms, molecules, organisms, layouts)
- Estado global: Context API + Custom Hooks
- Routing: React Router v6+ con lazy loading
- Shell: PowerShell (Windows) - NO soporta && como separador
- Puerto por defecto: 3002
- Deployment: GitHub Pages con configuración personalizada
- Testing: Jest + React Testing Library
- SEO: react-helmet-async + Structured Data (Schema.org)
```

### **2. Estructura de Carpetas Completa**
```
src/
├── components/shared/ui/
│   ├── atoms/           # Button, Typography, Logo, GeometricIcon, PixelArtImage, SEOHead
│   ├── molecules/       # Card, Gallery, ServiceCard, MetricCard, ChatButton, Breadcrumb
│   ├── organisms/       # HeroSection, Navbar, Footer, ServicesFilter
│   ├── layouts/         # Layout wrappers, LazyPage
│   └── tokens/          # palette.ts, typography.ts, theme.ts
├── context/             # ThemeContext, ServicesContext, LoadingContext, LanguageContext
├── hooks/               # useGalleryImages, useLazyImage, useColors, useTranslations
├── pages/               # Home, Services, Gallery, demos
├── data/                # Static data files
├── utils/               # Helper functions, constants, seo.ts
├── types/               # TypeScript type definitions
└── docs/                # Documentation files
public/
├── robots.txt           # SEO: Directivas para crawlers
├── sitemap.xml          # SEO: Mapa del sitio
├── humans.txt           # SEO: Información del equipo
└── assets/images/       # Imágenes optimizadas
```

### **3. Sistema SEO Implementado**
```typescript
// COMPONENTES SEO DISPONIBLES:
- SEOHead: Meta tags dinámicos + structured data
- Breadcrumb: Navegación semántica con structured data
- ServiceCard: Structured data individual por servicio

// UTILIDADES SEO (src/utils/seo.ts):
- getHomeStructuredData(): WebSite schema
- getServicesStructuredData(): ItemList schema
- getServiceStructuredData(): Service schema individual
- getUseCasesStructuredData(): CreativeWork schema
- getFAQStructuredData(): FAQPage schema
- getBreadcrumbStructuredData(): BreadcrumbList schema
- getPageMetaTags(): Meta tags optimizados por página
- getCanonicalUrl(): URLs canónicas
- cleanMetaDescription(): Limpieza de descripciones
- generateKeywords(): Generación de keywords

// IMPLEMENTACIÓN SEO:
import { SEOHead } from '../atoms';
import { getPageMetaTags, getHomeStructuredData } from '../utils/seo';

const metaTags = getPageMetaTags('home');
const structuredData = getHomeStructuredData();

<SEOHead
  title={metaTags.title}
  description={metaTags.description}
  keywords={metaTags.keywords}
  canonical="https://ai4u.com.co"
  structuredData={structuredData}
/>
```

### **4. Configuración de Build System**
```typescript
// CONFIGURACIÓN CRÍTICA:
- react-app-rewired para customización de webpack
- config-overrides.js para resolver problemas de TypeScript
- Tailwind CSS integrado con MUI
- Puerto personalizado (3002) en package.json
- Scripts de deployment optimizados
- react-helmet-async para SEO dinámico

// COMANDOS DE DESARROLLO:
npm start                    # Puerto 3002
npm run build              # Build de producción
npm run deploy             # Deploy a GitHub Pages
npm test                   # Ejecutar tests
npm install react-helmet-async  # Si falta dependencia SEO
```

### **5. Rutas de Importación Críticas**
```typescript
// DESDE molecules/ HACIA:
import { useGalleryImages } from '../../../../hooks';        // ✅ CORRECTO
import { BodyText } from '../atoms';                         // ✅ CORRECTO
import { useNavigate } from 'react-router-dom';             // ✅ CORRECTO
import { getBreadcrumbStructuredData } from '../../../../utils/seo'; // ✅ CORRECTO

// DESDE organisms/ HACIA:
import { useGalleryImages } from '../../../../hooks';        // ✅ CORRECTO
import { ServiceCard } from '../molecules';                  // ✅ CORRECTO

// DESDE pages/ HACIA:
import { getPageMetaTags, getHomeStructuredData } from '../utils/seo'; // ✅ CORRECTO

// EXPORTACIONES:
// Todos los hooks se exportan desde src/hooks/index.ts
// Todos los atoms se exportan desde src/components/shared/ui/atoms/index.ts
// Todos los molecules se exportan desde src/components/shared/ui/molecules/index.ts
```

### **6. Sistema de Colores AI4U**
```typescript
// PALETA DE COLORES COMPLETA:
const AI4U_COLORS = {
  neonBlaze: '#FF5C00',        // Naranja principal
  digitalCoral: '#FF7477',     // Coral secundario
  frostSignal: '#DFF7EB',      // Verde claro
  grapheneBlack: '#0A0A0A',    // Negro principal
  quantumBlue: '#1FA9F6',      // Azul tecnológico
  techSlate: '#7D848B',        // Gris técnico
  cyberOlive: '#B6CA40',       // Verde lima
  deepNeuralTeal: '#2B7A78'    // Verde azulado
};

// USO CON HOOK:
const colors = useColors();
sx={{ 
  backgroundColor: colors.contrast.surface,
  color: colors.contrast.text.primary 
}}
```

### **7. Sistema de Internacionalización (i18n)**
```typescript
// CONFIGURACIÓN I18N:
- LanguageContext.tsx para gestión de idiomas
- useTranslations hook para traducciones
- Sistema de traducciones por secciones
- Toggle de idioma en componentes

// USO:
const { t, currentLanguage, toggleLanguage } = useTranslations();
const { t: tSection } = useSectionTranslations('services');

// TRADUCCIONES:
t('common.learnMore')           // Traducción general
tSection('title')               // Traducción por sección
```

### **8. Componentes Especializados del Proyecto**
```typescript
// COMPONENTES ÚNICOS:
- PixelArtImage.tsx: Imágenes con filtro pixel art
- PixelArtFilter.tsx: Filtro de pixel art
- WeatherWidget.tsx: Widget del clima
- SleepWidget.tsx: Widget de sueño
- ModelingInterface.tsx: Interfaz de modelado
- ChatButton.tsx: Botón de chat avanzado
- TransactionCard.tsx: Tarjeta de transacciones
- BudgetCard.tsx: Tarjeta de presupuesto
- ServicesFilter.tsx: Filtro de servicios
- ServicesStats.tsx: Estadísticas de servicios

// COMPONENTES SEO:
- SEOHead.tsx: Meta tags dinámicos + structured data
- Breadcrumb.tsx: Navegación semántica
- ServiceCard.tsx: Structured data individual
```

### **9. Sistema de Rutas y Navegación**
```typescript
// RUTAS PRINCIPALES:
- Home: '/' o '/home'
- Services: '/servicios'
- Gallery: '/Gallery'
- Why AI4U: '/por-que-ai4u'
- Success Cases: '/casos-de-uso'

// RUTAS DE DEMO:
- Component Library: '/component-library'
- Color System Demo: '/color-system-demo'
- Migration Demo: '/migration-demo'
- Fase 3 Demo: '/fase3-demo'
- Metrics Demo: '/metrics-demo'
- Theme Demo: '/theme-demo'
- i18n Demo: '/i18n-demo'

// LAZY LOADING:
<LazyPage>
  <Component />
</LazyPage>
```

### **10. Gestión de Estado Avanzada**
```typescript
// CONTEXTOS DISPONIBLES:
- ThemeContext: Modo claro/oscuro
- ServicesContext: Gestión de servicios con reducer
- LoadingContext: Estados de carga globales
- LanguageContext: Internacionalización
- HelmetProvider: Para SEO dinámico (react-helmet-async)

// PATRONES DE USO:
const { mode, toggleColorMode } = useColorMode();
const { isLoading, setIsLoading } = useLoading();
const { services, filters, updateFilters } = useServices();
const { currentLanguage, toggleLanguage } = useLanguage();
```

### **11. Hooks Personalizados Disponibles**
```typescript
// HOOKS PRINCIPALES:
- useGalleryImages(): { images, isLoading, error, reload }
- useLazyImage(): Para carga optimizada de imágenes
- useWindowSize(): Para responsive design
- useColors(): Sistema de colores con contrast
- useTranslations(): Sistema de traducciones
- useLocalStorage(): Persistencia local
- useComponentVariant(): Variantes de componentes
- useContrastPair(): Pares de contrast automático

// HOOKS SEO:
- useSEO(): Para SEO dinámico (si se implementa)
```

### **12. Configuración MUI Específica**
```typescript
// MUI v6 PATTERNS:
- Usar sx prop en lugar de styled components
- Box component para layouts flexibles
- Tooltip requiere children válidos (NO usar si causa errores)
- Preferir onClick directo en Box vs wrappers complejos
- Typography variants: h1, h2, body1, body2

// INTEGRACIÓN TAILWIND + MUI:
- Tailwind para utilidades rápidas
- MUI para componentes complejos
- sx prop para estilos personalizados
```

### **13. Optimización de Performance**
```typescript
// TÉCNICAS IMPLEMENTADAS:
- Lazy loading de páginas completas
- Lazy loading de imágenes (useLazyImage)
- Memoización en componentes costosos
- Code splitting por rutas
- Preloading de imágenes críticas

// PATRONES:
const LazyComponent = lazy(() => import('./Component'));
const MemoizedComponent = React.memo(Component);
```

### **14. Testing y QA**
```typescript
// CONFIGURACIÓN DE TESTING:
- Jest + React Testing Library
- setupTests.ts configurado
- Tests para componentes críticos
- Tests de utilidades

// COMANDOS:
npm test                   # Ejecutar tests
npm start                  # Verificar compilación
npm run build             # Verificar build
```

### **15. Deployment y CI/CD**
```typescript
// CONFIGURACIÓN DE DEPLOYMENT:
- GitHub Pages con configuración personalizada
- CNAME configurado
- Asset manifest para cache
- Scripts optimizados

// COMANDOS:
npm run deploy             # Deploy a GitHub Pages
npm run deploy:full       # Build + Deploy completo
```

### **16. Patrones de Componentes Establecidos**
```typescript
// LOADING STATES:
const { images, isLoading, error } = useGalleryImages();
if (isLoading) return <LoadingComponent />;
if (error) return <ErrorComponent />;

// NAVEGACIÓN:
const navigate = useNavigate();
onClick={() => navigate('/gallery')}

// TRANSICIONES:
transition: 'all 0.3s ease'
opacity: isTransitioning ? 0.7 : 1

// GLASSMORPHISM:
backdropFilter: 'blur(10px)'
backgroundColor: 'rgba(255, 255, 255, 0.1)'

// SEO PATTERNS:
const metaTags = getPageMetaTags('pageName');
const structuredData = getSpecificStructuredData();
<SEOHead title={metaTags.title} description={metaTags.description} structuredData={structuredData} />
```

### **17. Convenciones de Naming y Estructura**
```typescript
// COMPONENTES:
- PascalCase: GalleryFrame.tsx
- Props interface: GalleryFrameProps
- Export default al final

// HOOKS:
- Prefijo 'use': useGalleryImages
- Retornar objeto: { images, isLoading, error }

// ESTILOS:
- Usar sx prop con objetos
- Responsive: { xs: value, md: value }
- Tailwind para utilidades rápidas

// SEO:
- get[Page]StructuredData(): Para structured data
- getPageMetaTags(): Para meta tags
- SEOHead: Para componentes de head
```

### **18. Preferencias de Desarrollo**
```css
/* PALETA AI4U: */
- Primarios: blanco, negro, gris
- Acentos: naranja (#FF5C00), verde (#B6CA40)
- Transparencias: rgba(0, 0, 0, 0.1) para overlays
- Glassmorphism: backdropFilter: 'blur(10px)'

/* DISEÑO: */
- Minimalista, sin emojis
- Bordes redondeados: borderRadius: '8px'
- Sombras sutiles: boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
- Tipografía: Red Hat Display + Fira Mono

/* SEO: */
- Meta descriptions: 150-160 caracteres
- Keywords: Específicos por página
- Structured data: Schema.org completo
```

### **19. Configuración Técnica Específica**
```bash
# COMANDOS PARA WINDOWS/POWERSHELL:
npm start                    # ✅ CORRECTO
cd path && npm start        # ❌ ERROR en PowerShell
cd path; npm start          # ✅ CORRECTO en PowerShell

# PUERTOS:
- Desarrollo: 3002 (puede cambiar automáticamente)
- Build: Estático para GitHub Pages

# CONFIGURACIÓN:
- react-app-rewired para customización
- config-overrides.js para TypeScript
- Tailwind CSS integrado
- react-helmet-async para SEO
```

### **20. Problemas Conocidos y Soluciones**
```typescript
// IMPORTACIONES:
❌ import { hook } from '../../../hooks/hookName';
✅ import { hook } from '../../../../hooks';

// MUI COMPONENTS:
❌ <Tooltip title="text"><Box /></Tooltip>  // Puede causar errores
✅ <Box title="text" />                      // Solución directa

// TYPESCRIPT:
- Usar interfaces para props
- any cuando sea necesario para evitar bloqueos
- Tipado gradual: funcionalidad primero, tipos después

// CONFLICTOS DE NOMBRES:
❌ const colors = { ... }; // Conflicto con hook colors
✅ const categoryColors = { ... }; // Renombrar variables locales

// SEO ERRORS:
❌ import { getBreadcrumbStructuredData } from '../../../utils/seo';
✅ import { getBreadcrumbStructuredData } from '../../../../utils/seo';

// JSX ERRORS:
❌ <React.Fragment> múltiples children
✅ Array con .filter(Boolean) para múltiples elementos
```

### **21. Estrategias de Debugging**
```typescript
// ERRORES COMUNES Y SOLUCIONES:

// 1. Module not found errors:
❌ import { hook } from '../../../hooks';
✅ import { hook } from '../../../../hooks';
// REGLA: Desde molecules/ siempre son 4 niveles hacia arriba

// 2. TypeScript conflicts:
❌ const colors = { ... }; // Conflicto con hook colors
✅ const categoryColors = { ... }; // Renombrar variables locales

// 3. MUI Icon imports:
❌ import { ShoppingCartIcon } from '@mui/icons-material';
✅ import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

// 4. SEO import errors:
❌ import { getBreadcrumbStructuredData } from '../../../utils/seo';
✅ import { getBreadcrumbStructuredData } from '../../../../utils/seo';

// 5. JSX multiple children:
❌ <React.Fragment> múltiples elementos
✅ Array con .filter(Boolean)

// 6. Compilation order:
1. Corregir importaciones primero
2. Resolver conflictos de nombres
3. Verificar tipos TypeScript
4. Probar funcionalidad
5. Verificar SEO components
```

### **22. Patrones de Migración y Refactoring**
```typescript
// MIGRACIÓN DE SISTEMAS DE COLORES:
// ANTES:
sx={{ backgroundColor: '#FFFFFF', color: '#000000' }}

// DESPUÉS:
const colors = useColors();
sx={{ 
  backgroundColor: colors.contrast.surface,
  color: colors.contrast.text.primary 
}}

// MIGRACIÓN SEO:
// ANTES:
<title>Página</title>
<meta name="description" content="..." />

// DESPUÉS:
import { SEOHead } from '../atoms';
import { getPageMetaTags } from '../utils/seo';

const metaTags = getPageMetaTags('pageName');
<SEOHead title={metaTags.title} description={metaTags.description} />

// REGLAS DE MIGRACIÓN:
1. Importar useColors hook
2. Reemplazar colores hardcodeados
3. Usar contrast automático
4. Mantener funcionalidad existente
5. Probar en ambos modos (claro/oscuro)
6. Implementar SEO dinámico
7. Verificar structured data
```

### **23. Manejo de Errores y Fallbacks**
```typescript
// PATRONES DE ERROR HANDLING:
// Loading states:
if (isLoading) return <CircularProgress />;

// Error states:
if (error) return <Alert severity="error">{error.message}</Alert>;

// Empty states:
if (!data.length) return <EmptyState />;

// SEO fallbacks:
if (!metaTags) return <SEOHead title="AI4U" />;

// REGLAS:
- Siempre manejar estados de carga
- Proporcionar feedback visual
- Usar fallbacks apropiados
- No dejar componentes en estado indefinido
- Implementar SEO fallbacks
```

### **24. Escalabilidad y Mantenibilidad**
```typescript
// PRINCIPIOS DE ESCALABILIDAD:
1. **Separación de responsabilidades**: Cada componente una función
2. **Reutilización**: Crear componentes genéricos
3. **Configurabilidad**: Props para personalización
4. **Consistencia**: Seguir patrones establecidos
5. **Documentación**: Comentar APIs complejas
6. **SEO**: Implementar structured data automáticamente
7. **Performance**: Lazy loading y memoización

// PATRONES DE MANTENIMIENTO:
- Usar TypeScript para type safety
- Mantener interfaces simples
- Evitar dependencias circulares
- Seguir convenciones de naming
- Mantener SEO actualizado
- Documentar structured data
```

### **25. Flujo de Trabajo Optimizado**
```
1. PLANIFICAR: Revisar componentes similares existentes
2. CREAR: Estructura básica con TypeScript flexible
3. IMPORTAR: Verificar rutas desde el inicio
4. PROBAR: Compilación antes de funcionalidad compleja
5. SEO: Implementar meta tags y structured data
6. REFINAR: Optimizar después de que funcione
7. TESTING: Verificar en diferentes dispositivos
8. DEPLOY: Probar build de producción
9. SEO VERIFICATION: Verificar meta tags y structured data
```

### **26. Sistema SEO Completo**
```typescript
// ARCHIVOS SEO CRÍTICOS:
- public/robots.txt: Directivas para crawlers
- public/sitemap.xml: Mapa del sitio
- public/humans.txt: Información del equipo
- src/utils/seo.ts: Utilidades SEO
- src/components/shared/ui/atoms/SEOHead.tsx: Componente SEO

// IMPLEMENTACIÓN SEO POR PÁGINA:
1. Importar utilidades SEO
2. Obtener meta tags específicos
3. Generar structured data
4. Implementar SEOHead
5. Agregar Breadcrumb si es necesario

// PATRÓN SEO ESTÁNDAR:
import { SEOHead } from '../atoms';
import { getPageMetaTags, getSpecificStructuredData } from '../utils/seo';

const metaTags = getPageMetaTags('pageName');
const structuredData = getSpecificStructuredData();

<SEOHead
  title={metaTags.title}
  description={metaTags.description}
  keywords={metaTags.keywords}
  canonical="https://ai4u.com.co/page"
  structuredData={structuredData}
/>
```

## 🎯 **Template para Futuras Consultas:**

```markdown
## CONTEXTO DEL PROYECTO
**Framework**: React 18 + TypeScript + MUI v6 + Tailwind CSS
**Shell**: PowerShell (Windows)
**Puerto**: 3002
**Estructura**: Atomic Design
**Build**: react-app-rewired + config-overrides.js
**SEO**: react-helmet-async + Structured Data

## UBICACIÓN DE TRABAJO
**Archivo**: src/components/shared/ui/[atoms|molecules|organisms]/ComponentName.tsx
**Importaciones necesarias**: 
- Hooks desde: ../../../../hooks
- Atoms desde: ../atoms
- Molecules desde: ../molecules
- MUI desde: @mui/material
- SEO utils desde: ../../../../utils/seo

## OBJETIVO
[Descripción específica de lo que quieres lograr]

## COMPONENTE DE REFERENCIA
[Pegar componente similar que ya funcione]

## RESTRICCIONES
- Paleta AI4U (8 colores principales)
- Diseño minimalista sin emojis
- Performance: lazy loading preferido
- TypeScript: flexible, funcionalidad primero
- i18n: usar useTranslations hook
- SEO: implementar meta tags y structured data
```

## 💡 **Información Crítica Adicional:**

### **Rutas de Navegación:**
- Home: `/` o `/home`
- Services: `/servicios`
- Gallery: `/Gallery`
- Why AI4U: `/por-que-ai4u`
- Success Cases: `/casos-de-uso`

### **Hooks Disponibles:**
- `useGalleryImages()`: Retorna `{ images, isLoading, error, reload }`
- `useLazyImage()`: Para carga optimizada
- `useWindowSize()`: Para responsive
- `useColors()`: Sistema de colores con contrast
- `useTranslations()`: Sistema de traducciones
- `useServices()`: Gestión de servicios

### **Componentes Base Disponibles:**
- `Button`, `Typography`, `Logo`, `GeometricIcon`, `PixelArtImage`, `SEOHead` (atoms)
- `Card`, `Gallery`, `ServiceCard`, `MetricCard`, `ChatButton`, `Breadcrumb` (molecules)
- `HeroSection`, `Navbar`, `Footer`, `ServicesFilter` (organisms)

### **Configuración Especial:**
- **react-app-rewired** para customización de webpack
- **Tailwind CSS** integrado con MUI
- **Sistema de traducciones** completo
- **Lazy loading** en todas las rutas
- **Testing** configurado con Jest
- **Deployment** optimizado para GitHub Pages
- **SEO completo** con react-helmet-async y structured data

### **SEO Implementado:**
- **Meta tags dinámicos** por página
- **Structured data** (Schema.org) completo
- **Breadcrumbs** semánticos
- **Open Graph** y Twitter Cards
- **Canonical URLs** dinámicas
- **Robots.txt** y sitemap.xml optimizados

Esta guía mejorada incluye toda la información necesaria para que futuros agentes puedan:
- **Entender la arquitectura completa** del proyecto
- **Implementar SEO correctamente** desde el inicio
- **Evitar errores comunes** de importación y JSX
- **Seguir patrones establecidos** consistentemente
- **Resolver problemas** de manera eficiente
- **Mantener calidad** del código a largo plazo
- **Utilizar todas las herramientas** disponibles en el proyecto
- **Implementar SEO dinámico** en nuevas páginas y componentes