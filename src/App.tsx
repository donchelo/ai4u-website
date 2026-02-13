import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout, ScrollToTop, BasicLoadingWrapper } from './components/shared/ui/layouts';
import { ErrorBoundary } from './components/shared/ui/molecules';
import { ThemeProvider, ServicesProvider } from '@/context';
import { ROUTES } from './utils/constants';
import './utils/errorTracking';
// Importar directamente sin lazy loading para debugging
import Home from './pages/Home';
import Services from './pages/Services';
import WhyAI4U from './pages/WhyAI4U';
import Portfolio from './pages/Portfolio';
import SuperAI from './pages/SuperAI';
import DesignSystem from './pages/DesignSystem';
import Pitch from './pages/Pitch';
import PitchBancolombia from './pages/PitchBancolombia';
import PropuestaElBarril from './pages/PropuestaElBarril';
import PropuestaManufactura from './pages/PropuestaManufactura';

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

                    {/* Why AI4U Route (Merged with Cases) */}
                    <Route
                      path={ROUTES.WHY_AI4U}
                      element={<WhyAI4U />}
                    />

                    {/* Portfolio Route */}
                    <Route
                      path={ROUTES.PORTFOLIO}
                      element={<Portfolio />}
                    />

                    {/* Redirect Success Cases to Why AI4U */}
                    <Route
                      path="/casos-de-uso"
                      element={<Navigate to={ROUTES.WHY_AI4U} replace />}
                    />

                    {/* SuperAI Route */}
                    <Route
                      path={ROUTES.SUPER_AI}
                      element={<SuperAI />}
                    />

                    {/* Design System Route - Debe estar antes del fallback */}
                    <Route
                      path={ROUTES.DESIGN_SYSTEM}
                      element={<DesignSystem />}
                    />

                    <Route
                      path={ROUTES.PITCH}
                      element={<Pitch />}
                    />

                    {/* Pitch Bancolombia Route */}
                    <Route
                      path={ROUTES.PITCH_BANCOLOMBIA}
                      element={<PitchBancolombia />}
                    />

                    <Route
                      path={ROUTES.PROPUESTA_EL_BARRIL}
                      element={<PropuestaElBarril />}
                    />

                    {/* Propuesta Manufactura Route */}
                    <Route
                      path={ROUTES.PROPUESTA_MANUFACTURA}
                      element={<PropuestaManufactura />}
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
