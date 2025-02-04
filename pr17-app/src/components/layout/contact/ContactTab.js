import React from 'react';
import { Tab, Tooltip } from '@mui/material';

const ContactTab = ({ icon, onClick, label }) => {
  return (
    <Tooltip title={label} arrow>
      <Tab
        icon={icon}
        aria-label={label}
        onClick={onClick}
        sx={{
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#f0f0f0',
          },
          '&.Mui-selected': {
            backgroundColor: '#e0e0e0',
          },
        }}
      />
    </Tooltip>
  );
};

export default ContactTab;
