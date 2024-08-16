import clsx from 'clsx';
import styles from './BurgerPanel.module.css';
import { Button } from '@/components/ui/Button/Button.tsx';
import { CloseIcon } from '@/components/icons/CloseIcon.tsx';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { VisibilityGuard } from '@/components/hocs/VisibilityGuard/VisibilityGuard.tsx';
import { ROLES } from '@/shared/types/UserRole.ts';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store.ts';
import {
  ADMIN,
  COOK_CABINET,
  DELIVERYMAN_CABINET,
  MAIN,
} from '@/shared/constants/routes.ts';
import { useClickOutside } from '@/hooks/useClickOutside.ts';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

type BurgerPanelProps = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export const BurgerPanel: React.FC<BurgerPanelProps> = props => {
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const { ref, setIsActive } = useClickOutside<HTMLDivElement>(() =>
    props.setIsActive(false),
  );

  useEffect(() => {
    setIsActive(props.isActive);
  }, [props.isActive]);

  let cabinetLink = MAIN;
  switch (userInfo?.role) {
    case ROLES.DELIVERYMAN:
      cabinetLink = DELIVERYMAN_CABINET;
      break;
    case ROLES.COOK:
      cabinetLink = COOK_CABINET;
      break;
  }
  return (
    <div
      className={clsx(
        styles.panel,
        props.isActive ? styles.panel_active : styles.panel_disable,
      )}
      ref={ref}
    >
      <Button
        onClick={() => props.setIsActive(false)}
        className={styles.close_button}
      >
        <CloseIcon />
      </Button>
      <VisibilityGuard permittedRoles={[ROLES.DELIVERYMAN, ROLES.COOK]}>
        <Link
          to={cabinetLink}
          onClick={() => props.setIsActive(false)}
          className={styles.guard_text_link}
        >
          <Typography variant={'text_upper'}>Кабинет работника</Typography>
        </Link>
      </VisibilityGuard>
      <VisibilityGuard permittedRoles={[ROLES.ADMIN]}>
        <Link
          to={ADMIN}
          onClick={() => props.setIsActive(false)}
          className={styles.guard_text_link}
        >
          <Typography variant={'text_upper'}>Панель администратора</Typography>
        </Link>
      </VisibilityGuard>
    </div>
  );
};
