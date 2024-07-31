import { useState } from 'react';
import { createCounter } from '@/utils/helpers/counter/createCounter.ts';
import {
  decrementValidate,
  incrementValidate,
} from '@/utils/helpers/counter/validate.ts';

export type UseCounterOptions = {
  initialValue?: number;
  min?: number;
  max?: number;
};

export const useCounter = (options?: UseCounterOptions) => {
  const { min, max, value: initialValue } = createCounter(options);
  const [value, setValue] = useState(initialValue);
  const increment = (delta: number = 1) => {
    setValue(incrementValidate(value, delta, max));
  };

  const decrement = (delta: number = 1) => {
    setValue(decrementValidate(value, delta, min));
  };

  return { value, increment, decrement };
};
