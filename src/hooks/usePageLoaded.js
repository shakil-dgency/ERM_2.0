"use client"
import { useEffect, useState } from 'react';

export function usePageLoaded() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // If already loaded (e.g., user refreshed fast), set it immediately
    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
      return;
    }

    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return isPageLoaded;
}