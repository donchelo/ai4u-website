import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden' }}>
      <Navbar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          width: '100%', 
          maxWidth: '100%' 
        }}
      >
        <Toolbar />
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout; 