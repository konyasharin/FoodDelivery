import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationBlockLink.module.css';
import clsx from 'clsx';

type NavigationBlockLinkProps = {
  children?: ReactNode;
  icon: ReactNode;
  to: string;
};

export const NavigationBlockLink: FC<NavigationBlockLinkProps> = props => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          styles.block,
          isActive ? styles.block_active : styles.block_disabled,
        )
      }
      to={props.to}
    >
      <div className={styles.icon}>{props.icon}</div>
      <div className={clsx('text', styles.text)}>{props.children}</div>
    </NavLink>
  );
};
