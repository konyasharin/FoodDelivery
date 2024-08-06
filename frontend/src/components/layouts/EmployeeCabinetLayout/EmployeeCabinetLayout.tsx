import { FC, ReactNode } from 'react';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import styles from './EmployeeCabinetLayout.module.css';

type EmployeeCabinetLayoutProps = {
  children?: ReactNode;
};

export const EmployeeCabinetLayout: FC<EmployeeCabinetLayoutProps> = props => {
  return (
    <section className={styles.cabinet}>
      <h2>Кабинет работника</h2>
      <Wrapper className={styles.wrapper}>{props.children}</Wrapper>
    </section>
  );
};
