import { Box, Stack } from '@mui/material';
import servicesData from '../../assets/data/servicesData.js';
import ServicesCard from './ServicesCard.js';

const ServicesContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            title={item.title}
            content={item.content}
            emoji={item.ic}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ServicesContent;
