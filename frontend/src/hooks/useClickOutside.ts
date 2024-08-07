import { useEffect, useRef, useState } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  callback: () => void,
) => {
  const ref = useRef<T | null>(null);
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e: MouseEvent) => {;
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    if (!isActive) return;
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [callback, isActive]);

  return { ref, setIsActive };
};
