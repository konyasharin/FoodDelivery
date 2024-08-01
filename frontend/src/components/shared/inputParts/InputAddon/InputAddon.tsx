import { InputGroupInnerLocation } from '@/components/shared/inputParts/types/InputGroupInnerLocation.ts';
import { FC, ReactNode, useContext, useEffect } from 'react';
import clsx from 'clsx';
import styles from './InputAddon.module.css';
import { InputGroupContext } from '@/hooks/useInputGroup.ts';

type InputAddonProps = {
  location: InputGroupInnerLocation;
  children?: ReactNode;
  className?: string;
};

export const InputAddon: FC<InputAddonProps> = props => {
  const context = useContext(InputGroupContext);
  useEffect(() => {
    if (props.location === 'left') context?.setIsHaveLeftAddon(true);
    if (props.location === 'right') context?.setIsHaveRightAddon(true);
  }, []);
  return (
    <div
      className={clsx(
        props.className,
        styles.addon,
        styles[props.location],
        styles[context?.size ?? 'medium'],
      )}
    >
      {props.children}
    </div>
  );
};
