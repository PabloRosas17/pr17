import React from 'react';
import { Breadcrumbs } from '@mui/material';
import { useLocation } from 'react-router-dom';
import routes from '../../routes/routes.js';
import { BreadCrumbStyles } from './BreadCrumbStyles.js';
import BreadCrumbList from './BreadCrumbList.js';
import CurrentLabel from './CurrentLabel.js'

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

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={BreadCrumbStyles}>
      <BreadCrumbList
        pathnames={pathnames}
        routes={routes}
        capitalizeFirstLetter={capitalizeFirstLetter}
      />
      <CurrentLabel
        currentLabel={currentLabel}
        capitalizeFirstLetter={capitalizeFirstLetter}
      />
    </Breadcrumbs>
  );
};

export default MuiBreadCrumbs;
