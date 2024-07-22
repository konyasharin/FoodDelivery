import styles from './Burger.module.css';
import React, { Dispatch, SetStateAction } from 'react';

type BurgerProps = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export const Burger: React.FC<BurgerProps> = props => {
  return (
    <div
      className={styles.burger}
      onClick={() => props.setIsActive(!props.isActive)}
    >
      <div className={styles.stick}></div>
      <div className={styles.stick}></div>
      <div className={styles.stick}></div>
    </div>
  );
};
