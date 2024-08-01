import styles from './InputGroup.module.css';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { InputSize } from '@/components/ui/inputs/Input/Input.tsx';
import { InputGroupContext, useInputGroup } from '@/hooks/useInputGroup.ts';

type InputGroupProps = {
  children?: ReactNode;
  className?: string;
  size?: InputSize;
};

export const InputGroup: FC<InputGroupProps> = props => {
  const size = props.size ?? 'medium';
  const value = { ...useInputGroup(), size };
  return (
    <InputGroupContext.Provider value={value}>
      <div className={clsx(styles.input_group, props.className, styles[size])}>
        {props.children}
      </div>
    </InputGroupContext.Provider>
  );
};
