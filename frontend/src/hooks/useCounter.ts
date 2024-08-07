import { useState } from 'react';
import { createCounter } from '@/utils/helpers/counter/createCounter.ts';
import { counterValidate } from '@/utils/helpers/counter/counterValidate.ts';

export type UseCounterOptions = {
  initialValue?: number;
  min?: number;
  max?: number;
};

export const useCounter = (options?: UseCounterOptions) => {
  const { min, max, value: initialValue } = createCounter(options);
  const [value, setValue] = useState(initialValue);
  const increment = (delta: number = 1) => {
    setValue(counterValidate(value + delta, min, max));
  };

  const decrement = (delta: number = 1) => {
    setValue(counterValidate(value - delta, min, max));
  };

  return { value, increment, decrement };
};
