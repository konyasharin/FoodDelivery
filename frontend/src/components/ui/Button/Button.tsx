import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

type ButtonVariants = 'dash' | 'outline' | 'primary' | 'default';
type ButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonVariants;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = 'default',
  className,
  children,
}) => {
  return (
    <button
      className={clsx(styles.button, className, styles[variant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
