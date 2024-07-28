import { useState } from 'react';

type UseSelectOptions = {
  initialActiveElement?: number;
};

type UseSelectReturn = [number, (newActiveElement: number) => void];

export const useSelect = <T>(
  elements: T[],
  options?: UseSelectOptions,
): UseSelectReturn => {
  if (elements.length === 0) throw new Error('No elements in array');
  const [activeElement, setActiveElement] = useState<number>(
    options?.initialActiveElement ? options.initialActiveElement : 0,
  );

  const setActiveElementHandle = (newActiveElement: number) => {
    if (newActiveElement <= 0) return setActiveElement(0);
    setActiveElement(newActiveElement);
  };

  return [activeElement, setActiveElementHandle];
};
