import { lazy } from 'react';

// Páginas principales con preloading optimizado
export const Home = lazy(() => import('./Home'));

export const Services = lazy(() => import('./Services'));

export const WhyAI4U = lazy(() => import('./WhyAI4U'));

export const UseCases = lazy(() => import('./UseCases'));

export const DesignSystem = lazy(() => import('./DesignSystem'));
export const Pitch = lazy(() => import('./Pitch'));

// Preloading para páginas críticas
export const preloadHome = () => import('./Home');
export const preloadServices = () => import('./Services'); 