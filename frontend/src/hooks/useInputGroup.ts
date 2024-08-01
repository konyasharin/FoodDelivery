import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { InputSize } from '@/components/ui/inputs/Input/Input.tsx';

type InputGroupContextType = {
  size: InputSize;
  isHaveLeftElement: boolean;
  isHaveRightElement: boolean;
  setIsHaveLeftElement: Dispatch<SetStateAction<boolean>>;
  setIsHaveRightElement: Dispatch<SetStateAction<boolean>>;
  isHaveLeftAddon: boolean;
  isHaveRightAddon: boolean;
  setIsHaveLeftAddon: Dispatch<SetStateAction<boolean>>;
  setIsHaveRightAddon: Dispatch<SetStateAction<boolean>>;
};

export const InputGroupContext = createContext<InputGroupContextType | null>(
  null,
);

export const useInputGroup = (): Omit<InputGroupContextType, 'size'> => {
  const [isHaveLeftElement, setIsHaveLeftElement] = useState(false);
  const [isHaveRightElement, setIsHaveRightElement] = useState(false);
  const [isHaveLeftAddon, setIsHaveLeftAddon] = useState(false);
  const [isHaveRightAddon, setIsHaveRightAddon] = useState(false);
  return {
    isHaveLeftElement,
    isHaveRightElement,
    isHaveLeftAddon,
    isHaveRightAddon,
    setIsHaveLeftElement,
    setIsHaveRightElement,
    setIsHaveLeftAddon,
    setIsHaveRightAddon,
  };
};
