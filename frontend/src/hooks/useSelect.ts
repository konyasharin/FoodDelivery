import { useState } from 'react';

type UseSelectOptions = {
  initialActiveElement?: number;
};

type UseSelectReturn = [number, (newActiveElement: number) => void];

export const useSelect = (
  length: number,
  options?: UseSelectOptions,
): UseSelectReturn => {
  const [activeElement, setActiveElement] = useState<number>(
    options?.initialActiveElement ? options.initialActiveElement : 0,
  );

  const setActiveElementHandle = (newActiveElement: number) => {
    if (newActiveElement <= 0) return setActiveElement(0);
    if (newActiveElement > length) return setActiveElement(length);
    setActiveElement(newActiveElement);
  };

  return [activeElement, setActiveElementHandle];
};
