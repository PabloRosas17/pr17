import React from 'react';
import { Stack, Tabs } from '@mui/material';
import ContactTab from './ContactTab';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const ContactTabs = ({
  value,
  handleChange,
  handleResumeClick,
  handleEmailClick,
  handleGitHubClick,
  handleLinkedInClick,
}) => (
  <Stack direction="column" spacing={1} alignItems="center">
    <Tabs
      value={value ?? 0}
      onChange={handleChange}
      aria-label="contact tabs"
      sx={{ '& .MuiTabs-indicator': { display: 'none' } }}
    >
      <ContactTab
        icon={<LinkedInIcon />}
        label="LinkedIn"
        onClick={handleLinkedInClick}
      />
      <ContactTab
        icon={<GitHubIcon />}
        label="GitHub"
        onClick={handleGitHubClick}
      />
      <ContactTab
        icon={<EmailIcon />}
        label="Email"
        onClick={handleEmailClick}
      />
      <ContactTab
        icon={<CloudDownloadIcon />}
        label="Resume"
        onClick={handleResumeClick}
      />
    </Tabs>
  </Stack>
);

export default ContactTabs;
