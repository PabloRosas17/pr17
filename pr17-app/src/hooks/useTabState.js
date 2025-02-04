import { useState } from 'react';

const useTabState = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
  return { value, handleChange };
};

export default useTabState;
