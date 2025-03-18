import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
import { useColorMode } from '../context/ThemeContext';

const navItems = [
  { name: 'Servicios', path: '/soluciones' },
  { name: 'Blog', path: '/blog' },
  { name: 'Por qué AI4U?', path: '/por-que-ai4u' },
  { name: 'Casos de éxito', path: '/casos-de-exito' }
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { mode, toggleColorMode } = useColorMode();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Logo path based on theme mode
  const logoPath = mode === 'dark' ? '/assets/images/ai4u-logo-dark.png' : '/assets/images/ai4u-logo.png';

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src={logoPath}
              alt="AI4U Logo"
              sx={{ 
                height: 42,
                width: 'auto',
                marginLeft: '4px'
              }}
            />
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
                  onClick={handleCloseNavMenu}
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
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              textDecoration: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={logoPath}
              alt="AI4U Logo"
              sx={{ 
                height: 38,
                width: 'auto'
              }}
            />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={RouterLink}
                to={item.path}
                sx={{ 
                  mx: 1,
                  color: item.path === '/theme-demo' ? 'secondary.main' : 'text.primary',
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
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
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