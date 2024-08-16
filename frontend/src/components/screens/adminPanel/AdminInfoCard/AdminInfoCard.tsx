import { FC, ReactNode } from 'react';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import styles from './AdminInfoCard.module.css';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

type AdminInfoCardProps = {
  icon: ReactNode;
  title: string;
  info: string;
};

export const AdminInfoCard: FC<AdminInfoCardProps> = props => {
  return (
    <Wrapper className={styles.card}>
      <div>
        {props.icon}
        <Typography variant={'text_small'} className={styles.title}>
          {props.title}
        </Typography>
      </div>
      <Typography>{props.info}</Typography>
    </Wrapper>
  );
};
