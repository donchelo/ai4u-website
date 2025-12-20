import React, { useEffect } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const GoogleTranslateWidget: React.FC = () => {
  useEffect(() => {
    // Verificar si el script ya existe para evitar duplicados
    if (document.getElementById('google-translate-script')) return;

    // Definir la función de inicialización global
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'es',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // Crear y añadir el script
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // No eliminamos el script al desmontar para evitar recargas innecesarias
      // pero limpiamos la función global si es necesario
    };
  }, []);

  return (
    <div className="google-translate-wrapper">
      <div id="google_translate_element" />
      <style>{`
        .google-translate-wrapper {
          display: inline-block;
        }
        /* Ocultar la barra superior de Google Translate */
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        /* Estilizar el botón para que se parezca más al diseño */
        .goog-te-gadget-simple {
          background-color: transparent !important;
          border: 1px solid rgba(0,0,0,0.1) !important;
          padding: 4px 8px !important;
          border-radius: 4px !important;
          font-family: inherit !important;
        }
        .goog-te-gadget-simple img {
          display: none !important;
        }
        .goog-te-menu-value span {
          color: inherit !important;
          font-family: inherit !important;
          font-weight: 500 !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleTranslateWidget;

