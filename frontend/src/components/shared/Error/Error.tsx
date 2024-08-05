import { FC } from 'react';
import styles from './Error.module.css';
import clsx from 'clsx';

type ErrorProps = {
  error?: string;
  className?: string;
};

export const Error: FC<ErrorProps> = props => {
  return (
    <>
      {props.error && (
        <div className={clsx(styles.error, props.className)}>{props.error}</div>
      )}
    </>
  );
};
