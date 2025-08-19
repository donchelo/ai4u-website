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
      {/* Summary Content */}
      <Box sx={{ mb: expanded ? 2 : 0 }}>
        {summary}
      </Box>

      {/* Details Content */}
      {expanded && (
        <Box sx={variantStyles.container}>
          <Box
            sx={{
              maxHeight: maxHeight,
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            {details}
          </Box>
        </Box>
      )}

      {/* Toggle Button */}
      <Box sx={{ mt: 1 }}>
        <Button
          variant="text"
          size="small"
          onClick={handleToggle}
          sx={{
            color: colors.palette.accent,
            textTransform: 'none',
            p: 0,
            minWidth: 'auto',
            fontSize: '0.875rem',
            fontWeight: 500,
            '&:hover': {
              background: 'transparent',
              textDecoration: 'underline'
            }
          }}
        >
          {expanded ? 'Ver menos' : 'Ver más'}
        </Button>
      </Box>
    </Box>
  );
};

export default ProgressiveContent;
