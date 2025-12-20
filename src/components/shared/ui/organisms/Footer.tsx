import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Box, Typography as MuiTypography, Divider, IconButton, Stack, useTheme } from '@mui/material';
import { SmallText } from '../atoms';
import { useColors } from '../../../../hooks';
import { useLanguage } from '../../../../hooks';
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
  const navigate = useNavigate();
  const { t } = useLanguage();

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
              {t('footer.tagline')}
            </MuiTypography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <MuiTypography variant="h6" sx={{ mb: 2, color: colors.palette.white }}>
              {t('footer.quickLinks.title')}
            </MuiTypography>
            <Box component="nav" aria-label={t('footer.quickLinks.title')}>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {[
                  { name: t('footer.quickLinks.links.0.name'), path: t('footer.quickLinks.links.0.path') },
                  { name: t('footer.quickLinks.links.1.name'), path: t('footer.quickLinks.links.1.path') },
                  { name: t('footer.quickLinks.links.2.name'), path: t('footer.quickLinks.links.2.path') },
                  { name: t('footer.quickLinks.links.3.name'), path: t('footer.quickLinks.links.3.path') }
                ].map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <Box
                      component="a"
                      onClick={() => {
                        navigate(link.path);
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });
                      }}
                      sx={{
                        color: colors.contrast.text.secondary,
                        textDecoration: 'none',
                        cursor: 'pointer',
                        display: 'block',
                        '&:hover': { color: colors.palette.accent }
                      }}
                    >
                      {link.name}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <MuiTypography variant="h6" sx={{ mb: 2, color: colors.palette.white }}>
              {t('footer.contact.title')}
            </MuiTypography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: colors.palette.accent, fontSize: '1.2rem' }} />
                <MuiTypography variant="body2" sx={{ color: colors.contrast.text.secondary }}>
                  {t('footer.contact.email')}
                </MuiTypography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WhatsAppIcon sx={{ color: colors.palette.accent, fontSize: '1.2rem' }} />
                <MuiTypography variant="body2" sx={{ color: colors.contrast.text.secondary }}>
                  {t('footer.contact.phone')}
                </MuiTypography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: colors.palette.accent, fontSize: '1.2rem' }} />
                <MuiTypography variant="body2" sx={{ color: colors.contrast.text.secondary }}>
                  {t('footer.contact.location')}
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
            {t('footer.copyright').replace('{year}', currentYear.toString())}
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
                    color: colors.palette.accent,
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