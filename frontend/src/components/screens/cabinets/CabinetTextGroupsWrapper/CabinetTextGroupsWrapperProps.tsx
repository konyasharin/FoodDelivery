import { FC, ReactNode } from 'react';
import styles from './CabinetTextGroupsWrapper.module.css';

type CabinetTextGroupsWrapperProps = {
  children?: ReactNode;
};

export const CabinetTextGroupsWrapper: FC<
  CabinetTextGroupsWrapperProps
> = props => {
  return <div className={styles.wrapper}>{props.children}</div>;
};
