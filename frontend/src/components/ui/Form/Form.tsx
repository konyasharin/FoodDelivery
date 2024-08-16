import { FC, FormHTMLAttributes } from 'react';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import styles from './Form.module.css';
import clsx from 'clsx';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

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
        <Typography variant={'h2'} tag={'h2'}>
          {title}
        </Typography>
        {children}
      </form>
    </Wrapper>
  );
};
