import { FC, ReactNode } from 'react';
import styles from './CabinetBlock.module.css';

type CabinetBlockProps = {
  title: string;
  children?: ReactNode;
};

export const CabinetBlock: FC<CabinetBlockProps> = props => {
  return (
    <div className={styles.block}>
      <h4>{props.title}</h4>
      {props.children}
    </div>
  );
};
