import { useState } from 'react';

const useExpandable = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return { expandedIndex, handleExpand };
};

export default useExpandable;
