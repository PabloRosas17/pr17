import React from 'react';
import { Typography } from '@mui/material';

const TimeLineTypographySection = ({ variant, children, sx }) => (
  <Typography variant={variant} gutterBottom sx={sx}>
    {children}
  </Typography>
);

export default TimeLineTypographySection;
