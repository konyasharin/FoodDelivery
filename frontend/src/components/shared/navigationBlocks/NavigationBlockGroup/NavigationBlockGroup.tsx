import { FC, ReactNode } from 'react';
import styles from './NavigationBlockGroup.module.css';
import clsx from 'clsx';

type NavigationBlockGroupProps = {
  title: string;
  children?: ReactNode;
};

export const NavigationBlockGroup: FC<NavigationBlockGroupProps> = props => {
  return (
    <div className={styles.group}>
      <div className={clsx('text_upper', styles.title)}>{props.title}</div>
      <div className={styles.children}>{props.children}</div>
    </div>
  );
};
