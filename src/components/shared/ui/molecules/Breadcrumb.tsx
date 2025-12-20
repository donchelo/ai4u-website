import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../atoms';
import { getBreadcrumbStructuredData } from '../../../../utils/seo';

interface BreadcrumbItem {
  name: string;
  path: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  items, 
  showHome = true 
}) => {
  const navigate = useNavigate();

  // Construir breadcrumbs completos
  const breadcrumbItems: BreadcrumbItem[] = showHome 
    ? [{ name: 'Inicio', path: '/' }, ...items]
    : items;

  // Generar structured data para breadcrumbs
  const breadcrumbData = getBreadcrumbStructuredData(
    breadcrumbItems.map(item => ({
      name: item.name,
      url: `https://ai4u.com.co${item.path}`
    }))
  );

  const handleBreadcrumbClick = (path: string) => {
    navigate(path);
  };

  return (
    <Box>
      <SEOHead structuredData={breadcrumbData} />
      <Box
        component="nav"
        aria-label="Breadcrumb"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          py: 2,
          px: { xs: 2, md: 0 },
          fontSize: '0.875rem',
          color: 'text.secondary'
        }}
      >
        {breadcrumbItems.map((item, index) => [
          index > 0 && (
            <Typography
              key={`separator-${index}`}
              component="span"
              sx={{ 
                mx: 1,
                color: 'text.disabled',
                fontSize: '0.75rem'
              }}
            >
              /
            </Typography>
          ),
          item.current ? (
            <Typography
              key={item.path}
              component="span"
              sx={{
                color: 'text.primary',
                fontWeight: 500,
                fontSize: 'inherit'
              }}
            >
              {item.name}
            </Typography>
          ) : (
            <Link
              key={item.path}
              component="button"
              onClick={() => handleBreadcrumbClick(item.path)}
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                fontSize: 'inherit',
                '&:hover': {
                  color: 'primary.main',
                  textDecoration: 'underline'
                }
              }}
            >
              {item.name}
            </Link>
          )
        ].filter(Boolean))}
      </Box>
    </Box>
  );
};

export default Breadcrumb; 