import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const PathLinks = ({ pathnames, routes, capitalizeFirstLetter }) => {
  return pathnames.map((value, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
    const label = routes[routeTo] || capitalizeFirstLetter(value);

    return (
      <Link
        key={routeTo}
        to={routeTo}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: '300',
            color: 'secondary.main',
          }}
        >
          {label}
        </Typography>
      </Link>
    );
  });
};

export default PathLinks;
