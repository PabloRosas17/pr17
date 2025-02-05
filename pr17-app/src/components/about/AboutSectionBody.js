import React from 'react';
import TimeLineTypographySection from '../cards/timeline/TimeLineTypographySection';
import { AboutSectionContent } from './AboutSectionContent';

const AboutSectionBody = ({ isSmallScreen }) => (
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
);

export default AboutSectionBody;
