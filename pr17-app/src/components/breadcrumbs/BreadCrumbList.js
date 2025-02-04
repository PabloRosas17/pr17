import React from 'react';
import BreadCrumbItem from './BreadCrumbItem';

const BreadcrumbList = ({ pathnames, routes, capitalizeFirstLetter }) => (
  <>
    {pathnames.map((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = Array.isArray(routes)
        ? routes.find((route) => route.path === to)?.label || value
        : routes[to] || value;
      return (
        <BreadCrumbItem
          key={to}
          label={capitalizeFirstLetter(label)}
          isLast={index === pathnames.length - 1}
        />
      );
    })}
  </>
);

export default BreadcrumbList;
