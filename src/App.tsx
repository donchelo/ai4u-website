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
  Gallery
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
                      path={ROUTES.GALLERY} 
                      element={
                        <LazyPage>
                          <Gallery />
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