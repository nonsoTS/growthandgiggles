import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-50YBS6WHXQ', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}