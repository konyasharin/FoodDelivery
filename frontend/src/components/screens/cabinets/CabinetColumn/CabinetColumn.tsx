import { FC, ReactNode } from 'react';
import styles from './CabinetColumn.module.css';

type CabinetColumnProps = {
  children?: ReactNode;
};

export const CabinetColumn: FC<CabinetColumnProps> = props => {
  return <div className={styles.column}>{props.children}</div>;
};
