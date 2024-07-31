import { FC, InputHTMLAttributes } from 'react';

type InputVariants = 'form' | 'default';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariants;
};

export const Input: FC<InputProps> = ({
  variant = 'default',
  ...attributes
}) => {
  return <>123</>;
};
