import React, { useState } from 'react';
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
  styled
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from '../../../../context/ThemeContext';
import { useColors } from '../../../../hooks';
import { Logo, GoogleTranslateWidget } from '../atoms';
import { ROUTES } from '../../../../utils/constants';
import { scrollToTop } from '../../../../utils/helpers';

// Styled components para mejor performance
const StyledNavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'colors'
})<{ colors: ReturnType<typeof useColors> }>(({ colors }) => ({
  marginX: '4px',
  color: colors.contrast.text.primary,
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    color: colors.palette.accent,
    backgroundColor: colors.helpers.state.hover,
  },
}));

const StyledThemeIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'colors'
})<{ colors: ReturnType<typeof useColors> }>(({ colors }) => ({
  marginLeft: '8px',
  color: colors.contrast.text.secondary,
  opacity: 0.7,
  '&:hover': {
    opacity: 1,
    backgroundColor: colors.helpers.state.hover,
    color: colors.palette.accent,
    backgroundColor: 'transparent',
  }
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
  const { mode, toggleColorMode } = useColorMode();
  const colors = useColors();
  const navigate = useNavigate();

  // Items de navegación estáticos en español
  const navItems = [
    { name: 'Inicio', path: ROUTES.HOME },
    { name: 'Servicios', path: ROUTES.SERVICES },
    { name: '¿Por qué AI4U?', path: ROUTES.WHY_AI4U },
    { name: 'Casos de uso', path: ROUTES.SUCCESS_CASES },
    { name: 'Galería', path: ROUTES.GALLERY }
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
      color="default" 
      elevation={1} 
      sx={{ 
        backgroundColor: colors.contrast.surface,
        borderBottom: `1px solid ${colors.contrast.border}`,
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
            <Logo variant="desktop" />
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
                color: colors.contrast.text.primary,
                '&:hover': {
                  backgroundColor: colors.helpers.state.hover,
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
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
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
                      color: colors.palette.accent,
                    },
                  }}
                >
                  <MuiTypography textAlign="center">{item.name}</MuiTypography>
                </MenuItem>
              ))}
              {/* Google Translate en menú móvil */}
              <MenuItem>
                 <GoogleTranslateWidget />
              </MenuItem>
              {/* Theme toggle en menú móvil */}
              <MenuItem 
                onClick={toggleColorMode}
                aria-label={mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                sx={{
                  color: colors.contrast.text.primary,
                  '&:hover': {
                    backgroundColor: colors.helpers.state.hover,
                    color: colors.palette.accent,
                  },
                }}
              >
                <MuiTypography textAlign="center" sx={{ display: 'flex', alignItems: 'center' }}>
                  {mode === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
                  <Box component="span" sx={{ ml: 1, display: 'flex' }}>
                    {mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
                  </Box>
                </MuiTypography>
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
            <Logo variant="mobile" />
          </Box>

          {/* Desktop Menu */}
          <StyledDesktopMenuBox>
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => scrollToTop()}
                component={RouterLink as React.ElementType}
                to={item.path}
                sx={{ 
                  mx: 1,
                  color: colors.contrast.text.primary,
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    color: colors.palette.accent,
                    backgroundColor: colors.helpers.state.hover,
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
            
            {/* Google Translate Widget */}
            <Box sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
              <GoogleTranslateWidget />
            </Box>
            
            {/* Theme toggle button desktop */}
            <StyledThemeIconButton
              onClick={toggleColorMode} 
              size="small"
              colors={colors}
              aria-label={mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
            </StyledThemeIconButton>
          </StyledDesktopMenuBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
