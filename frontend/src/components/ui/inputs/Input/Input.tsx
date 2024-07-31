import { FC, InputHTMLAttributes, ReactNode, useRef } from 'react';
import styles from './Input.module.css';
import clsx from 'clsx';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  endContent?: ReactNode;
  startContent?: ReactNode;
  title?: string;
  wrapperClassName?: string;
  error?: string;
};

export const Input: FC<InputProps> = ({
  className,
  wrapperClassName,
  startContent,
  endContent,
  title,
  error,
  ...attributes
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div onClick={() => inputRef.current?.focus()} className={wrapperClassName}>
      {title && <span className={styles.title}>{title}</span>}
      <div
        className={clsx(
          styles.input_block,
          className,
          error && styles.input_block_error,
        )}
      >
        {startContent && (
          <div className={styles.start_content}>{startContent}</div>
        )}
        <input
          className={clsx('text', styles.input)}
          ref={inputRef}
          {...attributes}
        />
        {endContent && <div className={styles.end_content}>{endContent}</div>}
      </div>
      {error && <div className={clsx(styles.error, 'text_small')}>{error}</div>}
    </div>
  );
};
