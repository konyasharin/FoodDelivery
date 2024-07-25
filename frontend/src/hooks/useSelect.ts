import { useState } from 'react';

type useSelectOptions = {
  initialActiveElement?: number;
};

export const useSelect = (elements: string[], options?: useSelectOptions) => {
  const [activeElement, setActiveElement] = useState(
    elements.length > 0
      ? options?.initialActiveElement
        ? options.initialActiveElement
        : 0
      : null,
  );
  return [activeElement, setActiveElement];
};
