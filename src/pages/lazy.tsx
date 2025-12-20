import { lazy } from 'react';

// Páginas principales con preloading optimizado
export const Home = lazy(() => import('./Home'));

export const Services = lazy(() => import('./Services'));

export const WhyAI4U = lazy(() => import('./WhyAI4U'));

export const UseCases = lazy(() => import('./UseCases'));

export const ComponentLibrary = lazy(() => import('./ComponentLibrary'));

export const Gallery = lazy(() => import('./Gallery'));

// Páginas de demo con lazy loading estándar
export const ColorSystemDemo = lazy(() => import('./ColorSystemDemo'));
export const MigrationDemo = lazy(() => import('./MigrationDemo'));
export const Fase3Demo = lazy(() => import('./Fase3Demo'));
export const MetricsDemo = lazy(() => import('./MetricsDemo'));
export const ThemeDemo = lazy(() => import('./ThemeDemo'));
export const InternationalizationDemo = lazy(() => import('./InternationalizationDemo'));
export const ServiceThumbnailsDemo = lazy(() => import('./ServiceThumbnailsDemo'));

// Preloading para páginas críticas
export const preloadHome = () => import('./Home');
export const preloadServices = () => import('./Services');
export const preloadGallery = () => import('./Gallery'); 