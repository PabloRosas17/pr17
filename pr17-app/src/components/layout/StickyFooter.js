import React from 'react';
import { Box, Typography } from '@mui/material';

const StickyFooter = ({ children }) => {
  const emailContent = `
    <a href="mailto:pablo.rosas.0170@gmail.com?subject=Inquiry&body=Opportunities in firmware, software engineering, Android:Chrome, and Cloud." 
       class="email-link">
      Let's talk opportunities. Feel free to reach out! <br />
      Firmware. Software Engineering. Android:Chrome. Cloud. <br />
    </a>
  `;

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        padding: 2,
        height: '8vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: 'primary.light',
          fontSize: '0.85rem',
          '& .email-link': {
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': {
              textDecoration: 'underline',
              color: 'primary.dark',
            },
          },
        }}
        dangerouslySetInnerHTML={{ __html: emailContent }}
      />
    </Box>
  );
};

export default StickyFooter;
