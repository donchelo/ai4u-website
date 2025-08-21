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
      mb: 3,
      p: 2.5,
      background: colors.contrast.surface,
      border: `1px solid ${colors.contrast.border}`,
      borderRadius: 2
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
            variant="text"
            size="small"
            onClick={onClearFilters}
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
                borderColor: colors.contrast.text.secondary,
              },
              '&.Mui-focused': {
                borderColor: colors.contrast.text.secondary,
                borderWidth: '1px'
              }
            },
            '& .MuiOutlinedInput-input': {
              fontSize: '0.875rem',
              padding: '8px 12px',
              color: colors.contrast.text.primary,
              '&::placeholder': {
                color: colors.contrast.text.secondary,
                opacity: 0.7
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
                background: colors.contrast.text.secondary,
                color: '#FFFFFF',
                fontSize: '0.75rem',
                fontWeight: 500,
                '& .MuiChip-deleteIcon': {
                  color: '#FFFFFF',
                  '&:hover': {
                    color: '#FFFFFF',
                    opacity: 0.8
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
            minHeight: 36,
            '& .MuiTabs-scrollButtons': {
              '&.Mui-disabled': { opacity: 0.3 }
            },
            '& .MuiTab-root': {
              minHeight: 36,
              fontSize: '0.8rem',
              fontWeight: 500,
              textTransform: 'none',
              borderRadius: 1,
              mx: 0.25,
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