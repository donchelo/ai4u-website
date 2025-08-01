import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Box, Link, Typography as MuiTypography, Divider, IconButton, Stack, useTheme } from '@mui/material';
import { SmallText } from '../atoms';
import { useColors } from '../../../../hooks';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useColorMode } from '../../../../context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const { mode } = useColorMode();
  const colors = useColors();

  // Logo según el tema (footer siempre tiene fondo oscuro)
  const logoPath = mode === 'light' 
    ? '/assets/images/Logo V3 - Crema.png'
    : '/assets/images/Logo V3 - Negro.png';

  const socialLinks = [
    { icon: <InstagramIcon />, url: 'https://www.instagram.com/ai.4.u_/' },
    { icon: <FacebookIcon />, url: 'https://www.facebook.com/artificial.intelligence.4.you/' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/company/ai4u-com-co' },
    { icon: <XIcon />, url: 'https://x.com/_ai4u_' }
  ];

  return (
    <Box 
      sx={{ 
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        py: 6,
        borderTop: 1,
        borderColor: colors.contrast.divider
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
            <MuiTypography variant="body2" sx={{ color: colors.contrast.text.secondary }}>
              Transformando el futuro con inteligencia artificial.
            </MuiTypography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <MuiTypography variant="h6" sx={{ mb: 2, color: colors.palette.white }}>
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
                        color: colors.contrast.text.secondary,
                        textDecoration: 'none',
                        '&:hover': { color: colors.palette.orange }
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
            <MuiTypography variant="h6" sx={{ mb: 2, color: colors.palette.white }}>
              Contacto
            </MuiTypography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: colors.palette.orange, fontSize: '1.2rem' }} />
                <MuiTypography variant="body2" sx={{ color: colors.contrast.text.secondary }}>
                  info@ai4u.com.co
                </MuiTypography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: colors.palette.orange, fontSize: '1.2rem' }} />
                <MuiTypography variant="body2" sx={{ color: colors.contrast.text.secondary }}>
                  +57 300 123 4567
                </MuiTypography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: colors.palette.orange, fontSize: '1.2rem' }} />
                <MuiTypography variant="body2" sx={{ color: colors.contrast.text.secondary }}>
                  Medellín, Colombia
                </MuiTypography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: colors.contrast.divider }} />

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: 2
        }}>
          <SmallText sx={{ color: colors.contrast.text.secondary }}>
            © {currentYear} AI4U. Todos los derechos reservados.
          </SmallText>
          
          <Stack direction="row" spacing={1}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: colors.contrast.text.secondary,
                  '&:hover': {
                    color: colors.palette.orange,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 