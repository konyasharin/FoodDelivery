import clsx from 'clsx';
import styles from './BurgerPanel.module.css';
import { Button } from '@/components/ui/Button/Button.tsx';
import { CloseIcon } from '@/components/icons/CloseIcon.tsx';
import React, { Dispatch, SetStateAction } from 'react';

type BurgerPanelProps = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export const BurgerPanel: React.FC<BurgerPanelProps> = props => {
  return (
    <div
      className={clsx(
        styles.panel,
        props.isActive ? styles.panel_active : styles.panel_disable,
      )}
    >
      <Button onClick={() => props.setIsActive(false)}>
        <CloseIcon />
      </Button>
    </div>
  );
};
