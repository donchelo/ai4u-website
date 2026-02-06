import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Si hay un hash, intentamos desplazarnos al elemento después de un pequeño delay
      // para asegurar que el contenido se haya renderizado
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Si no se encuentra inmediatamente, reintentamos brevemente
        const timer = setTimeout(() => {
          const retryElement = document.getElementById(id);
          if (retryElement) {
            retryElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      // Si no hay hash, scroll al inicio
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop; 