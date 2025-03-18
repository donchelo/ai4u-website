import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
// Importando mediante require para evitar problemas con @remix-run/router
const { Link } = require('react-router-dom');

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-hot-orange">
              AI4U
            </Link>
          </div>

          {/* Menú para móviles */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-erie-black focus:outline-none"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menú de navegación para escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-erie-black hover:text-hot-orange font-medium transition-colors duration-200"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-erie-black hover:text-hot-orange font-medium transition-colors duration-200"
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/services"
              className="text-erie-black hover:text-hot-orange font-medium transition-colors duration-200"
            >
              Servicios
            </Link>
            <Link
              to="/contact"
              className="text-erie-black hover:text-hot-orange font-medium transition-colors duration-200"
            >
              Contacto
            </Link>
            <Link
              to="/theme-demo"
              className="text-erie-black hover:text-hot-orange font-medium transition-colors duration-200"
            >
              Demo Tema
            </Link>
          </nav>
        </div>

        {/* Menú móvil desplegable */}
        <div 
          className={`${
            isOpen ? 'max-h-60' : 'max-h-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="flex flex-col space-y-4 pb-4">
            <Link
              to="/"
              className="text-erie-black hover:text-hot-orange font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-erie-black hover:text-hot-orange font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/services"
              className="text-erie-black hover:text-hot-orange font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              to="/contact"
              className="text-erie-black hover:text-hot-orange font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <Link
              to="/theme-demo"
              className="text-erie-black hover:text-hot-orange font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Demo Tema
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 