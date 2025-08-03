import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Chip,
  Stack,
  Tabs,
  Tab
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
      p: 4,
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      border: `1px solid ${colors.contrast.border}`,
      borderRadius: 3,
      boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
    }}>
      {/* Search and Controls */}
      <Box sx={{ mb: 4 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center">
          {/* Search Field con glassmorphism */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <TextField
              fullWidth
              label="Buscar servicios"
              placeholder="Buscar servicios por nombre, descripción o tags..."
              value={searchValue}
              onChange={onSearchChange}
              aria-label="Campo de búsqueda de servicios"
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  border: `1px solid ${colors.contrast.border}`,
                  '&:hover': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: colors.palette.orange,
                      borderWidth: '1px'
                    }
                  },
                  '&.Mui-focused': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: colors.palette.orange,
                      borderWidth: '2px'
                    }
                  }
                },
                '& .MuiOutlinedInput-input': {
                  fontSize: '1rem',
                  padding: '12px 16px',
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

          {/* Controls con glassmorphism */}
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
            <Button
              variant="glass"
              size="small"
              onClick={onClearFilters}
              startIcon={<GeometricIcon type="clear" size="small" color={colors.contrast.text.secondary} variant="minimal" />}
              sx={{
                borderRadius: 2,
                px: 2,
                py: 1,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(16px)',
                border: `1px solid ${colors.contrast.border}`,
                color: colors.contrast.text.secondary,
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: colors.contrast.text.primary
                }
              }}
            >
              Limpiar filtros
            </Button>
            <Chip
              label={`${filteredCount} servicios`}
              size="small"
              sx={{
                background: `linear-gradient(135deg, ${colors.palette.orange}, ${colors.palette.orange}dd)`,
                backdropFilter: 'blur(10px)',
                color: colors.palette.white,
                fontWeight: 700,
                border: `1px solid ${colors.palette.orange}60`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${colors.palette.orange}ff, ${colors.palette.orange}ee)`,
                }
              }}
            />
          </Stack>
        </Stack>
      </Box>

      {/* Category Tabs con glassmorphism */}
      <Box>
        <Tabs
          value={selectedTab}
          onChange={onTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTabs-scrollButtons': {
              '&.Mui-disabled': { opacity: 0.3 }
            },
            '& .MuiTab-root': {
              minHeight: 48,
              fontSize: '0.9rem',
              fontWeight: 500,
              textTransform: 'none',
              borderRadius: 2,
              mx: 0.5,
              transition: 'all 0.3s ease',
              color: colors.contrast.text.secondary,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(8px)',
              border: `1px solid transparent`,
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.15)',
                color: colors.contrast.text.primary,
                border: `1px solid ${colors.contrast.border}`
              },
              '&.Mui-selected': {
                background: `linear-gradient(135deg, ${colors.palette.orange}20, ${colors.palette.orange}10)`,
                color: colors.palette.orange,
                fontWeight: 600,
                border: `1px solid ${colors.palette.orange}40`,
                backdropFilter: 'blur(16px)'
              }
            },
            '& .MuiTabs-indicator': {
              height: 2,
              background: `linear-gradient(90deg, ${colors.palette.orange}, ${colors.palette.orange}dd)`,
              borderRadius: 1
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

      {/* Active Filters Display con glassmorphism */}
      {searchValue && (
        <Box sx={{ mt: 3, pt: 3, borderTop: `1px solid ${colors.contrast.divider}` }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box sx={{ fontSize: '0.9rem', color: colors.contrast.text.secondary, fontWeight: 500 }}>
              Filtros activos:
            </Box>
            <Chip
              label={`Búsqueda: "${searchValue}"`}
              size="small"
              onDelete={() => onSearchChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)}
              sx={{
                background: `linear-gradient(135deg, ${colors.palette.orange}20, ${colors.palette.orange}10)`,
                backdropFilter: 'blur(10px)',
                color: colors.palette.orange,
                border: `1px solid ${colors.palette.orange}40`,
                fontWeight: 600,
                '&:hover': {
                  background: `linear-gradient(135deg, ${colors.palette.orange}30, ${colors.palette.orange}20)`,
                }
              }}
            />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default ServicesFilter; 