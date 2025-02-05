import React from 'react';
import StickyHeader from './StickyHeader';
import MuiBreadCrumbs from '../breadcrumbs/MuiBreadCrumbs';
import StickyFooter from './StickyFooter';
import { Box, Stack } from '@mui/material';

const MainLayout = ({ children }) => (
  <Box>
    <StickyHeader />
    <MuiBreadCrumbs />
    <Stack>{children}</Stack>
    <StickyFooter />
  </Box>
);

export default MainLayout;
