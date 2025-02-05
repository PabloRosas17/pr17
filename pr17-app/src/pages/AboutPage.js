import React from 'react';
import AboutSection from '../components/about/AboutSection.js';
import MainLayout from '../components/layout/MainLayout';
import CenteredBox from '../components/layout/CenteredBox.js';
import ContactSection from '../components/layout/contact/ContactSection';
import useTabState from '../hooks/useTabState';
import AboutSpaceSection from '../components/about/AboutSpacedSection.js'

const AboutPage = () => {
  const { value, handleChange } = useTabState(0);

  return (
    <MainLayout>
      <CenteredBox>
        <AboutSection />
      </CenteredBox>
      <AboutSpaceSection>
        <ContactSection value={value} handleChange={handleChange} />
      </AboutSpaceSection>
    </MainLayout>
  );
};

export default AboutPage;
