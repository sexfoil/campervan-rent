import { useEffect, useState } from 'react';

export const useScrollVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }
  }, []);
  return { isVisible };
};
