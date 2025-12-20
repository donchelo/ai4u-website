import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useLanguage } from '../../../../context';
import { useColors } from '../../../../hooks';

interface LanguageToggleProps {
  variant?: 'icon' | 'text' | 'both';
  size?: 'small' | 'medium' | 'large';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  variant = 'both', 
  size = 'medium' 
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const colors = useColors();

  const getLanguageDisplay = () => {
    return language === 'es' ? 'EN' : 'ES';
  };

  const getLanguageName = () => {
    return language === 'es' ? t('language.english') : t('language.spanish');
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { fontSize: '0.75rem', padding: '4px 8px' };
      case 'large':
        return { fontSize: '1.1rem', padding: '8px 16px' };
      default:
        return { fontSize: '0.875rem', padding: '6px 12px' };
    }
  };

  const handleClick = () => {
    toggleLanguage();
  };

  if (variant === 'icon') {
    return (
      <IconButton
        onClick={handleClick}
        title={`${t('language.changeTo')} ${getLanguageName()}`}
        sx={{
          backgroundColor: colors.contrast.surface,
          color: colors.contrast.text.primary,
          border: `1px solid ${colors.contrast.border}`,
          borderRadius: '8px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: colors.helpers.state.hover,
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }
        }}
      >
        <Typography
          variant="button"
          sx={{
            fontWeight: 600,
            fontSize: getSizeStyles().fontSize
          }}
        >
          {getLanguageDisplay()}
        </Typography>
      </IconButton>
    );
  }

  if (variant === 'text') {
    return (
      <Box
        onClick={handleClick}
        title={`${t('language.changeTo')} ${getLanguageName()}`}
        sx={{
          cursor: 'pointer',
          padding: getSizeStyles().padding,
          backgroundColor: colors.contrast.surface,
          color: colors.contrast.text.primary,
          border: `1px solid ${colors.contrast.border}`,
          borderRadius: '8px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: colors.helpers.state.hover,
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }
        }}
      >
        <Typography
          variant="button"
          sx={{
            fontWeight: 600,
            fontSize: getSizeStyles().fontSize
          }}
        >
          {getLanguageDisplay()}
        </Typography>
      </Box>
    );
  }

  // Variant 'both' (default)
  return (
    <Box
      onClick={handleClick}
      title={`${t('language.changeTo')} ${getLanguageName()}`}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        padding: getSizeStyles().padding,
        backgroundColor: colors.contrast.surface,
        color: colors.contrast.text.primary,
        border: `1px solid ${colors.contrast.border}`,
        borderRadius: '8px',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          backgroundColor: colors.helpers.state.hover,
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }
      }}
    >
      <Typography
        variant="button"
        sx={{
          fontWeight: 600,
          fontSize: getSizeStyles().fontSize
        }}
      >
        {getLanguageDisplay()}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          fontSize: '0.7rem',
          opacity: 0.7
        }}
      >
        {getLanguageName()}
      </Typography>
    </Box>
  );
};

export default LanguageToggle; 