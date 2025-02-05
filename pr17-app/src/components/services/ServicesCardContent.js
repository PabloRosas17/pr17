import { CardContent, Typography } from '@mui/material';

const ServicesCardContent = ({ title, content, emoji }) => (
  <CardContent
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      padding: 0,
    }}
  >
    <Typography
      variant="h6"
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        color: 'primary.main',
        fontWeight: 700,
        marginBottom: 1,
        textAlign: 'center',
        width: '100%',
      }}
    >
      {emoji} {title}
    </Typography>
    <Typography
      variant="body2"
      color="secondary.main"
      sx={{
        fontWeight: 600,
        fontSize: '0.75rem',
        width: '100%',
        wordWrap: 'break-word',
        whiteSpace: 'normal',
        padding: 0,
      }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </CardContent>
);

export default ServicesCardContent;
