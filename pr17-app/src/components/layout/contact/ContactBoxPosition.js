import { Box } from '@mui/material';

const ContactBoxPosition = ({ children }) => (
  <Box sx={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)' }}>
    {children}
  </Box>
);

export default ContactBoxPosition;
