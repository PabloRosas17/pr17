import React from 'react';
import { Typography } from '@mui/material';

const TimeLineContent = ({ expandedIndex, index, content, isSmallScreen }) => (
  expandedIndex === index && (
    <Typography
      variant="body1"
      sx={{
        color: 'primary.dark',
        fontSize: isSmallScreen ? '12px' : '14px',
      }}
    >
      {content}
    </Typography>
  )
);

export default TimeLineContent;
