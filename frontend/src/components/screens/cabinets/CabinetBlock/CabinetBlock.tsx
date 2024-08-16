import { FC, ReactNode } from 'react';
import styles from './CabinetBlock.module.css';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

type CabinetBlockProps = {
  title: string;
  children?: ReactNode;
};

export const CabinetBlock: FC<CabinetBlockProps> = props => {
  return (
    <div className={styles.block}>
      <Typography tag={'h4'} variant={'h4'}>{props.title}</Typography>
      {props.children}
    </div>
  );
};
