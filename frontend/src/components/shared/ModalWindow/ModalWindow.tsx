import { FC, ReactNode } from 'react';
import { Typography } from '@/components/ui/Typography/Typography.tsx';
import styles from './ModalWindow.module.css';
import { CloseIcon } from '@/components/icons/CloseIcon.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';
import clsx from 'clsx';

type ModalWindowProps = {
  title?: string;
  children?: ReactNode;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};

export const ModalWindow: FC<ModalWindowProps> = props => {
  return (
    <>
      <div
        className={clsx(
          props.isActive ? styles.active : styles.disabled,
          styles.background,
        )}
      ></div>
      <div
        className={clsx(
          props.isActive ? styles.active : styles.disabled,
          styles.modal,
        )}
      >
        <div className={styles.top}>
          <Typography variant={'h4'}>{props.title}</Typography>
          <Button onClick={() => props.setIsActive(false)}>
            <CloseIcon />
          </Button>
        </div>
        <div className={styles.content}>{props.children}</div>
      </div>
    </>
  );
};
