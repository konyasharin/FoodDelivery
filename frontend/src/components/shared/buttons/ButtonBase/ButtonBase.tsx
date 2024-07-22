import React from 'react';
import clsx from 'clsx';
import styles from './ButtonBase.module.css';

type ButtonBaseProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export const ButtonBase: React.FC<ButtonBaseProps> = props => {
  return (
    <button
      className={clsx(props.className, styles.icon_button)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
