import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout, ScrollToTop, BasicLoadingWrapper } from './components/shared/ui/layouts';
import { ErrorBoundary } from './components/shared/ui/molecules';
import { ThemeProvider, ServicesProvider } from './context';
import { ROUTES } from './utils/constants';
import './utils/errorTracking';
// Importar directamente sin lazy loading para debugging
import Home from './pages/Home';
import Services from './pages/Services';
import WhyAI4U from './pages/WhyAI4U';
import UseCases from './pages/UseCases';
import DesignSystem from './pages/DesignSystem';
import Pitch from './pages/Pitch';

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
                      element={<Home />} 
                    />

                    {/* Services Route */}
                    <Route 
                      path={ROUTES.SERVICES} 
                      element={<Services />} 
                    />

                    {/* Why AI4U Route */}
                    <Route 
                      path={ROUTES.WHY_AI4U} 
                      element={<WhyAI4U />} 
                    />

                    {/* Success Cases Route */}
                    <Route 
                      path={ROUTES.SUCCESS_CASES} 
                      element={<UseCases />} 
                    />

                    {/* Design System Route - Debe estar antes del fallback */}
                    <Route 
                      path={ROUTES.DESIGN_SYSTEM} 
                      element={<DesignSystem />} 
                    />

                    {/* Pitch Route */}
                    <Route 
                      path={ROUTES.PITCH} 
                      element={<Pitch />} 
                    />

                    {/* Fallback Route - Siempre al final */}
                    <Route path="*" element={<Home />} />
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
