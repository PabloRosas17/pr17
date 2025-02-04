import React from 'react';
import { Box } from '@mui/material';

const StickyFooter = ({ children }) => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      padding: 2,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </Box>
);

export default StickyFooter;
