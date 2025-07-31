import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Chip,
  Stack,
  FormGroup,
  FormControlLabel,
  Switch,
  Tabs,
  Tab,
  useTheme,
  alpha
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from './Button';
import { ServiceCategory } from '../../types/service';

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
  const theme = useTheme();

  return (
    <Box sx={{
      p: 4,
      background: '#FFFFFF',
      border: '1px solid #E5E5E5',
      borderRadius: 2,
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}>
      {/* Search and Controls */}
      <Box sx={{ mb: 4 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center">
          {/* Search Field */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <TextField
              fullWidth
              placeholder="Buscar servicios por nombre, descripción o tags..."
              value={searchValue}
              onChange={onSearchChange}
                             sx={{
                 '& .MuiOutlinedInput-root': {
                   background: '#FFFFFF',
                   borderRadius: 2,
                   transition: 'all 0.3s ease',
                   '&:hover': {
                     '& .MuiOutlinedInput-notchedOutline': {
                       borderColor: '#000000',
                       borderWidth: '1px'
                     }
                   },
                   '&.Mui-focused': {
                     '& .MuiOutlinedInput-notchedOutline': {
                       borderColor: '#000000',
                       borderWidth: '2px'
                     }
                   }
                 },
                 '& .MuiOutlinedInput-input': {
                   fontSize: '1rem',
                   padding: '12px 16px'
                 }
               }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#666666' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Controls */}
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
            <Chip
              label="Limpiar filtros"
              onClick={onClearFilters}
              variant="outlined"
              size="small"
              clickable
              icon={<ClearIcon />}
              sx={{
                background: '#FFFFFF',
                border: '1px solid #E5E5E5',
                '&:hover': {
                  background: '#F8F8F8',
                  borderColor: '#000000'
                }
              }}
            />
            <Chip
              label={`${filteredCount} servicios`}
              size="small"
              sx={{
                background: '#000000',
                color: 'white',
                fontWeight: 'bold'
              }}
            />
          </Stack>
        </Stack>
      </Box>

      {/* Category Tabs */}
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
              color: '#666666',
              '&:hover': {
                background: '#F8F8F8',
                color: '#000000'
              },
              '&.Mui-selected': {
                background: '#F0F0F0',
                color: '#000000',
                fontWeight: 600
              }
            },
            '& .MuiTabs-indicator': {
              height: 2,
              background: '#000000'
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

      {/* Active Filters Display */}
      {searchValue && (
        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box sx={{ fontSize: '0.9rem', color: 'text.secondary', fontWeight: 500 }}>
              Filtros activos:
            </Box>
                          <Chip
                label={`Búsqueda: "${searchValue}"`}
                size="small"
                onDelete={() => onSearchChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)}
                sx={{
                  background: '#F0F0F0',
                  color: '#000000',
                  border: '1px solid #E5E5E5'
                }}
              />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default ServicesFilter; 