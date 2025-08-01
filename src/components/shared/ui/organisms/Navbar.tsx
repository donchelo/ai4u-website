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
  Typography as MuiTypography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from '../../../../context/ThemeContext';
import { Logo } from '../atoms';
import { ROUTES } from '../../../../utils/constants';
import { scrollToTop } from '../../../../utils/helpers';

const navItems = [
  { name: 'Home', path: ROUTES.HOME },
  { name: 'Servicios', path: ROUTES.SERVICES },
  { name: 'Por qué AI4U?', path: ROUTES.WHY_AI4U },
  { name: 'Casos de éxito', path: ROUTES.SUCCESS_CASES },
  { name: 'Galería', path: ROUTES.GALLERY }
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { mode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

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
        backgroundColor: 'background.paper',
        zIndex: (theme) => theme.zIndex.drawer + 1 
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Box
            component={RouterLink}
            to={ROUTES.HOME}
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
              color="inherit"
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
              }}
            >
              {navItems.map((item) => (
                <MenuItem 
                  key={item.name} 
                  onClick={() => handleNavigate(item.path)}
                  component={RouterLink}
                  to={item.path}
                >
                  <MuiTypography textAlign="center">{item.name}</MuiTypography>
                </MenuItem>
              ))}
              {/* Theme toggle en menú móvil */}
              <MenuItem onClick={toggleColorMode}>
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
            component={RouterLink}
            to={ROUTES.HOME}
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => scrollToTop()}
                component={RouterLink}
                to={item.path}
                sx={{ 
                  mx: 1,
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
            
            {/* Theme toggle button desktop */}
            <IconButton 
              onClick={toggleColorMode} 
              color="inherit" 
              size="small"
              sx={{ 
                ml: 1,
                opacity: 0.7,
                '&:hover': { 
                  opacity: 1,
                  backgroundColor: 'action.hover'
                }
              }}
              aria-label={mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 