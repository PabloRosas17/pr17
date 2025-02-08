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
import ServicesContent from '../components/services/ServicesContent';
import ContactSection from '../components/layout/contact/ContactSection';
import useTabState from '../hooks/useTabState';

const TimeLinePage = () => {
  const { value, handleChange } = useTabState(0);
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
      <ContactSection value={value} handleChange={handleChange} />
    </MainLayout>
  );
};

export default TimeLinePage;
