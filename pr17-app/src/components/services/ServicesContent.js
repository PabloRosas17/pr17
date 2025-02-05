import { Box } from '@mui/material';
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
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          width: '100%',
          maxWidth: 1200,
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
      </Box>
    </Box>
  );
};

export default ServicesContent;
