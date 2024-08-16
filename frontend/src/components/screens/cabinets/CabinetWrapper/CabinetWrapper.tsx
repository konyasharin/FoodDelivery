import { FC, ReactNode } from 'react';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import styles from './CabinetWrapper.module.css';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

type CabinetWrapperProps = {
  children?: ReactNode;
};

export const CabinetWrapper: FC<CabinetWrapperProps> = props => {
  return (
    <section className={styles.cabinet}>
      <Typography tag={'h2'} variant={'h2'}>
        Кабинет работника
      </Typography>
      <Wrapper className={styles.wrapper}>{props.children}</Wrapper>
    </section>
  );
};
