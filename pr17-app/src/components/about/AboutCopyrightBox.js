import { Box } from '@mui/material';

const AboutCopyrightBox = () => (
  <Box
    sx={{
      alignSelf: 'flex-end',
      fontSize: '0.7rem',
      fontStyle: 'italic',
      color: 'primary.light',
      marginTop: 'auto',
      paddingRight: 2,
      textAlign: 'right',
    }}
  >
    &copy; 2025 Pablo Rosas. All rights reserved.
  </Box>
);

export default AboutCopyrightBox;