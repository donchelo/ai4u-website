import React, { useEffect, useState, useRef } from 'react';
import { Box, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { useColors } from '../../../../hooks';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

// Top 10 idiomas más usados
const LANGUAGES = [
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'zh-CN', label: '中文', short: 'ZH' },
  { code: 'hi', label: 'हिन्दी', short: 'HI' },
  { code: 'ar', label: 'العربية', short: 'AR' },
  { code: 'pt', label: 'Português', short: 'PT' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'ja', label: '日本語', short: 'JA' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'fr', label: 'Français', short: 'FR' },
];

const TOP_LANGUAGES = LANGUAGES.map(l => l.code).join(',');

const GoogleTranslateWidget: React.FC = () => {
  const colors = useColors();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [currentLanguage, setCurrentLanguage] = useState<string>('ES');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    // Verificar si el script ya existe
    if (document.getElementById('google-translate-script')) {
      const lang = document.documentElement.lang || 'es';
      const langCode = lang.split('-')[0].toLowerCase();
      const found = LANGUAGES.find(l => l.code.toLowerCase().startsWith(langCode));
      setCurrentLanguage(found?.short || 'ES');
      return;
    }

    // Definir la función de inicialización global
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

          // Ocultar completamente el widget de Google
          setTimeout(() => {
            const element = document.getElementById('google_translate_element');
            if (element) {
              element.style.display = 'none';
            }
          }, 100);

          // Observar cambios en el idioma
          const observer = new MutationObserver(() => {
            const lang = document.documentElement.lang || 'es';
            const langCode = lang.split('-')[0].toLowerCase();
            const found = LANGUAGES.find(l => l.code.toLowerCase().startsWith(langCode));
            setCurrentLanguage(found?.short || 'ES');
          });

          observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['lang']
          });
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectLanguage = (langCode: string, langShort: string) => {
    // Buscar el iframe de Google Translate
    const iframe = document.querySelector<HTMLIFrameElement>('.goog-te-menu-frame');
    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        // Buscar el elemento del idioma y hacer clic
        const items = iframeDoc.querySelectorAll<HTMLElement>('.goog-te-menu2-item');
        items.forEach((item) => {
          const text = item.textContent?.toLowerCase() || '';
          const lang = LANGUAGES.find(l => l.code === langCode);
          if (lang && text.includes(lang.label.toLowerCase())) {
            item.click();
          }
        });
      }
    }

    // También intentar usando el select oculto de Google Translate
    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }

    setCurrentLanguage(langShort);
    handleClose();
  };

  // Tamaños responsivos
  const buttonSize = isMobile 
    ? { width: '32px', height: '28px', fontSize: '11px' } 
    : isTablet 
    ? { width: '36px', height: '30px', fontSize: '12px' } 
    : { width: '40px', height: '32px', fontSize: '13px' };

  // Estilos para ocultar el widget de Google
  const hideGoogleStyles = `
    .goog-te-banner-frame {
      display: none !important;
    }
    body {
      top: 0 !important;
    }
    #google_translate_element {
      display: none !important;
    }
    .goog-te-gadget {
      display: none !important;
    }
    .skiptranslate {
      display: none !important;
    }
    .goog-te-menu-frame {
      display: none !important;
    }
  `;

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      {/* Widget oculto de Google Translate */}
      <Box
        id="google_translate_element"
        sx={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
          width: 0,
          height: 0,
          overflow: 'hidden',
          zIndex: -1,
        }}
      />
      
      {/* Botón compacto */}
      <Box
        ref={buttonRef}
        component="button"
        onClick={handleClick}
        aria-label={`Cambiar idioma (actual: ${currentLanguage})`}
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: buttonSize.width,
          height: buttonSize.height,
          minWidth: buttonSize.width,
          padding: 0,
          color: colors.contrast.text.primary,
          border: `1px solid ${colors.contrast.border}`,
          borderRadius: '6px',
          transition: 'all 0.2s ease-in-out',
          backgroundColor: colors.contrast.surface,
          fontFamily: '"Red Hat Display", sans-serif',
          fontSize: buttonSize.fontSize,
          fontWeight: 600,
          cursor: 'pointer',
          '&:hover': {
            borderColor: colors.palette.accent,
            backgroundColor: colors.helpers.state.hover,
            transform: 'scale(1.05)',
          },
          '&:focus': {
            outline: `2px solid ${colors.palette.accent}`,
            outlineOffset: '2px',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        }}
      >
        {currentLanguage}
      </Box>

      {/* Menú personalizado */}
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 0.5,
              minWidth: '160px',
              maxWidth: '200px',
              backgroundColor: colors.contrast.surface,
              border: `1px solid ${colors.contrast.border}`,
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            },
          },
        }}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => selectLanguage(lang.code, lang.short)}
            selected={currentLanguage === lang.short}
            sx={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontSize: '14px',
              fontWeight: currentLanguage === lang.short ? 600 : 400,
              color: currentLanguage === lang.short 
                ? colors.palette.accent 
                : colors.contrast.text.primary,
              py: 1,
              px: 2,
              '&:hover': {
                backgroundColor: colors.helpers.state.hover,
              },
              '&.Mui-selected': {
                backgroundColor: colors.helpers.state.selected,
                '&:hover': {
                  backgroundColor: colors.helpers.state.hover,
                },
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                component="span"
                sx={{
                  fontWeight: 600,
                  minWidth: '24px',
                  color: currentLanguage === lang.short 
                    ? colors.palette.accent 
                    : colors.contrast.text.secondary,
                }}
              >
                {lang.short}
              </Box>
              <Box component="span">{lang.label}</Box>
            </Box>
          </MenuItem>
        ))}
      </Menu>

      <style>{hideGoogleStyles}</style>
    </Box>
  );
};

export default GoogleTranslateWidget;
