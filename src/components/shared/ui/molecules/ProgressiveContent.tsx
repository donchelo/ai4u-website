import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { useColors } from '../../../../hooks';
import { BodyText, SmallText } from '../atoms';

interface ProgressiveContentProps {
  summary: React.ReactNode;
  details: React.ReactNode;
  showDetails?: boolean;
  onToggle?: (expanded: boolean) => void;
  variant?: 'inline' | 'separated' | 'card';
  maxHeight?: number;
}

const ProgressiveContent = ({
  summary,
  details,
  showDetails = false,
  onToggle,
  variant = 'inline',
  maxHeight = 200
}: ProgressiveContentProps) => {
  const [expanded, setExpanded] = useState(showDetails);
  const colors = useColors();

  const handleToggle = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onToggle?.(newExpanded);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'separated':
        return {
          container: {
            borderTop: `1px solid ${colors.contrast.divider}`,
            pt: 2,
            mt: 2
          }
        };
      case 'card':
        return {
          container: {
            background: colors.contrast.surface,
            border: `1px solid ${colors.contrast.divider}`,
            borderRadius: 2,
            p: 2,
            mt: 2
          }
        };
      default: // inline
        return {
          container: {
            mt: 1
          }
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <Box>
      {/* Summary Content - Clickable para expandir/contraer */}
      <Box 
        sx={{ 
          mb: expanded ? 2 : 0,
          cursor: 'pointer',
          '&:hover': {
            opacity: 0.8,
            transition: 'opacity 0.2s ease'
          }
        }}
        onClick={handleToggle}
      >
        {summary}
      </Box>

      {/* Details Content */}
      {expanded && (
        <Box sx={variantStyles.container}>
          <Box
            sx={{
              maxHeight: maxHeight,
              overflow: 'auto',
              transition: 'all 0.3s ease',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                background: colors.contrast.divider,
                borderRadius: '3px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: colors.contrast.text.secondary,
              }
            }}
          >
            {details}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProgressiveContent;
