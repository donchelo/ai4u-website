import { lazy } from 'react';

// Lazy imports para todas las páginas
export const Home = lazy(() => import('./Home'));
export const Services = lazy(() => import('./Services'));
export const WhyAI4U = lazy(() => import('./WhyAI4U'));
export const SuccessCases = lazy(() => import('./SuccessCases'));
export const ComponentLibrary = lazy(() => import('./ComponentLibrary'));
export const Gallery = lazy(() => import('./Gallery')); 