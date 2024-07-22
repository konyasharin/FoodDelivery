import React from 'react';
import clsx from 'clsx';
import styles from './IconButton.module.css';

type IconButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
  className?: string;
};

export const IconButton: React.FC<IconButtonProps> = props => {
  return (
    <button
      className={clsx(props.className, styles.icon_button)}
      onClick={props.onClick}
    >
      {props.icon}
    </button>
  );
};
