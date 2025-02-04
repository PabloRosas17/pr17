import React from 'react';
import { Button } from '@mui/material';

const TimeLineToggleButton = ({ expandedIndex, index, handleExpand, isSmallScreen, title }) => (
  <Button
    size="small"
    onClick={() => handleExpand(index)}
    sx={{
      color: 'primary',
      fontSize: isSmallScreen ? '8px' : '10px',
    }}
  >
    {expandedIndex === index ? `Reduce : ${title}` : `Boost : ${title}`}
  </Button>
);

export default TimeLineToggleButton;
