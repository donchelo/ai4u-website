# Auditoría de velocidad del website AI4U y solución por etapas

## 1. Resumen ejecutivo

Este documento recoge la auditoría de velocidad del sitio [www.ai4u.com.co](https://www.ai4u.com.co) y propone una solución robusta por etapas (Quick wins, Assets y bundles, Caché y monitoreo) para mejorar FCP, LCP y CLS sin romper la arquitectura actual.

---

## 2. Estado actual (auditoría)

### 2.1 Fortalezas

| Área | Implementación |
|------|----------------|
| **Build** | Vite, `sourcemap: false` en producción |
| **Code splitting** | Rutas lazy en `src/pages/lazy.tsx`; chunks manuales en `vite.config.ts`: `react-vendor`, `mui-vendor` |
| **Imágenes** | WebP en `public/assets/images/optimized/`, hooks `useImageOptimization` y `useLazyImage`, componentes `OptimizedImageAdvanced` y `LazyImage`; script `optimize-images.js` |
| **Monitoreo** | Core Web Vitals en `usePerformanceMonitoring.ts`; uso en `Home.tsx`; `analytics.trackPerformanceIssue` |
| **Recursos externos** | Preconnect para fonts, Google Analytics y gtag en `index.html` |
| **Lighthouse** | Script `npm run lighthouse` en `package.json` |

### 2.2 Problemas detectados

| Prioridad | Problema | Impacto | Archivos |
|-----------|----------|---------|----------|
| **Alta** | Fuentes cargadas con `@import` en CSS | Bloquea el render; compite con el preload del HTML | `src/index.css` (líneas 2-3) |
| **Alta** | Videos sin `preload="metadata"` y sin lazy load | Descarga completa del vídeo; compite con LCP | `ServicesPremiumHero.tsx` |
| **Alta** | Sin analizador de bundle ni presupuestos | No se controla el tamaño de JS; riesgo de regresiones | `vite.config.ts`, `package.json` |
| **Media** | Chunk `mui-vendor` agrupa MUI + icons + Emotion | Chunk grande; icons podrían ir en chunk aparte | `vite.config.ts` |
| **Media** | Sin cabeceras de caché explícitas en Vercel | Depende del comportamiento por defecto del host | `vercel.json` |
| **Media** | Monitoreo de performance solo en Home | Otras rutas sin métricas | `Home.tsx` vs `Services.tsx`, etc. |
| **Baja** | Sin critical CSS | FCP podría mejorar con CSS above-the-fold inline | Build (Vite) |
| **Baja** | Sin srcset responsive en hero/servicios | Posible ahorro en datos en móvil | Componentes de imagen |

### 2.3 Recursos críticos identificados

- **LCP en Home**: primera imagen del hero (`/assets/images/hero-image.png`), ya marcada con `priority` en `LazyImage`. Candidata a preload en el HTML.
- **Fuentes**: Red Hat Display (300, 400, 500, 600, 700, 900) y Fira Mono (400, 500, 700). Actualmente dos `@import` en CSS + preload en HTML (duplicidad y bloqueo).

---

## 3. Solución por etapas

### Etapa 1: Quick wins (1–2 días)

**Objetivo**: Reducir FCP/LCP y contenido bloqueante.

| # | Tarea | Acción |
|---|--------|--------|
| 1.1 | **Fuentes** | Eliminar los `@import` de Google Fonts de `src/index.css`. Dejar las fuentes solo vía `index.html`: un único `<link rel="stylesheet">` con `display=swap` y, si es posible, solo los pesos usados (ej. 300, 400, 600, 900 para Red Hat Display; 400, 500 para Fira Mono) para reducir tamaño. |
| 1.2 | **Videos** | En `ServicesPremiumHero.tsx`: añadir `preload="metadata"` a los `<video>`. Opcional: cargar `src` solo cuando el vídeo entre en viewport (Intersection Observer) para no competir con LCP. |
| 1.3 | **Preload LCP** | En `index.html`, añadir `<link rel="preload" as="image" href="/assets/images/hero-image.png">` (o la URL final del hero si se sirve desde otra ruta/optimized). |

**Criterio de éxito**: Mejora medible en FCP y LCP en Lighthouse (objetivo >10–15% en escenario típico).

---

### Etapa 2: Assets y bundles (3–5 días)

**Objetivo**: Controlar tamaño de JS/CSS y optimizar carga de medios.

| # | Tarea | Acción |
|---|--------|--------|
| 2.1 | **Análisis de bundle** | Añadir `rollup-plugin-visualizer` (o similar) como devDependency. Configurarlo en `vite.config.ts` para generar reporte al hacer build (por ejemplo solo cuando `ANALYZE=true`). Añadir script `build:analyze` en `package.json`. |
| 2.2 | **Ajuste de chunks** | Tras revisar el reporte: si `@mui/icons-material` pesa mucho, crear chunk `mui-icons` en `vite.config.ts`. Verificar que las páginas importen solo los iconos necesarios (tree-shaking). |
| 2.3 | **Imágenes** | Opcional: en hero y servicios, usar `srcset`/`sizes` con los tamaños ya generados en `public/assets/images/optimized/` (mapeo JSON) si el hook/componente lo permite o se extiende. |
| 2.4 | **Videos** | Opcional: comprimir los MP4 de `public/assets/videos/` (ffmpeg u otra herramienta) y, si se cambian rutas, actualizar `src/data/services.ts`. Opcional: WebM + `<source>` y documentar en guía de assets. |

**Criterio de éxito**: Tamaño de JS conocido; chunks acotados; LCP estable o mejorado.

---

### Etapa 3: Caché, critical path y monitoreo (2–4 días)

**Objetivo**: Caché explícita, observabilidad y, opcionalmente, critical CSS.

| # | Tarea | Acción |
|---|--------|--------|
| 3.1 | **Caché en Vercel** | En `vercel.json`, definir cabeceras: assets bajo `/assets/**` (o la ruta que use el build) con caché larga (ej. 1 año); `index.html` con no-cache o corta duración, coherente con los meta actuales. |
| 3.2 | **Critical CSS** | Opcional: evaluar plugin (p. ej. critters) para Vite; inline de CSS above-the-fold y carga diferida del resto. Medir FCP antes/después; puede ser delicado con MUI/Emotion. |
| 3.3 | **Monitoreo en producción** | Asegurar que `usePerformanceMonitoring` se use en rutas principales (Services, WhyAI4U, UseCases, etc.). Enviar Core Web Vitals (LCP, FID, CLS) como eventos a analytics para RUM básico y umbrales (ej. LCP > 2.5s). |
| 3.4 | **Presupuestos** | Opcional: tras tener el analizador, definir tamaños máximos por chunk y script/CI que falle el build si se superan. |

**Criterio de éxito**: Caché explícita; métricas CWV visibles en producción; opcionalmente FCP mejorado y builds con presupuestos.

---

## 4. Orden de implementación y validación

1. **Etapa 1** → Validar con `npm run lighthouse` (Performance, FCP, LCP, CLS).
2. **Etapa 2** → Ejecutar `build:analyze`, revisar reporte y aplicar cambios de chunks/imágenes/vídeos; volver a medir.
3. **Etapa 3** → Desplegar y comprobar cabeceras y eventos en analytics; opcionalmente comparar FCP con/sin critical CSS.

Se recomienda mantener en este mismo doc (o en un anexo) los resultados antes/después de cada etapa y las decisiones tomadas (por ejemplo: “no usar critical CSS por conflicto con MUI”).

---

## 5. Archivos clave por etapa

| Etapa | Archivos |
|-------|----------|
| 1 | `src/index.css`, `index.html`, `src/components/shared/ui/organisms/ServicesPremiumHero.tsx` |
| 2 | `vite.config.ts`, `package.json`, `src/data/services.ts`, componentes que usen `OptimizedImageAdvanced`/`LazyImage` |
| 3 | `vercel.json`, `vite.config.ts`, `src/hooks/usePerformanceMonitoring.ts`, páginas para añadir monitoreo |

---

## 6. Referencias

- [IMAGE_OPTIMIZATION_GUIDE.md](IMAGE_OPTIMIZATION_GUIDE.md) – Sistema de imágenes y WebP.
- [usePerformanceMonitoring](../src/hooks/usePerformanceMonitoring.ts) – Umbrales y Core Web Vitals.
- [Vite build options](https://vitejs.dev/config/build-options.html) – `manualChunks`, plugins.
