import { FC, ReactNode } from 'react';
import styles from './CabinetTextGroups.module.css';

type CabinetTextGroupsProps = {
  children?: ReactNode;
};

export const CabinetTextGroups: FC<CabinetTextGroupsProps> = props => {
  return <div className={styles.wrapper}>{props.children}</div>;
};
