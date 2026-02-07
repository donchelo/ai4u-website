import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Typography as MuiTypography, Divider, IconButton, Stack, useTheme } from '@mui/material';
import { SmallText } from '../atoms';
import { useColors } from '../../../../hooks';
import { SPACING_TOKENS } from '../../../../components/shared/ui/tokens/spacing';
import { TEXT_VARIANTS } from '../../../../components/shared/ui/tokens/typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ROUTES } from '../../../../utils/constants';
import { scrollToTop } from '../../../../utils/helpers';

const FOOTER_LOGO_PATH = '/assets/images/Isotipo Crema.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const colors = useColors();

  const socialLinks = [
    { icon: <InstagramIcon />, url: 'https://www.instagram.com/ai.4.u_/' },
    { icon: <FacebookIcon />, url: 'https://www.facebook.com/artificial.intelligence.4.you/' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/company/ai4u-com-co' },
    { icon: <XIcon />, url: 'https://x.com/_ai4u_' }
  ];

  const quickLinks = [
    { name: 'Inicio', path: ROUTES.HOME },
    { name: 'Servicios', path: ROUTES.SERVICES },
    { name: '¿Por qué AI4U?', path: ROUTES.WHY_AI4U },
    { name: 'Casos de uso', path: ROUTES.SUCCESS_CASES }
  ];

  return (
    <Box 
      sx={{ 
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        borderTop: 1,
        borderColor: colors.contrast.divider
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box 
              component="img"
              src={FOOTER_LOGO_PATH}
              alt="AI4U Logo"
              sx={{ 
                height: (theme) => theme.spacing(5.25),
                width: 'auto',
                mb: 2
              }}
            />
            <MuiTypography variant="body2" sx={{ color: colors.contrast.text.secondary }}>
              IA para tu negocio.
            </MuiTypography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <MuiTypography variant="h6" sx={{ mb: 2, color: colors.palette.white }}>
              Enlaces Rápidos
            </MuiTypography>
            <Box component="nav" aria-label="Enlaces Rápidos">
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {quickLinks.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <Box
                      component={Link}
                      to={link.path}
                      onClick={() => scrollToTop()}
                      sx={{
                        color: colors.contrast.text.secondary,
                        textDecoration: 'none',
                        cursor: 'pointer',
                        display: 'block',
                        '&:hover': { color: colors.palette.white }
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
              Contacto
            </MuiTypography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: colors.palette.white, fontSize: (theme) => theme.typography.body1.fontSize }} />
                <MuiTypography variant="body2" sx={{ color: colors.contrast.text.secondary }}>
                  hola@ai4u.com.co
                </MuiTypography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WhatsAppIcon sx={{ color: colors.palette.white, fontSize: (theme) => theme.typography.body1.fontSize }} />
                <MuiTypography variant="body2" sx={{ color: colors.contrast.text.secondary }}>
                  +57 321 817 5744
                </MuiTypography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: colors.palette.white, fontSize: (theme) => theme.typography.body1.fontSize }} />
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
          alignItems: { xs: 'center', md: 'flex-end' },
          gap: 2
        }}>
          <Stack spacing={0.5} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <SmallText sx={{ color: colors.contrast.text.secondary }}>
              {`© ${currentYear} AI4U. Todos los derechos reservados.`}
            </SmallText>
            <MuiTypography 
              sx={{ 
                color: colors.palette.white,
                opacity: 0.9,
                fontSize: TEXT_VARIANTS.ui.caption.fontSize,
                letterSpacing: '0.05em',
                fontWeight: 400,
                ...TEXT_VARIANTS.ui.code
              }}
            >
              architecture by <Box component="span" sx={{ fontWeight: 400 }}>MARIANO | 마리아노</Box>
            </MuiTypography>
          </Stack>
          
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
                    color: colors.palette.white,
                    transform: (theme) => `translateY(-${theme.spacing(0.25)})`,
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
