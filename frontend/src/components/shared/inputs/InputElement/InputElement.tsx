import { FC, ReactNode, useContext, useEffect } from 'react';
import clsx from 'clsx';
import styles from './InputElement.module.css';
import { InputGroupInnerLocation } from '@/components/shared/inputs/types/InputGroupInnerLocation.ts';
import { InputGroupContext } from '@/components/shared/inputs/InputGroup/useInputGroup.ts';

type InputElementProps = {
  children?: ReactNode;
  className?: string;
  location: InputGroupInnerLocation;
};

export const InputElement: FC<InputElementProps> = props => {
  const context = useContext(InputGroupContext);
  useEffect(() => {
    if (props.location === 'left') context?.setIsHaveLeftElement(true);
    if (props.location === 'right') context?.setIsHaveRightElement(true);
  }, []);
  return (
    <div
      className={clsx(styles.element, styles[props.location], props.className)}
    >
      {props.children}
    </div>
  );
};
