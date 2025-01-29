import React, { useState } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { Stack, Box } from '@mui/material';
import MuiAboutChip from '../components/MuiAboutChip.js';
import MuiBreadCrumbs from '../components/MuiBreadCrumbs.js';
import StickyHeader from '../components/StickyHeader.js';
import TimeLineCard from '../components/TimeLineCard.js';
import timelineData from '../assets/data/timelineData.js';
import ContactTabs from '../components/ContactTabs'; // New component

const TimeLinePage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleExpand = (index) => { setExpandedIndex(index === expandedIndex ? null : index); };
  const handleEmailClick = () => window.location.href = 'mailto:pablo.rosas.0170@gmail.com';
  const handleGitHubClick = () => window.open('https://github.com/PabloRosas17', '_blank');
  const handleLinkedInClick = () => window.open('https://www.linkedin.com/in/PabloRosas17', '_blank');

  return (
    <MainLayout>
      <Stack direction="column" spacing={4} sx={{ width: '100%', maxWidth: 1200 }}>
        <Timeline position="alternate">
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < timelineData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <TimeLineCard
                  title={item.title}
                  content={item.content}
                  expandedIndex={expandedIndex}
                  index={index}
                  handleExpand={handleExpand}
                  link={item.link}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Stack>
      <ContactTabs
        handleLinkedInClick={handleLinkedInClick}
        handleGitHubClick={handleGitHubClick}
        handleEmailClick={handleEmailClick}
      />
      <MuiAboutChip />
    </MainLayout>
  );
};

const MainLayout = ({ children }) => (
  <div style={{ height: '100vh', overflow: 'auto' }}>
    <StickyHeader />
    <MuiBreadCrumbs />
    <Box sx={{ backgroundColor: 'background.default', padding: 2, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </Box>
  </div>
);

export default TimeLinePage;
