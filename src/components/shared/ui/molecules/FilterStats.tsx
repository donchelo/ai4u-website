import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useColors } from '../../../../hooks';
import { GeometricIcon } from '../atoms';

interface FilterStatsProps {
  totalCount: number;
  filteredCount: number;
  activeFilters: string[];
}

const FilterStats: React.FC<FilterStatsProps> = ({
  totalCount,
  filteredCount,
  activeFilters
}) => {
  const colors = useColors();

  const hasActiveFilters = activeFilters.length > 0;
  const isFiltered = filteredCount !== totalCount;

  return (
    <Box sx={{
      py: 1,
      mb: 2
    }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <GeometricIcon
          type="dot"
          size="small"
          color={colors.contrast.text.secondary}
          variant="minimal"
        />
        
        <Typography variant="body2" sx={{ 
          color: colors.contrast.text.secondary,
          fontSize: '0.875rem'
        }}>
          {isFiltered ? `${filteredCount} de ${totalCount}` : `${totalCount}`} servicios
          {hasActiveFilters && (
            <span style={{ color: colors.contrast.text.primary }}>
              {' • '}{activeFilters.join(', ')}
            </span>
          )}
        </Typography>
      </Stack>
    </Box>
  );
};

export default FilterStats;
