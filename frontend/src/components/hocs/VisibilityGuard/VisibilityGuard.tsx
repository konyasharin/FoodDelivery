import { FC, ReactNode } from 'react';
import { UserRole } from '@/shared/types/UserRole.ts';
import styles from './VisibilityGuard.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store.ts';

type VisibilityGuardProps = {
  children?: ReactNode;
  permittedRoles: UserRole[];
};

export const VisibilityGuard: FC<VisibilityGuardProps> = props => {
  const user = useSelector((state: RootState) => state.user);
  let isVisible = false;
  if (user.userInfo) {
    for (let i = 0; i < props.permittedRoles.length; i++) {
      if (props.permittedRoles[i] === user.userInfo.role) {
        isVisible = true;
        break;
      }
    }
  }

  return (
    <div className={isVisible ? styles.visible : styles.invisible}>
      {props.children}
    </div>
  );
};
