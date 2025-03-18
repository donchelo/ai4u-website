import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ThemeDemo from './pages/ThemeDemo';
import ThemeProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/soluciones" element={<Home />} />
            <Route path="/tienda-ai" element={<Home />} />
            <Route path="/blog" element={<Home />} />
            <Route path="/por-que-ai4u" element={<Home />} />
            <Route path="/casos-de-exito" element={<Home />} />
            <Route path="/theme-demo" element={<ThemeDemo />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 