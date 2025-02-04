import React from 'react';
import { Box } from '@mui/material';
import StickyHeader from './StickyHeader';
import MuiBreadCrumbs from '../breadcrumbs/MuiBreadCrumbs';

const MainLayout = ({ children }) => (
  <div>
    <StickyHeader />
    <MuiBreadCrumbs />
    <Box sx={{ backgroundColor: 'background.default', padding: 2, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </Box>
  </div>
);

export default MainLayout;
