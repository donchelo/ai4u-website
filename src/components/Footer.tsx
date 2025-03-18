import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI4U</h3>
            <p className="text-gray-300">
              Transformando el futuro con inteligencia artificial.
            </p>
          </div>
          <nav aria-label="Enlaces rápidos">
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <address className="not-italic">
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="mailto:info@ai4u.com" className="hover:text-white transition-colors">
                    info@ai4u.com
                  </a>
                </li>
                <li>
                  <a href="tel:+34123456789" className="hover:text-white transition-colors">
                    +34 123 456 789
                  </a>
                </li>
                <li>Madrid, España</li>
              </ul>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {currentYear} AI4U. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 