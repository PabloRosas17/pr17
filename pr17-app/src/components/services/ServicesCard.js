import { Card } from '@mui/material';
import { useState } from 'react';
import ServicesCardContent from './ServicesCardContent';
import { getCardStyles } from './ServicesCardStyles';

const ServicesCard = ({ title, content, emoji }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Card
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      sx={getCardStyles(isPressed)}
    >
      <ServicesCardContent title={title} content={content} emoji={emoji} />
    </Card>
  );
};

export default ServicesCard;
