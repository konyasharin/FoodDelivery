import { useState } from 'react';

type useCountOptions = {
  initialValue?: number;
  min?: number;
  max?: number;
};

export const useCount = (options?: useCountOptions) => {
  const [value, setValue] = useState(
    options?.initialValue ? options.initialValue : 0,
  );
  const { min, max } = {
    min: Math.min(
      options?.min ?? Number.NEGATIVE_INFINITY,
      options?.max ?? Number.POSITIVE_INFINITY,
    ),
    max: Math.max(
      options?.min ?? Number.NEGATIVE_INFINITY,
      options?.max ?? Number.POSITIVE_INFINITY,
    ),
  };
  if (value < min) setValue(min);
  if (value > max) setValue(max);
  const increment = (delta: number = 1) => {
    setValue(prevValue => {
      if (delta < 0) return prevValue;
      if (prevValue + delta > max) return prevValue;
      return prevValue + delta;
    });
  };

  const decrement = (delta: number = 1) => {
    setValue(prevValue => {
      if (delta < 0) return prevValue;
      if (prevValue - delta < min) return prevValue;
      return prevValue - delta;
    });
  };

  return { value, increment, decrement };
};
