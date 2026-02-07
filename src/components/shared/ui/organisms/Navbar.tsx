import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Container,
  Typography as MuiTypography,
  styled,
  alpha
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useColors } from '../../../../hooks';
import { Logo, GoogleTranslateWidget } from '../atoms';
import { ROUTES } from '../../../../utils/constants';
import { scrollToTop } from '../../../../utils/helpers';
import { SHADOW_TOKENS } from '../tokens/theme';

// Styled components usando tokens del sistema
const StyledNavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'colors' && prop !== 'isScrolled'
})<{ colors: ReturnType<typeof useColors>; isScrolled: boolean }>(({ theme, colors, isScrolled }) => ({
  marginX: theme.spacing(0.5),
  color: isScrolled ? colors.contrast.text.primary : '#FFFFFF',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '0.95rem',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  border: 'none', // Eliminar el borde global del tema
  padding: theme.spacing(1, 1.5), // Ajustar el padding excesivo del tema
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 8,
    left: '50%',
    width: 0,
    height: '2px',
    backgroundColor: isScrolled ? colors.contrast.text.primary : '#FFFFFF',
    transition: 'all 0.3s ease-in-out',
    transform: 'translateX(-50%)',
  },
  '&:hover': {
    backgroundColor: 'transparent',
    color: isScrolled ? colors.contrast.text.primary : '#FFFFFF',
    opacity: 0.8,
    border: 'none', // Asegurar que no aparezca en hover
    '&::after': {
      width: '60%',
    },
  },
}));

const StyledDesktopMenuBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const colors = useColors();
  const navigate = useNavigate();

  // Detectar scroll para cambiar apariencia
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Items de navegación estáticos en español
  const navItems = [
    { name: 'Inicio', path: ROUTES.HOME },
    { name: 'Servicios', path: ROUTES.SERVICES },
    { name: 'SuperAI', path: ROUTES.SUPER_AI },
    { name: '¿Por qué AI4U?', path: ROUTES.WHY_AI4U },
    { name: 'Casos de uso', path: ROUTES.SUCCESS_CASES }
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path: string) => {
    handleCloseNavMenu();
    navigate(path);
    scrollToTop();
  };

  return (
    <AppBar 
      position="fixed" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        backgroundColor: isScrolled 
          ? alpha(colors.contrast.surface, 0.85) 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled 
          ? `1px solid ${alpha(colors.contrast.border, 0.1)}` 
          : 'none',
        transition: 'all 0.3s ease-in-out',
        zIndex: (theme) => theme.zIndex.drawer + 1 
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Box
            component={RouterLink as React.ElementType}
            to={ROUTES.HOME}
            aria-label="Ir a página principal - AI4U Logo"
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
              alignItems: 'center',
            }}
          >
            <Logo variant="desktop" light={!isScrolled} />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="Menu de navegación"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: isScrolled ? colors.contrast.text.primary : '#FFFFFF',
                transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: 'transparent',
                  opacity: 0.7,
                },
              }}
            >
              {anchorElNav ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: colors.contrast.surface,
                  border: `1px solid ${colors.contrast.border}`,
                  boxShadow: SHADOW_TOKENS.xl,
                },
              }}
            >
              {navItems.map((item) => (
                <MenuItem 
                  key={item.name} 
                  onClick={() => handleNavigate(item.path)}
                  component={RouterLink as React.ElementType}
                  to={item.path}
                  sx={{
                    color: colors.contrast.text.primary,
                    '&:hover': {
                      backgroundColor: colors.helpers.state.hover,
                      color: colors.palette.black,
                    },
                  }}
                >
                  <MuiTypography textAlign="center">{item.name}</MuiTypography>
                </MenuItem>
              ))}
              {/* Google Translate en menú móvil */}
              <MenuItem
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  py: 2,
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <Box sx={{ width: '100%', maxWidth: (theme) => theme.spacing(25) }}>
                  <GoogleTranslateWidget light={false} />
                </Box>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Box
            component={RouterLink as React.ElementType}
            to={ROUTES.HOME}
            aria-label="Ir a página principal - AI4U Logo"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              textDecoration: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Logo variant="mobile" light={!isScrolled} />
          </Box>

          {/* Desktop Menu */}
          <StyledDesktopMenuBox>
            {navItems.map((item) => (
              <StyledNavButton
                key={item.name}
                colors={colors}
                isScrolled={isScrolled}
                onClick={() => scrollToTop()}
                component={RouterLink as React.ElementType}
                to={item.path}
              >
                {item.name}
              </StyledNavButton>
            ))}
            
            {/* Google Translate Widget */}
            <Box 
              sx={{ 
                ml: { xs: 0.5, md: 1 }, 
                display: 'flex', 
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <GoogleTranslateWidget light={!isScrolled} />
            </Box>
          </StyledDesktopMenuBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
