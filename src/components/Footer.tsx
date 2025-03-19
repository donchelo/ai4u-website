import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Box, Link, Typography as MuiTypography, Divider, IconButton, Stack, useTheme } from '@mui/material';
import { SmallText } from './ui/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import XIcon from '@mui/icons-material/X';
import { useColorMode } from '../context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const { mode } = useColorMode();

  // Logo para fondos oscuros (footer siempre tiene fondo oscuro)
  const logoPath = '/assets/images/ai4u-logo-for-dark-background.png';

  const socialLinks = [
    { icon: <InstagramIcon />, url: 'https://www.instagram.com/ai.4.u_/' },
    { icon: <FacebookIcon />, url: 'https://www.facebook.com/artificial.intelligence.4.you/' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/company/ai4u-com-co' },
    { icon: <XIcon />, url: 'https://x.com/AI4U_' }
  ];

  return (
    <Box 
      sx={{ 
        bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'text.primary',
        color: theme.palette.mode === 'dark' ? 'text.primary' : 'background.paper',
        py: 6,
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box 
              component="img"
              src={logoPath}
              alt="AI4U Logo"
              sx={{ 
                height: 42,
                width: 'auto',
                mb: 2
              }}
            />
            <MuiTypography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              Transformando el futuro con inteligencia artificial.
            </MuiTypography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <MuiTypography variant="h6" sx={{ mb: 2, color: theme.palette.mode === 'dark' ? 'text.primary' : 'background.default' }}>
              Enlaces Rápidos
            </MuiTypography>
            <Box component="nav" aria-label="Enlaces rápidos">
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Servicios', path: '/servicios' },
                  { name: 'Por qué AI4U?', path: '/por-que-ai4u' },
                  { name: 'Casos de éxito', path: '/casos-de-exito' }
                ].map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <Link
                      component={RouterLink}
                      to={link.path}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });
                      }}
                      sx={{
                        color: theme.palette.text.secondary,
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
            <MuiTypography variant="h6" sx={{ mb: 2, color: theme.palette.mode === 'dark' ? 'text.primary' : 'background.default' }}>
              Contacto
            </MuiTypography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              <Box component="li" sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
                <EmailIcon fontSize="small" sx={{ mr: 1, color: theme.palette.text.secondary }} />
                <Link 
                  href="mailto:hola@ai4u.com.co"
                  sx={{
                    color: theme.palette.text.secondary,
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  hola@ai4u.com.co
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
                <PhoneIcon fontSize="small" sx={{ mr: 1, color: theme.palette.text.secondary }} />
                <MuiTypography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  +57 3024906414
                </MuiTypography>
              </Box>
              <Box component="li" sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon fontSize="small" sx={{ mr: 1, color: theme.palette.text.secondary }} />
                <MuiTypography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Medellín, Colombia
                </MuiTypography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ mt: 4, mb: 3, borderColor: theme.palette.divider }} />
        
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
                  color: theme.palette.text.secondary,
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
          <SmallText sx={{ color: theme.palette.text.secondary }}>
            © {currentYear} AI4U. Todos los derechos reservados.
          </SmallText>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 