import React from 'react';
import {
  Box,
  Grid,
  useTheme,
  alpha
} from '@mui/material';
import { H3, BodyText } from '../atoms';
import { ServiceCategory } from '../../../../types/service';

interface ServicesStatsProps {
  stats: {
    total: number;
    active: number;
    featured: number;
    byCategory: Record<ServiceCategory, number>;
  };
  getCategories: () => ServiceCategory[];
}

const ServicesStats: React.FC<ServicesStatsProps> = ({ stats, getCategories }) => {
  const theme = useTheme();

  const statItems = [
    { 
      value: stats.total, 
      label: 'Servicios', 
      color: theme.palette.primary.main,
      description: 'Total disponibles'
    },
    { 
      value: stats.active, 
      label: 'Activos', 
      color: theme.palette.secondary.main,
      description: 'Listos para implementar'
    },
    { 
      value: getCategories().length, 
      label: 'Categorías', 
      color: theme.palette.text.primary,
      description: 'Especialidades técnicas'
    }
  ];

  return (
    <Box sx={{ mb: 8 }}>
      <Grid container spacing={3} justifyContent="center">
        {statItems.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{
              p: 4,
              textAlign: 'center',
              background: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: theme.shadows[4],
                borderColor: theme.palette.primary.main
              }
            }}>
              <H3 sx={{ 
                color: stat.color, 
                mb: 1,
                fontSize: '2.5rem',
                fontWeight: 700,
                lineHeight: 1
              }}>
                {stat.value}
              </H3>
              <BodyText sx={{ 
                color: 'text.primary',
                fontSize: '0.95rem',
                fontWeight: 600,
                mb: 0.5,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {stat.label}
              </BodyText>
              <BodyText sx={{ 
                color: 'text.secondary',
                fontSize: '0.8rem',
                lineHeight: 1.4
              }}>
                {stat.description}
              </BodyText>
            </Box>
          </Grid>
        ))}
      </Grid>


    </Box>
  );
};

export default ServicesStats; 