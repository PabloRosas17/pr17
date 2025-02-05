import React from 'react';
import { Typography, Chip } from '@mui/material';

const BreadCrumbItem = ({ label, isLast }) => (
  <Typography color="text.primary">
    <Chip
      label={label}
      color={isLast ? 'primary' : 'default'}
      component="span"
      size="small"
      sx={{
        color: 'primary.light',
        marginLeft: 1,
      }}
    />
  </Typography>
);

export default BreadCrumbItem;
