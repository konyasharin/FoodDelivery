import { FC, InputHTMLAttributes } from 'react';
import styles from './FormInput.module.css';
import clsx from 'clsx';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const FormInput: FC<FormInputProps> = ({
  className,
  error,
  ...attributes
}) => {
  return (
    <div className={className}>
      <input
        className={clsx(styles.input, 'text', error && styles.input_error)}
        {...attributes}
      />
      {error && <div className={clsx('text_small', styles.error)}>{error}</div>}
    </div>
  );
};
