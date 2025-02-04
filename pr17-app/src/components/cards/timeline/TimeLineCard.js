// components/TimeLineCard.js
import React from 'react';
import { Card, CardContent } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import { TimeLineCardStyle } from './TimeLineCardStyle';
import Title from './TimeLineTitle';
import ToggleButton from './TimeLineToggleButton';
import Content from './TimeLineContent';

const TimeLineCard = ({ title, content, expandedIndex, index, handleExpand, link }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = (e) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <Card onClick={() => handleExpand(index)} sx={TimeLineCardStyle(isSmallScreen)}>
      <CardContent>
        <Title title={title} link={link} isSmallScreen={isSmallScreen} handleClick={handleClick} />
        <ToggleButton
          expandedIndex={expandedIndex}
          index={index}
          handleExpand={handleExpand}
          isSmallScreen={isSmallScreen}
          title={title}
        />
        <Content expandedIndex={expandedIndex} index={index} content={content} isSmallScreen={isSmallScreen} />
      </CardContent>
    </Card>
  );
};

export default TimeLineCard;
