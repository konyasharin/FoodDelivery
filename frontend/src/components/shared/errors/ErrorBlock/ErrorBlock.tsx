import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './ErrorBlock.module.css';
import { Error } from '@/components/shared/errors/Error/Error.tsx';

type ErrorBlockProps = {
  error?: string;
  children?: ReactNode;
  className?: string;
};

export const ErrorBlock: FC<ErrorBlockProps> = props => {
  return (
    <div className={clsx(props.className, styles.block)}>
      {props.children}
      <Error error={props.error} className={styles.error} />
    </div>
  );
};
