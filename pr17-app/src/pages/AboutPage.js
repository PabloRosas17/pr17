import React from 'react';
import AboutSection from '../components/about/AboutSection.js';
import MainLayout from '../components/layout/MainLayout';
import CenteredBox from '../components/layout/CenteredBox.js';
import ContactSection from '../components/layout/contact/ContactSection';
import useTabState from '../hooks/useTabState';

const AboutPage = () => {
  const { value, handleChange } = useTabState();

  return (
    <MainLayout>
      <CenteredBox>
        <AboutSection />
      </CenteredBox>
      <ContactSection value={value} handleChange={handleChange} />
    </MainLayout>
  );
};

export default AboutPage;
