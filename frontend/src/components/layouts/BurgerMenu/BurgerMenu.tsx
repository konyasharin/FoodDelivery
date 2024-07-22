import styles from './BurgerMenu.module.css';
import React, { useState } from 'react';
import clsx from 'clsx';
import { CloseIcon } from '@/components/icons/CloseIcon.tsx';
import { IconButton } from '@/components';

export const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={styles.burger} onClick={() => setIsActive(!isActive)}>
        <div className={styles.stick}></div>
        <div className={styles.stick}></div>
        <div className={styles.stick}></div>
      </div>
      <div
        className={clsx(
          styles.panel,
          isActive ? styles.panel_active : styles.panel_disable,
        )}
      >
        <IconButton onClick={() => setIsActive(false)} icon={<CloseIcon />} />
      </div>
    </>
  );
};
