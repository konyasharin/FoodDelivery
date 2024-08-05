import { FC, FormHTMLAttributes } from 'react';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import styles from './Form.module.css';
import clsx from 'clsx';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  title: string;
};

export const Form: FC<FormProps> = ({
  className,
  children,
  title,
  ...attributes
}) => {
  return (
    <Wrapper className={clsx(className, styles.wrapper)}>
      <form {...attributes}>
        <h2>{title}</h2>
        {children}
      </form>
    </Wrapper>
  );
};
