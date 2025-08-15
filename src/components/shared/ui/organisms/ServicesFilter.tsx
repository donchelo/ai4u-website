import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Chip,
  Stack,
  Tabs,
  Tab,
  Divider
} from '@mui/material';
import { Button, GeometricIcon } from '../atoms';
import { useColors } from '../../../../hooks';
import { ServiceCategory } from '../../../../types/service';

interface ServicesFilterProps {
  searchValue: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedTab: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  onClearFilters: () => void;
  filteredCount: number;
  categoryTabs: Array<{
    label: string;
    value: ServiceCategory | undefined;
  }>;
}

const ServicesFilter: React.FC<ServicesFilterProps> = ({
  searchValue,
  onSearchChange,
  selectedTab,
  onTabChange,
  onClearFilters,
  filteredCount,
  categoryTabs
}) => {
  const colors = useColors();

  return (
    <Box sx={{
      mb: 4,
      p: 2,
      background: colors.contrast.background,
      border: `1px solid ${colors.contrast.border}`,
      borderRadius: 1.5
    }}>
      {/* Header con contador */}
      <Stack 
        direction="row" 
        justifyContent="space-between" 
        alignItems="center" 
        sx={{ mb: 2 }}
      >
        <Box sx={{ 
          fontSize: '0.875rem', 
          fontWeight: 500,
          color: colors.contrast.text.primary 
        }}>
          {filteredCount} servicios
        </Box>
        
        {searchValue && (
          <Button
            variant="outline"
            size="small"
            onClick={onClearFilters}
            startIcon={
              <GeometricIcon 
                type="clear" 
                size="small" 
                color={colors.contrast.text.secondary} 
                variant="minimal" 
              />
            }
            sx={{
              color: colors.contrast.text.secondary,
              fontSize: '0.75rem',
              minWidth: 'auto',
              px: 1,
              py: 0.5,
              '&:hover': {
                color: colors.contrast.text.primary,
                background: 'transparent'
              }
            }}
          >
            Limpiar
          </Button>
        )}
      </Stack>

      {/* Campo de búsqueda */}
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Buscar servicios..."
          value={searchValue}
          onChange={onSearchChange}
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              background: colors.contrast.background,
              borderRadius: 1.5,
              border: `1px solid ${colors.contrast.border}`,
              transition: 'all 0.2s ease',
              '&:hover': {
                borderColor: colors.contrast.text.primary,
              },
              '&.Mui-focused': {
                borderColor: colors.contrast.text.primary,
                borderWidth: '2px'
              }
            },
            '& .MuiOutlinedInput-input': {
              fontSize: '0.875rem',
              padding: '10px 12px',
              color: colors.contrast.text.primary,
              '&::placeholder': {
                color: colors.contrast.text.secondary,
                opacity: 0.8
              }
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GeometricIcon
                  type="search"
                  size="small"
                  color={colors.contrast.text.secondary}
                  variant="minimal"
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Filtros activos */}
      {searchValue && (
        <Box sx={{ mb: 2 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip
              label={`"${searchValue}"`}
              size="small"
              onDelete={() => onSearchChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)}
              sx={{
                background: colors.contrast.text.primary,
                color: colors.contrast.background,
                fontSize: '0.75rem',
                fontWeight: 500,
                '& .MuiChip-deleteIcon': {
                  color: colors.contrast.background,
                  '&:hover': {
                    color: colors.contrast.surface
                  }
                }
              }}
            />
          </Stack>
        </Box>
      )}

      <Divider sx={{ my: 2, borderColor: colors.contrast.divider }} />

      {/* Tabs de categorías */}
      <Box>
        <Tabs
          value={selectedTab}
          onChange={onTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            minHeight: 40,
            '& .MuiTabs-scrollButtons': {
              '&.Mui-disabled': { opacity: 0.3 }
            },
            '& .MuiTab-root': {
              minHeight: 40,
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'none',
              borderRadius: 1,
              mx: 0.5,
              transition: 'all 0.2s ease',
              color: colors.contrast.text.secondary,
              background: 'transparent',
              border: `1px solid transparent`,
              '&:hover': {
                background: colors.contrast.background,
                color: colors.contrast.text.primary,
                border: `1px solid ${colors.contrast.border}`
              },
              '&.Mui-selected': {
                background: colors.contrast.text.primary,
                color: colors.contrast.background,
                fontWeight: 600,
                border: `1px solid ${colors.contrast.text.primary}`,
                '&:hover': {
                  background: colors.contrast.text.primary,
                  color: colors.contrast.background
                }
              }
            },
            '& .MuiTabs-indicator': {
              display: 'none'
            }
          }}
        >
          {categoryTabs.map((tab, index) => (
            <Tab 
              key={index} 
              label={tab.label}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default ServicesFilter; 