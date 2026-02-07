import React from 'react';
import { Box, Stack, Chip } from '@mui/material';
import { useColors } from '../../../../hooks';
import { ServiceSuperCategory } from '../../../../types/service';

interface SuperCategoryFilterProps {
  selectedValue?: ServiceSuperCategory;
  onValueChange: (value?: ServiceSuperCategory) => void;
  options: Array<{
    label: string;
    value: ServiceSuperCategory | undefined;
  }>;
}

const SuperCategoryFilter: React.FC<SuperCategoryFilterProps> = ({
  selectedValue,
  onValueChange,
  options
}) => {
  const colors = useColors();

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ 
        mb: 2,
        fontSize: '1rem', 
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: colors.contrast.text.primary 
      }}>
        // TIPO DE SERVICIO
      </Box>
      
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        {options.map((option, index) => (
          <Chip
            key={index}
            label={option.label}
            size="medium"
            onClick={() => onValueChange(option.value)}
            sx={{
              borderRadius: 0,
              background: selectedValue === option.value 
                ? colors.contrast.text.primary 
                : 'transparent',
              color: selectedValue === option.value 
                ? colors.contrast.background 
                : colors.contrast.text.primary,
              border: `3px solid ${colors.contrast.text.primary}`,
              fontSize: '0.9rem',
              fontWeight: 400,
              textTransform: 'uppercase',
              px: 2,
              height: '40px',
              cursor: 'pointer',
              transition: 'all 0.1s ease',
              '&:hover': {
                background: selectedValue === option.value 
                  ? colors.contrast.text.primary 
                  : 'rgba(0,0,0,0.05)',
                transform: 'translate(-2px, -2px)',
                boxShadow: `4px 4px 0px ${colors.contrast.text.primary}`
              }
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SuperCategoryFilter;
