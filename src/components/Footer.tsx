import React from 'react';
import { Link } from 'react-router-dom';
import { SmallText } from './ui/Typography';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-erie-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-mint-cream">AI4U</h3>
            <p className="text-cadet-gray">
              Transformando el futuro con inteligencia artificial.
            </p>
          </div>
          <nav aria-label="Enlaces rápidos">
            <h3 className="text-lg font-semibold mb-4 text-mint-cream">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cadet-gray hover:text-hot-orange transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cadet-gray hover:text-hot-orange transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-cadet-gray hover:text-hot-orange transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cadet-gray hover:text-hot-orange transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/theme-demo" className="text-cadet-gray hover:text-hot-orange transition-colors">
                  Demo Tema
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-mint-cream">Contacto</h3>
            <ul className="space-y-2 text-cadet-gray">
              <li>info@ai4u.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Calle Tecnología 123, Madrid</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <SmallText className="text-cadet-gray">
            © {currentYear} AI4U. Todos los derechos reservados.
          </SmallText>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 