// In MainLayout.js
import React from 'react';
import StickyHeader from './StickyHeader';
import MuiBreadCrumbs from '../breadcrumbs/MuiBreadCrumbs';
import StickyFooter from './StickyFooter';
import { Box, Stack } from '@mui/material';

const MainLayout = ({ children, showAboutChip = true }) => (
  <Box>
    <StickyHeader />
    <MuiBreadCrumbs />
    <Stack>{children}</Stack>
    <StickyFooter showAboutChip={showAboutChip} />
  </Box>
);

export default MainLayout;
