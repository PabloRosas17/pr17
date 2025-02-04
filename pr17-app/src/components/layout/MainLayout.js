import React from 'react';
import StickyHeader from './StickyHeader';
import MuiBreadCrumbs from '../breadcrumbs/MuiBreadCrumbs';
import StickyFooter from './StickyFooter';
import { Stack } from '@mui/material';

const MainLayout = ({ children }) => (
  <div>
    <StickyHeader />
    <MuiBreadCrumbs />
    <Stack>{children}</Stack>
    <StickyFooter />
  </div>
);

export default MainLayout;
