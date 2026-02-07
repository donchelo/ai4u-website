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
      p: 4,
      background: colors.contrast.background,
      border: `4px solid ${colors.contrast.text.primary}`,
      borderRadius: 0,
      transition: 'all 0.2s ease',
      '&:hover': {
        boxShadow: `8px 8px 0px ${colors.contrast.text.primary}`,
        transform: 'translate(-4px, -4px)'
      }
    }}>
      {/* Header con contador */}
      <Stack 
        direction="row" 
        justifyContent="space-between" 
        alignItems="center" 
        sx={{ mb: 3 }}
      >
        <Box sx={{ 
          fontSize: '1.25rem', 
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
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
              color: colors.contrast.text.primary,
              fontWeight: 400,
              textTransform: 'uppercase',
              textDecoration: 'underline',
              '&:hover': {
                background: 'transparent',
                opacity: 0.7
              }
            }}
          >
            Limpiar
          </Button>
        )}
      </Stack>

      {/* Campo de búsqueda */}
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="BUSCAR SERVICIOS..."
          value={searchValue}
          onChange={onSearchChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              background: colors.contrast.background,
              borderRadius: 0,
              border: `3px solid ${colors.contrast.text.primary}`,
              transition: 'all 0.1s ease',
              '&:hover': {
                borderColor: colors.contrast.text.primary,
              },
              '&.Mui-focused': {
                borderColor: colors.contrast.text.primary,
                boxShadow: `4px 4px 0px ${colors.contrast.text.primary}`,
              }
            },
            '& .MuiOutlinedInput-input': {
              fontSize: '1rem',
              fontWeight: 400,
              padding: '12px 16px',
              color: colors.contrast.text.primary,
              textTransform: 'uppercase',
              '&::placeholder': {
                color: colors.contrast.text.primary,
                opacity: 0.5
              }
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            }
          }}
        />
      </Box>

      <Divider sx={{ mb: 3, borderColor: colors.contrast.text.primary, borderWidth: '2px' }} />

      {/* Tabs de categorías */}
      <Box>
        <Tabs
          value={selectedTab}
          onChange={onTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            minHeight: 48,
            '& .MuiTab-root': {
              minHeight: 48,
              fontSize: '0.9rem',
              fontWeight: 400,
              textTransform: 'uppercase',
              borderRadius: 0,
              mx: 0.5,
              transition: 'all 0.1s ease',
              color: colors.contrast.text.primary,
              background: 'transparent',
              border: `2px solid transparent`,
              '&:hover': {
                background: 'rgba(0,0,0,0.05)',
                borderColor: colors.contrast.text.primary
              },
              '&.Mui-selected': {
                background: colors.contrast.text.primary,
                color: colors.contrast.background,
                borderColor: colors.contrast.text.primary,
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