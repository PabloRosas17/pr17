export const getCardStyles = (isPressed) => ({
  display: 'flex',
  width: {
    xs: '90%',
    sm: '80%',
    md: '70%',
    lg: '60%',
    xl: '50%',
  },
  height: {
    xs: '50%',
    sm: '60%',
    md: '70%',
    lg: '80%',
    xl: '90%',
  },
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 1,
  bgcolor: 'primary.light',
  color: 'text.primary',
  boxShadow: 3,
  borderRadius: 2,
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    boxShadow: 5,
    transform: 'scale(1.05)',
  },
  '&:active': {
    boxShadow: 6,
    transform: 'scale(0.95)',
  },
  ...(isPressed && {
    boxShadow: 6,
    transform: 'scale(0.95)',
  }),
});
