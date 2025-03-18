import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Box, Link, Typography as MuiTypography, Divider } from '@mui/material';
import { SmallText } from './ui/Typography';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: 'text.primary', color: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MuiTypography variant="h6" sx={{ mb: 2, color: 'background.default' }}>
              AI4U
            </MuiTypography>
            <MuiTypography variant="body2" sx={{ color: 'text.secondary' }}>
              Transformando el futuro con inteligencia artificial.
            </MuiTypography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <MuiTypography variant="h6" sx={{ mb: 2, color: 'background.default' }}>
              Enlaces Rápidos
            </MuiTypography>
            <Box component="nav" aria-label="Enlaces rápidos">
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {[
                  { name: 'Inicio', path: '/' },
                  { name: 'Sobre Nosotros', path: '/about' },
                  { name: 'Servicios', path: '/services' },
                  { name: 'Contacto', path: '/contact' },
                  { name: 'Demo Tema', path: '/theme-demo' }
                ].map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <Link
                      component={RouterLink}
                      to={link.path}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      {link.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <MuiTypography variant="h6" sx={{ mb: 2, color: 'background.default' }}>
              Contacto
            </MuiTypography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              {[
                'info@ai4u.com',
                '+1 (555) 123-4567',
                'Calle Tecnología 123, Madrid'
              ].map((item, index) => (
                <Box component="li" key={index} sx={{ mb: 1, color: 'text.secondary' }}>
                  {item}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ mt: 4, mb: 3, borderColor: 'rgba(255,255,255,0.2)' }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <SmallText sx={{ color: 'text.secondary' }}>
            © {currentYear} AI4U. Todos los derechos reservados.
          </SmallText>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 