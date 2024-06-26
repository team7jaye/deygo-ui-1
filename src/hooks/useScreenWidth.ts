'use client';

import { useState, useEffect } from 'react';

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      updateScreenWidth();
      window.addEventListener('resize', updateScreenWidth);

      return () => {
        window.removeEventListener('resize', updateScreenWidth);
      };
    }
  }, []);

  return screenWidth;
};