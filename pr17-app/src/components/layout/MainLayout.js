import React from 'react';
import StickyHeader from './StickyHeader';
import MuiBreadCrumbs from '../breadcrumbs/MuiBreadCrumbs';
import StickyFooter from './StickyFooter';

const MainLayout = ({ children }) => (
  <div>
    <StickyHeader />
    <MuiBreadCrumbs />
    <StickyFooter>{children}</StickyFooter>
  </div>
);

export default MainLayout;
