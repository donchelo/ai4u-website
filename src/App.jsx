import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import ThemeDemo from './pages/ThemeDemo';
import ThemeProvider from './context/ThemeContext';

// Importando mediante require para evitar problemas de TypeScript con @remix-run/router
const { BrowserRouter: Router, Routes, Route } = require('react-router-dom');

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theme-demo" element={<ThemeDemo />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 