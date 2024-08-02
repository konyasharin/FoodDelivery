import { FC, ReactNode } from 'react';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import styles from './Form.module.css';
import clsx from 'clsx';

type FormProps = {
  title: string;
  className?: string;
  children?: ReactNode;
};

export const Form: FC<FormProps> = props => {
  return (
    <Wrapper className={clsx(props.className, styles.wrapper)}>
      <form onSubmit={e => e.preventDefault()}>
        <h2>{props.title}</h2>
        {props.children}
      </form>
    </Wrapper>
  );
};
