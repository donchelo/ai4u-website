import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout, ScrollToTop, LazyPage, BasicLoadingWrapper } from './components/shared/ui/layouts';
import { ErrorBoundary } from './components/shared/ui/molecules';
import { ThemeProvider, ServicesProvider, LanguageProvider } from './context';
import { ROUTES } from './utils/constants';
import './utils/errorTracking';
import { 
  Home, 
  Services, 
  WhyAI4U, 
  UseCases, 
  ComponentLibrary, 
  Gallery,
  ColorSystemDemo,
  MigrationDemo,
  Fase3Demo,
  MetricsDemo,
  ThemeDemo,
  InternationalizationDemo,
  ServiceThumbnailsDemo
} from './pages/lazy';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <LanguageProvider>
          <ThemeProvider>
            <ServicesProvider>
              <BasicLoadingWrapper>
                <Router
                  future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                  }}
                >
                  <ScrollToTop />
                  <Layout>
                  <Routes>
                    <Route 
                      path={ROUTES.HOME} 
                      element={
                        <LazyPage>
                          <Home />
                        </LazyPage>
                      } 
                    />
                    <Route 
                      path={ROUTES.SERVICES} 
                      element={
                        <LazyPage>
                          <Services />
                        </LazyPage>
                      } 
                    />
                    <Route 
                      path={ROUTES.TIENDA_AI} 
                      element={
                        <LazyPage>
                          <Home />
                        </LazyPage>
                      } 
                    />
                    <Route 
                      path={ROUTES.WHY_AI4U} 
                      element={
                        <LazyPage>
                          <WhyAI4U />
                        </LazyPage>
                      } 
                    />
                    <Route 
                      path={ROUTES.SUCCESS_CASES} 
                      element={
                        <LazyPage>
                          <UseCases />
                        </LazyPage>
                      } 
                    />
                    <Route 
                      path={ROUTES.COMPONENT_LIBRARY} 
                      element={
                        <LazyPage>
                          <ComponentLibrary />
                        </LazyPage>
                      } 
                    />
                    <Route 
                      path={ROUTES.GALLERY} 
                      element={
                        <LazyPage>
                          <Gallery />
                        </LazyPage>
                      } 
                    />
                    {/* Rutas de Demo */}
                    <Route 
                      path={ROUTES.COLOR_SYSTEM_DEMO} 
                      element={
                        <LazyPage>
                          <ColorSystemDemo />
                        </LazyPage>
                      } 
                    />
                    <Route 
                      path={ROUTES.MIGRATION_DEMO} 
                      element={
                        <LazyPage>
                          <MigrationDemo />
                        </LazyPage>
                      } 
                    />
                    <Route 
                      path={ROUTES.FASE3_DEMO} 
                      element={
                        <LazyPage>
                          <Fase3Demo />
                        </LazyPage>
                      } 
                    />
                    <Route 
                      path={ROUTES.METRICS_DEMO} 
                      element={
                        <LazyPage>
                          <MetricsDemo />
                        </LazyPage>
                      } 
                    />
                    <Route 
                      path={ROUTES.THEME_DEMO} 
                      element={
                        <LazyPage>
                          <ThemeDemo />
                        </LazyPage>
                      } 
                    />
                    <Route 
                      path={ROUTES.I18N_DEMO} 
                      element={
                        <LazyPage>
                          <InternationalizationDemo />
                        </LazyPage>
                      } 
                    />
                    <Route 
                      path={ROUTES.SERVICE_THUMBNAILS_DEMO} 
                      element={
                        <LazyPage>
                          <ServiceThumbnailsDemo />
                        </LazyPage>
                      } 
                    />
                  </Routes>
                  </Layout>
                </Router>
              </BasicLoadingWrapper>
            </ServicesProvider>
          </ThemeProvider>
        </LanguageProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App; 