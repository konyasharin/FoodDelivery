import React from 'react';
import styles from './Wrapper.module.css';
import clsx from 'clsx';

type WrapperProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Wrapper: React.FC<WrapperProps> = props => {
  return (
    <div className={clsx(styles.wrapper, props.className)}>
      {props.children}
    </div>
  );
};
