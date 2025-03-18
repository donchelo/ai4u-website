import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-hot-orange">
            AI4U
          </Link>
          
          {/* Botón de menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menú de escritorio */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-erie-black hover:text-hot-orange">
              Inicio
            </Link>
            <Link to="/about" className="text-erie-black hover:text-hot-orange">
              Sobre Nosotros
            </Link>
            <Link to="/services" className="text-erie-black hover:text-hot-orange">
              Servicios
            </Link>
            <Link to="/contact" className="text-erie-black hover:text-hot-orange">
              Contacto
            </Link>
            <Link to="/theme-demo" className="text-moderate-blue hover:text-hot-orange">
              Demo Tema
            </Link>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-erie-black hover:text-hot-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="text-erie-black hover:text-hot-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link 
                to="/services" 
                className="text-erie-black hover:text-hot-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                to="/contact" 
                className="text-erie-black hover:text-hot-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link 
                to="/theme-demo" 
                className="text-moderate-blue hover:text-hot-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo Tema
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 