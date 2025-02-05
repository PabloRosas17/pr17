import React from 'react';
import TimeLineTypographySection from '../cards/timeline/TimeLineTypographySection';

const AboutSectionHeading = ({ isSmallScreen, greeting }) => (
  <TimeLineTypographySection
    variant={isSmallScreen ? 'h5' : 'h4'}
    sx={{ color: 'primary.dark' }}
  >
    {greeting}
  </TimeLineTypographySection>
);

export default AboutSectionHeading;
