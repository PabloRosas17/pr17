import { Card, CardContent, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const ServicesCard = ({ title, content, emoji }) => {
  const [cardDimensions, setCardDimensions] = useState({
    width: 250,
    height: 400,
  });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth * 0.19;
      const newHeight = Math.max(window.innerHeight * 0.2, 400);

      setCardDimensions({ width: newWidth, height: newHeight });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Card
      sx={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        padding: 2,
        bgcolor: 'primary.light',
        color: 'text.primary',
        boxShadow: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: 5,
          transform: 'scale(1.05)',
        },
      }}
    >
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
    </Card>
  );
};

export default ServicesCard;
