import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Box, Link, Typography as MuiTypography, Divider, IconButton, Stack } from '@mui/material';
import { SmallText } from './ui/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <InstagramIcon />, url: 'https://www.instagram.com/ai.4.u_/' },
    { icon: <FacebookIcon />, url: 'https://www.facebook.com/artificial.intelligence.4.you/' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/company/ai4u-com-co' }
  ];

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
                  { name: 'Servicios', path: '/soluciones' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Por qué AI4U?', path: '/por-que-ai4u' },
                  { name: 'Casos de éxito', path: '/casos-de-exito' }
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
                'hola@ai4u.com.co',
                'Tel: +57 3024906414',
                'Medellín, Colombia'
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
          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center" 
            sx={{ mb: 2 }}
          >
            {socialLinks.map((social, index) => (
              <IconButton 
                key={index} 
                component="a" 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  color: 'text.secondary',
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'translateY(-3px)',
                    transition: 'all 0.2s'
                  }
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
          <SmallText sx={{ color: 'text.secondary' }}>
            © {currentYear} AI4U. Todos los derechos reservados.
          </SmallText>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 