export const incrementValidate = (
  value: number,
  delta: number = 1,
  max: number,
): number => {
  if (delta < 0) return value;
  if (value + delta > max) return max;
  return value + delta;
};

export const decrementValidate = (
  value: number,
  delta: number = 1,
  min: number,
) => {
  if (delta < 0) return value;
  if (value - delta < min) return min;
  return value - delta;
};
