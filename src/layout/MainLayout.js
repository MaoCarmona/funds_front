import React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Sidebar from 'components/SideBar';
import { Outlet } from 'react-router-dom'; 
const DRAWER_WIDTH = 240;
const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(50% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH /3}px`}}}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
