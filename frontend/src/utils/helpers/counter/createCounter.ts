import { UseCounterOptions } from '@/hooks/useCounter.ts';

type CreateCounterReturn = {
  value: number;
  min: number;
  max: number;
};

export const createCounter = (
  options?: UseCounterOptions,
): CreateCounterReturn => {
  let validateValue = options?.initialValue ?? 0;
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
  if (validateValue < min) validateValue = min;
  if (validateValue > max) validateValue = max;
  return { value: validateValue, min, max };
};
