import { FC, ReactNode } from 'react';
import styles from './NavigationBlockGroup.module.css';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

type NavigationBlockGroupProps = {
  title: string;
  children?: ReactNode;
};

export const NavigationBlockGroup: FC<NavigationBlockGroupProps> = props => {
  return (
    <div className={styles.group}>
      <Typography variant={'text_upper'} className={styles.title}>
        {props.title}
      </Typography>
      <div className={styles.children}>{props.children}</div>
    </div>
  );
};
