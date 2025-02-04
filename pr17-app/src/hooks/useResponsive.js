import { useTheme, useMediaQuery } from '@mui/material';

export const useResponsive = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('sm'));
};
