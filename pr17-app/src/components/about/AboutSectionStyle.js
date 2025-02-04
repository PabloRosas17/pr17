export const AboutSectionStyle = (isSmallScreen) => ({
    padding: isSmallScreen ? 2 : 4,
    textAlign: 'center',
    width: isSmallScreen ? '90%' : '60%',
    margin: 'auto',
    boxShadow: 3,
    '&:hover': {
      backgroundColor: 'background.paper',
      boxShadow: '0px 4px 10px rgba(21, 21, 21, 0.3)',
    },
  });
  