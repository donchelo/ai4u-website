import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { Navbar } from '../organisms';
import { Footer } from '../organisms';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
      {/* <ChatButton /> */}
    </Box>
  );
};

export default Layout; 