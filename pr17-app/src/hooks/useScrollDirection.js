import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollingUp(window.scrollY < window.prevScrollY);
      }
      window.prevScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollingUp;
};

export default useScrollDirection;
