import React from 'react';
import { Paper } from '@mui/material';
import { useResponsive } from '../../hooks/useResponsive';
import { AboutSectionContent } from './AboutSectionContent';
import AboutSectionHeading from './AboutSectionHeading';
import AboutSectionBody from './AboutSectionBody';
import AboutCopyrightBox from './AboutCopyrightBox.js';
import { AboutSectionStyle } from './AboutSectionStyle';

const AboutSection = () => {
  const isSmallScreen = useResponsive();

  return (
    <Paper sx={AboutSectionStyle(isSmallScreen)}>
      <AboutSectionHeading
        isSmallScreen={isSmallScreen}
        greeting={AboutSectionContent.greeting}
      />
      <AboutSectionBody isSmallScreen={isSmallScreen} />
      <AboutCopyrightBox />
    </Paper>
  );
};

export default AboutSection;
