import React from "react";
import { Box } from '@mui/material';

const CenteredBox = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80%',
      marginTop: 1
    }}
  >
    {children}
  </Box>
);

export default CenteredBox;