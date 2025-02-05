import { Box } from '@mui/material';

const ContactBoxPosition = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: 1,
      backgroundColor: 'background.paper',
    }}
  >
    {children}
  </Box>
);

export default ContactBoxPosition;
