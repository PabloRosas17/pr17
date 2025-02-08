import React from 'react';
import { Typography } from '@mui/material';

const LabelDisplay = ({ currentLabel, capitalizeFirstLetter }) => {
  return (
    <Typography
      variant="h6"
      sx={{
        fontWeight: 'bold',
        color: 'secondary.main',
        fontSize: '16px',
      }}
    >
      {capitalizeFirstLetter(currentLabel)}
    </Typography>
  );
};

export default LabelDisplay;
