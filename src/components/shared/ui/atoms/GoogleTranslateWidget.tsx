import React, { useEffect } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useColors } from '../../../../hooks';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

// Top 10 idiomas más usados en orden de popularidad
const TOP_LANGUAGES = 'es,en,zh-CN,hi,ar,pt,ru,ja,de,fr';

const GoogleTranslateWidget: React.FC = () => {
  const colors = useColors();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    // Verificar si el script ya existe
    if (document.getElementById('google-translate-script')) {
      return;
    }

    // Definir la función de inicialización global ANTES de cargar el script
    window.googleTranslateElementInit = () => {
      try {
        if (window.google && window.google.translate && document.getElementById('google_translate_element')) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'es',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              includedLanguages: TOP_LANGUAGES,
              multilanguagePage: false,
            },
            'google_translate_element'
          );
        }
      } catch (error) {
        console.error('Error inicializando Google Translate:', error);
      }
    };

    // Crear y añadir el script
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    
    document.body.appendChild(script);
  }, []);

  // Tamaños responsivos
  const widgetSize = isMobile ? { minWidth: '100px', fontSize: '12px' } : 
                     isTablet ? { minWidth: '110px', fontSize: '13px' } : 
                     { minWidth: '120px', fontSize: '14px' };

  // Generar estilos dinámicos basados en el sistema de diseño
  const dynamicStyles = `
    /* Ocultar la barra superior de Google Translate */
    .goog-te-banner-frame {
      display: none !important;
    }
    body {
      top: 0 !important;
    }
    /* Estilizar el botón con el sistema de diseño AI4U */
    .goog-te-gadget-simple {
      background-color: ${colors.contrast.surface} !important;
      border: 1px solid ${colors.contrast.border} !important;
      padding: ${isMobile ? '4px 8px' : '6px 12px'} !important;
      border-radius: 8px !important;
      font-family: "Red Hat Display", sans-serif !important;
      font-size: ${widgetSize.fontSize} !important;
      font-weight: 500 !important;
      min-width: ${widgetSize.minWidth} !important;
      max-width: ${isMobile ? '140px' : '180px'} !important;
      cursor: pointer !important;
      transition: all 0.2s ease-in-out !important;
      color: ${colors.contrast.text.primary} !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }
    .goog-te-gadget-simple:hover {
      border-color: ${colors.palette.accent} !important;
      background-color: ${colors.helpers.state.hover} !important;
    }
    .goog-te-gadget-simple:focus {
      outline: 2px solid ${colors.palette.accent} !important;
      outline-offset: 2px !important;
    }
    .goog-te-gadget-simple img {
      display: none !important;
    }
    .goog-te-menu-value {
      color: ${colors.contrast.text.primary} !important;
      font-family: "Red Hat Display", sans-serif !important;
      font-size: ${widgetSize.fontSize} !important;
    }
    .goog-te-menu-value span {
      color: ${colors.contrast.text.primary} !important;
      font-family: "Red Hat Display", sans-serif !important;
      font-weight: 500 !important;
      font-size: ${widgetSize.fontSize} !important;
    }
    .goog-te-gadget {
      font-family: "Red Hat Display", sans-serif !important;
    }
    #google_translate_element {
      display: inline-block !important;
      min-width: ${widgetSize.minWidth} !important;
      min-height: ${isMobile ? '28px' : '32px'} !important;
      max-width: 100% !important;
    }
    /* Estilizar el menú desplegable */
    .goog-te-menu-frame {
      z-index: 9999 !important;
      font-family: "Red Hat Display", sans-serif !important;
      max-width: ${isMobile ? '280px' : '320px'} !important;
    }
    .goog-te-menu-value {
      font-family: "Red Hat Display", sans-serif !important;
    }
    /* Estilizar los items del menú */
    .goog-te-menu2-item {
      font-family: "Red Hat Display", sans-serif !important;
      color: ${colors.contrast.text.primary} !important;
      padding: ${isMobile ? '8px 12px' : '10px 16px'} !important;
      font-size: ${isMobile ? '13px' : '14px'} !important;
    }
    .goog-te-menu2-item:hover {
      background-color: ${colors.helpers.state.hover} !important;
    }
    .goog-te-menu2-item-selected {
      background-color: ${colors.helpers.state.selected} !important;
    }
    /* Responsive para móvil */
    @media (max-width: 600px) {
      .goog-te-gadget-simple {
        padding: 4px 6px !important;
        font-size: 12px !important;
        min-width: 90px !important;
      }
      .goog-te-menu-value span {
        font-size: 12px !important;
      }
    }
  `;

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        minWidth: widgetSize.minWidth,
        minHeight: isMobile ? '28px' : '32px',
        maxWidth: '100%',
        ...(isMobile && {
          width: '100%',
          justifyContent: 'center',
        }),
      }}
    >
      <Box
        id="google_translate_element"
        sx={{
          display: 'inline-block',
          width: '100%',
          minWidth: widgetSize.minWidth,
          minHeight: isMobile ? '28px' : '32px',
        }}
      />
      <style>{dynamicStyles}</style>
    </Box>
  );
};

export default GoogleTranslateWidget;
