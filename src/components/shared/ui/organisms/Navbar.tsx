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
import { useColors } from '../../../../hooks';
import { Logo, GoogleTranslateWidget } from '../atoms';
import { ROUTES } from '../../../../utils/constants';
import { scrollToTop } from '../../../../utils/helpers';
import { SHADOW_TOKENS } from '../tokens/theme';

// Styled components usando tokens del sistema
const StyledNavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'colors'
})<{ colors: ReturnType<typeof useColors> }>(({ theme, colors }) => ({
  marginX: theme.spacing(0.5),
  color: colors.contrast.text.primary,
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    color: colors.palette.black,
    backgroundColor: colors.helpers.state.hover,
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
  const colors = useColors();
  const navigate = useNavigate();

  // Items de navegación estáticos en español
  const navItems = [
    { name: 'Inicio', path: ROUTES.HOME },
    { name: 'Servicios', path: ROUTES.SERVICES },
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
                  <GoogleTranslateWidget />
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
                    color: colors.palette.black,
                    backgroundColor: colors.helpers.state.hover,
                  },
                }}
              >
                {item.name}
              </Button>
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
              <GoogleTranslateWidget />
            </Box>
          </StyledDesktopMenuBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
