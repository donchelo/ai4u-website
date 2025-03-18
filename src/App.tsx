import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhyAI4U from './pages/WhyAI4U';
import ThemeDemo from './pages/ThemeDemo';
import SuccessCases from './pages/SuccessCases';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';
import ThemeProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/soluciones" element={<Services />} />
            <Route path="/tienda-ai" element={<Home />} />
            <Route path="/por-que-ai4u" element={<WhyAI4U />} />
            <Route path="/casos-de-exito" element={<SuccessCases />} />
            <Route path="/theme-demo" element={<ThemeDemo />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 