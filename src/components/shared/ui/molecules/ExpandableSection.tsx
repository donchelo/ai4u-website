import React, { useState } from 'react';
import { Box, Collapse, IconButton, SxProps, Theme } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useColors } from '../../../../hooks';
import { H4, BodyText } from '../atoms';

interface ExpandableSectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
  variant?: 'minimal' | 'card' | 'bordered';
  showIcon?: boolean;
  sx?: SxProps<Theme>;
}

const ExpandableSection = ({
  title,
  subtitle,
  children,
  defaultExpanded = false,
  variant = 'minimal',
  showIcon = true,
  sx = {},
}: ExpandableSectionProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const colors = useColors();
  const isDarkMode = colors.effectiveMode === 'dark';

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'card':
        return {
          container: {
            background: isDarkMode ? colors.palette.black : colors.palette.white,
            border: `3px solid ${isDarkMode ? colors.palette.white : colors.palette.black}`,
            color: isDarkMode ? colors.palette.white : colors.palette.black,
            borderRadius: 0,
            p: 4,
            transition: 'all 0.1s ease',
            '&:hover': {
              transform: 'translate(-4px, -4px)',
              boxShadow: isDarkMode ? '6px 6px 0px #FFFFFF' : '6px 6px 0px #000000',
            }
          }
        };
      case 'bordered':
        return {
          container: {
            borderBottom: `3px solid ${isDarkMode ? colors.palette.white : colors.palette.black}`,
            color: isDarkMode ? colors.palette.white : colors.palette.black,
            pb: 3,
            mb: 3
          }
        };
      default: // minimal
        return {
          container: {
            color: 'inherit',
            mb: 4
          }
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <Box sx={{ ...variantStyles.container, ...sx }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          userSelect: 'none',
          py: 2
        }}
        onClick={handleToggle}
      >
        <Box sx={{ flex: 1 }}>
          <H4 sx={{ 
            color: 'inherit',
            fontWeight: 400,
            fontSize: '1.2rem',
            textTransform: 'none',
            letterSpacing: '0em'
          }}>
            {title}
          </H4>
          {subtitle && (
            <BodyText sx={{ 
              color: 'inherit',
              opacity: 0.8,
              fontSize: '1rem',
              mt: 1
            }}>
              {subtitle}
            </BodyText>
          )}
        </Box>
        {showIcon && (
          <IconButton
            size="medium"
            sx={{
              color: 'inherit',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
              opacity: 0.5,
              '&:hover': {
                opacity: 1,
                background: 'transparent'
              }
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        )}
      </Box>
      
      <Collapse in={expanded} timeout={100}>
        <Box sx={{ 
          pt: 3,
          borderTop: expanded ? `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}` : 'none'
        }}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

export default ExpandableSection;
