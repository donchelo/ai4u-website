import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhyAI4U from './pages/WhyAI4U';
import SuccessCases from './pages/SuccessCases';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';
import ThemeProvider from './context/ThemeContext';
import { ROUTES } from './utils/constants';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.TIENDA_AI} element={<Home />} />
            <Route path={ROUTES.WHY_AI4U} element={<WhyAI4U />} />
            <Route path={ROUTES.SUCCESS_CASES} element={<SuccessCases />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 