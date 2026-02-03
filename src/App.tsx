import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout, ScrollToTop, LazyPage, BasicLoadingWrapper } from './components/shared/ui/layouts';
import { ErrorBoundary } from './components/shared/ui/molecules';
import { ThemeProvider, ServicesProvider } from './context';
import { ROUTES } from './utils/constants';
import './utils/errorTracking';
import { 
  Home, 
  Services, 
  WhyAI4U, 
  UseCases, 
  DesignSystem,
  Pitch
} from './pages/lazy';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
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
                    {/* Home Route */}
                    <Route 
                      path={ROUTES.HOME} 
                      element={
                        <LazyPage>
                          <Home />
                        </LazyPage>
                      } 
                    />

                    {/* Services Route */}
                    <Route 
                      path={ROUTES.SERVICES} 
                      element={
                        <LazyPage>
                          <Services />
                        </LazyPage>
                      } 
                    />

                    {/* Why AI4U Route */}
                    <Route 
                      path={ROUTES.WHY_AI4U} 
                      element={
                        <LazyPage>
                          <WhyAI4U />
                        </LazyPage>
                      } 
                    />

                    {/* Success Cases Route */}
                    <Route 
                      path={ROUTES.SUCCESS_CASES} 
                      element={
                        <LazyPage>
                          <UseCases />
                        </LazyPage>
                      } 
                    />

                    {/* Design System Route - Debe estar antes del fallback */}
                    <Route 
                      path={ROUTES.DESIGN_SYSTEM} 
                      element={
                        <LazyPage>
                          <DesignSystem />
                        </LazyPage>
                      } 
                    />

                    {/* Pitch Route */}
                    <Route 
                      path={ROUTES.PITCH} 
                      element={
                        <LazyPage>
                          <Pitch />
                        </LazyPage>
                      } 
                    />

                    {/* Fallback Route - Siempre al final */}
                    <Route path="*" element={<LazyPage><Home /></LazyPage>} />
                  </Routes>
                </Layout>
              </Router>
            </BasicLoadingWrapper>
          </ServicesProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
