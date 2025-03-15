import React from 'react';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import routes from '../../routes/routes.js';
import BreadCrumbList from './BreadCrumbList.js';
import CurrentLabel from './CurrentLabel.js';
import { BreadCrumbStyles } from './BreadCrumbStyles.js';

const MuiBreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  let currentLabel = '';
  if (Array.isArray(routes)) {
    currentLabel = pathnames.length
      ? routes.find(
          (route) => route.path === `/${pathnames[pathnames.length - 1]}`
        )?.label
      : '';
  } else if (typeof routes === 'object') {
    currentLabel = pathnames.length
      ? routes[`/${pathnames[pathnames.length - 1]}`]
      : '';
  }

  if (!currentLabel) {
    currentLabel = 'timeline';
  }

  const filteredPathnames = pathnames.filter(
    (pathname) => pathname !== 'about'
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: '3px',
        backgroundColor: 'primary.light',
        borderRadius: '7px',
        boxShadow: 5,
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: '1px',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <CurrentLabel
          currentLabel={currentLabel}
          capitalizeFirstLetter={capitalizeFirstLetter}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
<<<<<<< Updated upstream
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'primary.light',
          padding: '0px',
          textAlign: 'center',
          minWidth: '200px',
        }}
      >
=======
          justifyContent: 'center',}}>
>>>>>>> Stashed changes
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: 'secondary.dark',
          }}
        >
          Soy, Pablo
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: '300',
            fontStyle: 'italic',
            fontSize: '11px',
            color: 'secondary.main',
          }}
        >
          specialist in mobile & firmware
        </Typography>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={BreadCrumbStyles}>
          <BreadCrumbList
            pathnames={filteredPathnames}
            routes={routes}
            capitalizeFirstLetter={capitalizeFirstLetter}
          />
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default MuiBreadCrumbs;
