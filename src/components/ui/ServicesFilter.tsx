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
  showFeaturedOnly: boolean;
  onFeaturedToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  showFeaturedOnly,
  onFeaturedToggle,
  onClearFilters,
  filteredCount,
  categoryTabs
}) => {
  const theme = useTheme();

  return (
    <Box sx={{
      p: 4,
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: 4,
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #FF5C00 0%, #FF7477 100%)',
        zIndex: 1
      }
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
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                      borderWidth: '2px'
                    }
                  },
                  '&.Mui-focused': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
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
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Controls */}
          <Stack direction="row" spacing={2} alignItems="center">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={showFeaturedOnly}
                    onChange={onFeaturedToggle}
                    color="primary"
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.08)
                        }
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: 'primary.main'
                      }
                    }}
                  />
                }
                label="Solo destacados"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }
                }}
              />
            </FormGroup>

            <Stack direction="row" spacing={1}>
              <Chip
                label="Limpiar filtros"
                onClick={onClearFilters}
                variant="outlined"
                size="small"
                clickable
                icon={<ClearIcon />}
                sx={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderColor: 'primary.main'
                  }
                }}
              />
              <Chip
                label={`${filteredCount} servicios`}
                color="primary"
                size="small"
                sx={{
                  background: 'linear-gradient(135deg, #FF5C00 0%, #FF7477 100%)',
                  color: 'white',
                  fontWeight: 'bold'
                }}
              />
            </Stack>
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
              borderRadius: 3,
              mx: 0.5,
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(255, 92, 0, 0.05)',
                transform: 'translateY(-1px)'
              },
              '&.Mui-selected': {
                background: 'rgba(255, 92, 0, 0.1)',
                color: 'primary.main',
                fontWeight: 600,
                '&:hover': {
                  background: 'rgba(255, 92, 0, 0.15)'
                }
              }
            },
            '& .MuiTabs-indicator': {
              height: 3,
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #FF5C00 0%, #FF7477 100%)'
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
      {(searchValue || showFeaturedOnly) && (
        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box sx={{ fontSize: '0.9rem', color: 'text.secondary', fontWeight: 500 }}>
              Filtros activos:
            </Box>
            {searchValue && (
              <Chip
                label={`Búsqueda: "${searchValue}"`}
                size="small"
                onDelete={() => onSearchChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)}
                sx={{
                  background: 'rgba(31, 169, 246, 0.1)',
                  color: 'info.main',
                  border: '1px solid rgba(31, 169, 246, 0.3)'
                }}
              />
            )}
            {showFeaturedOnly && (
              <Chip
                label="Solo destacados"
                size="small"
                onDelete={() => onFeaturedToggle({ target: { checked: false } } as React.ChangeEvent<HTMLInputElement>)}
                sx={{
                  background: 'rgba(255, 193, 7, 0.1)',
                  color: 'warning.main',
                  border: '1px solid rgba(255, 193, 7, 0.3)'
                }}
              />
            )}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default ServicesFilter; 