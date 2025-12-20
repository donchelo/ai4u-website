import React, { useState } from 'react';
import { Box, Collapse, IconButton } from '@mui/material';
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
}

const ExpandableSection = ({
  title,
  subtitle,
  children,
  defaultExpanded = false,
  variant = 'minimal',
  showIcon = true
}: ExpandableSectionProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const colors = useColors();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'card':
        return {
          container: {
            background: colors.contrast.surface,
            border: `1px solid ${colors.contrast.divider}`,
            borderRadius: 2,
            p: 3,
            transition: 'all 0.2s ease',
            '&:hover': {
              background: colors.helpers.state.hover
            }
          }
        };
      case 'bordered':
        return {
          container: {
            borderBottom: `1px solid ${colors.contrast.divider}`,
            pb: 2,
            mb: 2
          }
        };
      default: // minimal
        return {
          container: {
            mb: 3
          }
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <Box sx={variantStyles.container}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          userSelect: 'none'
        }}
        onClick={handleToggle}
      >
        <Box sx={{ flex: 1 }}>
          <H4 sx={{ 
            color: colors.contrast.text.primary,
            fontWeight: 600,
            fontSize: '1rem'
          }}>
            {title}
          </H4>
          {subtitle && (
            <BodyText sx={{ 
              color: colors.contrast.text.secondary,
              fontSize: '0.875rem',
              mt: 0.5
            }}>
              {subtitle}
            </BodyText>
          )}
        </Box>
        {showIcon && (
          <IconButton
            size="small"
            sx={{
              color: colors.contrast.text.secondary,
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
              '&:hover': {
                background: colors.helpers.state.hover
              }
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        )}
      </Box>
      
      <Collapse in={expanded} timeout={200}>
        <Box sx={{ 
          pt: 2,
          opacity: expanded ? 1 : 0,
          transition: 'opacity 0.2s ease'
        }}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

export default ExpandableSection;
