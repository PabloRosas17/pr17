import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { Stack } from '@mui/material';
import TimeLineCard from '../components/cards/timeline/TimeLineCard';
import timelineData from '../assets/data/timelineData';
import useExpandable from '../hooks/useExpandable';
import MainLayout from '../components/layout/MainLayout';
import ContactTabs from '../components/layout/contact/ContactTabs';
import MuiAboutChip from '../components/about/MuiAboutChip';
import {
  handleResumeClick,
  handleEmailClick,
  handleGitHubClick,
  handleLinkedInClick,
} from '../hooks/useContactHandlers';
import ServicesContent from '../components/services/ServicesContent';

const TimeLinePage = () => {
  const { expandedIndex, handleExpand } = useExpandable();

  return (
    <MainLayout>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          marginTop: 3,
          paddingBottom: '90px',
        }}
      >
        <ServicesContent />
      </Stack>
      <Stack
        direction="column"
        spacing={4}
        sx={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}
      >
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
        handleResumeClick={handleResumeClick}
        handleLinkedInClick={handleLinkedInClick}
        handleGitHubClick={handleGitHubClick}
        handleEmailClick={handleEmailClick}
      />
      <MuiAboutChip />
    </MainLayout>
  );
};

export default TimeLinePage;
