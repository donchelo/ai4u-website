import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, ScrollToTop, LazyPage } from './components/shared/ui/layouts';
import ThemeProvider from './context/ThemeContext';
import ServicesProvider from './context/ServicesContext';
import { ROUTES } from './utils/constants';
import { Home, Services, WhyAI4U, SuccessCases, ComponentLibrary } from './pages/lazy';

function App() {
  return (
    <ThemeProvider>
      <ServicesProvider>
        <Router>
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
                    <SuccessCases />
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
            </Routes>
          </Layout>
        </Router>
      </ServicesProvider>
    </ThemeProvider>
  );
}

export default App; 