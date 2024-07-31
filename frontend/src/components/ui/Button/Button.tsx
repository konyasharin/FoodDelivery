import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

type ButtonVariants = 'dash' | 'outline' | 'primary' | 'default';
type ButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonVariants;
  to?: string;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = 'default',
  className,
  children,
  to,
}) => {
  const navigate = useNavigate();
  return (
    <button
      className={clsx(styles.button, className, styles[variant])}
      onClick={() => {
        onClick();
        if (to) navigate(to);
      }}
    >
      {children}
    </button>
  );
};
