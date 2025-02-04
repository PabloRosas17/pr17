export const TimeLineCardStyle = (isSmallScreen) => ({
    width: isSmallScreen ? '90%' : '50%',
    margin: 'auto',
    marginTop: -2,
    marginBottom: 2,
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      backgroundColor: 'primary.light',
      boxShadow: '0px 4px 10px rgba(21, 21, 21, 0.3)',
    },
  });
  