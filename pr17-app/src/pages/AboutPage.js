import React, { useState } from 'react';
import { Box } from '@mui/material';
import AboutSection from '../components/AboutSection.js';
import MuiBreadCrumbs from '../components/MuiBreadCrumbs.js';
import CenteredBox from '../components/CenteredBox.js';
import ContactTabs from '../components/ContactTabs';
import StickyHeader from '../components/StickyHeader.js';

const AboutPage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
  const handleEmailClick = () => window.location.href = 'mailto:pablo.rosas.0170@gmail.com';
  const handleGitHubClick = () => window.open('https://github.com/PabloRosas17', '_blank');
  const handleLinkedInClick = () => window.open('https://www.linkedin.com/in/PabloRosas17', '_blank');

  return (
    <MainLayout>
      <CenteredBox>
        <AboutSection />
      </CenteredBox>
      <Box sx={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)' }}>
        <ContactTabs
          value={value}
          handleChange={handleChange}
          handleEmailClick={handleEmailClick}
          handleGitHubClick={handleGitHubClick}
          handleLinkedInClick={handleLinkedInClick}
        />
      </Box>
    </MainLayout>
  );
};

const MainLayout = ({ children }) => (
  <div>
    <StickyHeader />
    <MuiBreadCrumbs />
    <Box sx={{ backgroundColor: 'background.default', padding: 2, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </Box>
  </div>
);

export default AboutPage;
