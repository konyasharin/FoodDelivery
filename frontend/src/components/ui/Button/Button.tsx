import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

type ButtonVariants = 'dash' | 'outline' | 'primary' | 'default';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  to?: string;
};

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'default',
  to,
  onClick,
  ...attributes
}) => {
  const navigate = useNavigate();
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      onClick={e => {
        onClick?.(e);
        to && navigate(to);
      }}
      {...attributes}
    >
      {children}
    </button>
  );
};
