import React from 'react';
import styles from './Container.module.css';
import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = props => {
  return (
    <div className={clsx(props.className, styles.container)}>
      {props.children}
    </div>
  );
};
