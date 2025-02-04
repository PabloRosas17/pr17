import React from 'react';
import { Button } from '@mui/material';

const TimeLineTitleButton = ({ onClick, title, isSmallScreen }) => (
  <Button
    onClick={onClick}
    sx={{
      fontSize: isSmallScreen ? '16px' : '19px',
      color: 'primary.dark',
      textTransform: 'none',
    }}
  >
    {title}
  </Button>
);

export default TimeLineTitleButton;
