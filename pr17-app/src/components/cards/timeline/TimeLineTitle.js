import React from 'react';
import { Typography } from '@mui/material';
import TitleButton from './TimeLineTitleButton';

const TimeLineTitle = ({ title, link, isSmallScreen, handleClick }) => (
  <Typography
    variant="h6"
    sx={{
      fontSize: isSmallScreen ? '16px' : '19px',
      color: 'primary.dark',
      marginBottom: '8px',
      lineHeight: 1.4,
    }}
  >
    {link ? (
      <TitleButton onClick={handleClick} title={title} isSmallScreen={isSmallScreen} />
    ) : (
      title
    )}
  </Typography>
);

export default TimeLineTitle;
