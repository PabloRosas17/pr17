import { Paper } from '@mui/material';
import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { AboutSectionContent } from './AboutSectionContent';
import { AboutSectionStyle } from './AboutSectionStyle';
import TimeLineTypographySection from '../cards/timeline/TimeLineTypographySection';
import AboutCopyrightBox from './AboutCopyrightBox.js'

const AboutSection = () => {
  const isSmallScreen = useResponsive();

  return (
    <Paper sx={AboutSectionStyle(isSmallScreen)}>
      <TimeLineTypographySection
        variant={isSmallScreen ? 'h5' : 'h4'}
        sx={{ color: 'primary.dark' }}
      >
        {AboutSectionContent.greeting}
      </TimeLineTypographySection>
      <TimeLineTypographySection
        variant="body1"
        sx={{
          color: 'primary.light',
          fontSize: isSmallScreen ? '14px' : '16px',
        }}
      >
        {AboutSectionContent.introduction}
        <br />
        {AboutSectionContent.description}
        <br />
        {AboutSectionContent.invitation}
      </TimeLineTypographySection>
      <AboutCopyrightBox />
    </Paper>
  );
};

export default AboutSection;
