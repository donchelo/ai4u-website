# AI4U Website

Sitio web corporativo de AI4U construido con React, TypeScript y Vite. Implementa un sistema de diseño moderno con glassmorphism, optimización de performance y mejores prácticas de desarrollo.

## Inicio Rápido

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

### Scripts Disponibles

```bash
npm run dev              # Servidor de desarrollo (puerto 3002)
npm run build            # Build de producción
npm run preview          # Previsualizar build
npm run test             # Ejecutar tests con Vitest
npm run optimize-images  # Optimizar imágenes
npm run lighthouse       # Test de performance
```

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   └── shared/         # Componentes compartidos (UI, layouts, etc.)
├── context/            # Contextos de React (Theme, Language, Services)
├── data/               # Datos estáticos (servicios, traducciones, etc.)
├── docs/               # Documentación técnica
├── hooks/              # Custom hooks
├── pages/              # Páginas de la aplicación
├── types/              # Definiciones de TypeScript
└── utils/              # Utilidades y helpers
```

## Tecnologías

- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Material UI** - Componentes base
- **React Router** - Navegación
- **Vitest** - Testing

## Características Principales

- Sistema de diseño AI4U con glassmorphism
- Internacionalización (i18n)
- Optimización de imágenes y lazy loading
- PWA ready
- SEO optimizado
- Accesibilidad WCAG 2.1 AA
- Performance optimizada (code splitting, lazy loading)

## Documentación

La documentación detallada se encuentra en la carpeta `docs/`:

- **[Sistema de Diseño](src/docs/DESIGN_SYSTEM.md)** - Guía completa del sistema de diseño
- **[Internacionalización](src/docs/INTERNATIONALIZATION.md)** - Configuración de i18n
- **[Framework de Agentes](docs/agents/AI4U_AGENTS_USAGE_GUIDE.md)** - Guía de uso de agentes AI4U
- **[Guía del Proyecto](docs/AI4U_PROJECT_GUIDE.md)** - Documentación general del proyecto

## Configuración

### Variables de Entorno

Copia `env.example` a `.env` y configura las variables necesarias.

### Alias de Importación

El proyecto usa alias `@` para imports desde `src/`:

```typescript
import { Button } from '@/components/shared/ui/atoms';
```

## Deployment

### Automático (Recomendado)

El sitio se despliega automáticamente a [ai4u.com.co](https://ai4u.com.co) mediante GitHub Actions al hacer push a la rama `master`.

El workflow de CI/CD:
- Se ejecuta automáticamente en cada push a `master`
- Valida traducciones
- Ejecuta build optimizado
- Despliega a GitHub Pages
- Preserva el dominio personalizado (CNAME)

### Manual (Backup)

Si necesitas hacer un deploy manual:

```bash
npm run deploy:manual
```

Este comando ejecuta el build y despliega directamente.

**Nota:** El deploy manual es solo para casos de emergencia. El método recomendado es usar GitHub Actions desde la rama `master`.

## Mejores Prácticas

- Usar TypeScript estricto
- Componentes funcionales con hooks
- Lazy loading para páginas y componentes pesados
- Optimización de imágenes (WebP, lazy loading)
- Accesibilidad primero (ARIA, contraste, navegación por teclado)

## Contribución

1. Trabajar directamente sobre la rama `master`
2. Realizar cambios y commits descriptivos
3. Ejecutar tests y linting
4. Al hacer push, el despliegue es automático

## Licencia

MIT
