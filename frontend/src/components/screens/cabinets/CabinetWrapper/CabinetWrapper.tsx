import { FC, ReactNode } from 'react';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import styles from './CabinetWrapper.module.css';

type CabinetWrapperProps = {
  children?: ReactNode;
};

export const CabinetWrapper: FC<CabinetWrapperProps> = props => {
  return (
    <section className={styles.cabinet}>
      <h2>Кабинет работника</h2>
      <Wrapper className={styles.wrapper}>{props.children}</Wrapper>
    </section>
  );
};
