import React, { useState, useRef, useEffect } from 'react';
import { Box, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { useColors } from '../../../../hooks';
import { SHADOW_TOKENS } from '../tokens/theme';

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

const PAGE_LANGUAGE = 'es';

/** Obtiene el idioma actual desde cookie googtrans o desde document.documentElement.lang */
function getCurrentLanguageShort(): string {
  const cookieMatch = document.cookie.match(/googtrans=([^;]+)/);
  if (cookieMatch && cookieMatch[1]) {
    const value = cookieMatch[1].trim();
    if (value) {
      const parts = value.split('/').filter(Boolean);
      const target = parts[parts.length - 1];
      if (target && target !== PAGE_LANGUAGE) {
        const found = LANGUAGES.find(l => l.code === target || l.code.startsWith(target));
        if (found) return found.short;
      }
    }
  }
  const lang = document.documentElement.lang || PAGE_LANGUAGE;
  const langCode = lang.split('-')[0].toLowerCase();
  const found = LANGUAGES.find(l => l.code.toLowerCase().startsWith(langCode));
  return found?.short ?? 'ES';
}

interface GoogleTranslateWidgetProps {
  light?: boolean;
}

const GoogleTranslateWidget: React.FC<GoogleTranslateWidgetProps> = ({ light = false }) => {
  const colors = useColors();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [currentLanguage, setCurrentLanguage] = useState<string>(getCurrentLanguageShort);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scriptReady, setScriptReady] = useState(() => !!document.getElementById('google-translate-script'));
  const buttonRef = useRef<HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (document.getElementById('google-translate-script')) {
      setScriptReady(true);
      return;
    }
    const check = setInterval(() => {
      if (document.getElementById('google-translate-script')) {
        setScriptReady(true);
        clearInterval(check);
      }
    }, 200);
    const fallback = setTimeout(() => {
      clearInterval(check);
      setScriptReady(true);
    }, 5000);
    return () => {
      clearInterval(check);
      clearTimeout(fallback);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectLanguage = (langCode: string, _langShort: string) => {
    handleClose();

    // Volver al idioma original de la página: borrar cookie y recargar
    if (langCode === PAGE_LANGUAGE) {
      document.cookie = 'googtrans=; path=/; max-age=0';
      document.cookie = 'googtrans=; path=/; domain=' + window.location.hostname + '; max-age=0';
      window.location.reload();
      return;
    }

    // Establecer cookie en formato /origen/destino para que Google Translate aplique al recargar
    const googtransValue = `/${PAGE_LANGUAGE}/${langCode}`;
    document.cookie = `googtrans=${googtransValue}; path=/`;
    window.location.reload();
  };

  // Tamaños responsivos usando tokens
  const getButtonSize = (theme: any) => {
    if (isMobile) {
      return {
        width: theme.spacing(4),
        height: theme.spacing(3.5),
        fontSize: theme.typography.caption.fontSize
      };
    } else if (isTablet) {
      return {
        width: theme.spacing(4.5),
        height: theme.spacing(3.75),
        fontSize: theme.typography.body2.fontSize
      };
    } else {
      return {
        width: theme.spacing(5),
        height: theme.spacing(4),
        fontSize: theme.typography.body2.fontSize
      };
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      {/* Botón compacto */}
      <Box
        ref={buttonRef}
        component="button"
        onClick={handleClick}
        aria-label={`Cambiar idioma (actual: ${currentLanguage})`}
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disabled={!scriptReady}
        sx={(theme) => {
          const size = getButtonSize(theme);
          return {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: size.width,
            height: size.height,
            minWidth: size.width,
            padding: 0,
            color: light ? '#FFFFFF' : colors.contrast.text.primary,
            border: 'none',
            borderRadius: theme.spacing(0.75),
            transition: 'all 0.3s ease-in-out',
            backgroundColor: light ? 'transparent' : colors.contrast.surface,
            fontFamily: theme.typography.fontFamily,
            fontSize: size.fontSize,
            fontWeight: 400,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: light ? 'rgba(255, 255, 255, 0.1)' : colors.helpers.state.hover,
              transform: 'scale(1.05)',
            },
            '&:focus': {
              outline: `${theme.spacing(0.25)} solid ${colors.palette.black}`,
              outlineOffset: theme.spacing(0.25),
            },
            '&:active': {
              transform: 'scale(0.95)',
            },
          };
        }}
      >
        {scriptReady ? currentLanguage : '…'}
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
            sx: (theme) => ({
              mt: 0.5,
              minWidth: theme.spacing(20),
              maxWidth: theme.spacing(25),
              backgroundColor: colors.contrast.surface,
              border: `1px solid ${colors.contrast.border}`,
              borderRadius: theme.spacing(1),
              boxShadow: SHADOW_TOKENS.md,
            }),
          },
        }}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => selectLanguage(lang.code, lang.short)}
            selected={currentLanguage === lang.short}
            sx={(theme) => ({
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.body2.fontSize,
              fontWeight: currentLanguage === lang.short ? 600 : 400,
              color: currentLanguage === lang.short 
                ? colors.palette.black 
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
            })}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                component="span"
                sx={(theme) => ({
                  fontWeight: 400,
                  minWidth: theme.spacing(3),
                  color: currentLanguage === lang.short 
                    ? colors.palette.black 
                    : colors.contrast.text.secondary,
                })}
              >
                {lang.short}
              </Box>
              <Box component="span">{lang.label}</Box>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default GoogleTranslateWidget;
