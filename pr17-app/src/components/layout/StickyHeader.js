import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import useScrollDirection from '../../hooks/useScrollDirection';

const StickyHeader = () => {
  const scrollingUp = useScrollDirection();

  return (
    <AppBar
      position="sticky"
      sx={{
        transition: 'top 0.3s',
        top: scrollingUp ? 0 : '-56px',
        height: '10px',
        padding: '0 16px',
      }}
    >
      <Toolbar />
    </AppBar>
  );
};

export default StickyHeader;
