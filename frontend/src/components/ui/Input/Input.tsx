import { FC, InputHTMLAttributes, useContext } from 'react';
import styles from './Input.module.css';
import clsx from 'clsx';
import { InputGroupContext } from '@/hooks/useInputGroup.ts';

type InputVariant = 'filled' | 'underlined';
export type InputSize = 'small' | 'medium';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: InputSize;
  variant?: InputVariant;
  isError?: boolean;
};

export const Input: FC<InputProps> = ({
  className,
  variant = 'filled',
  size,
  isError,
  ...attributes
}) => {
  const context = useContext(InputGroupContext);
  const finalSize: InputSize = size ?? context?.size ?? 'medium';
  return (
    <input
      className={clsx(
        'text',
        styles[variant],
        styles[finalSize],
        isError && styles.error,
        context?.isHaveLeftElement && styles.is_have_left_element,
        context?.isHaveRightElement && styles.is_have_right_element,
        context?.isHaveLeftAddon && styles.is_have_left_addon,
        context?.isHaveRightAddon && styles.is_have_right_addon,
        className,
      )}
      {...attributes}
    />
  );
};
