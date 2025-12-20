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
    <Box>
      <Box sx={{ 
        mb: 1.5,
        fontSize: '0.875rem', 
        fontWeight: 500,
        color: colors.contrast.text.primary 
      }}>
        Tipo de servicio
      </Box>
      
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {options.map((option, index) => (
          <Chip
            key={index}
            label={option.label}
            size="small"
            onClick={() => onValueChange(option.value)}
            sx={{
              background: selectedValue === option.value 
                ? colors.contrast.text.primary 
                : colors.contrast.background,
              color: selectedValue === option.value 
                ? colors.contrast.background 
                : colors.contrast.text.primary,
              border: `1px solid ${
                selectedValue === option.value 
                  ? colors.contrast.text.primary 
                  : colors.contrast.border
              }`,
              fontSize: '0.75rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                background: selectedValue === option.value 
                  ? colors.contrast.text.primary 
                  : colors.contrast.surface,
                borderColor: colors.contrast.text.secondary,
              }
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SuperCategoryFilter;
