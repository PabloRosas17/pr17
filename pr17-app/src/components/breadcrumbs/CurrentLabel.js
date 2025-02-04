import React from 'react';
import BreadCrumbItem from './BreadCrumbItem';

const CurrentLabel = ({ currentLabel, capitalizeFirstLetter }) => (
  currentLabel ? (
    <BreadCrumbItem
      label={capitalizeFirstLetter(currentLabel)}
      isLast={true}
    />
  ) : null
);

export default CurrentLabel;
