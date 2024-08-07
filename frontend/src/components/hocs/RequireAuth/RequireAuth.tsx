import { FC, ReactNode, useEffect } from 'react';
import { UserRole } from '@/shared/types/UserRole.ts';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store.ts';
import { MAIN, SIGN_IN } from '@/shared/constants/routes.ts';

type RequireAuthProps = {
  children?: ReactNode;
  permittedRoles?: UserRole[];
};

export const RequireAuth: FC<RequireAuthProps> = props => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const checkAuth = () => {
    if (!user.userInfo) return navigate(SIGN_IN);
    if (props.permittedRoles && props.permittedRoles.length > 0) {
      let isPermitted = false;
      for (let i = 0; i < props.permittedRoles.length; i++) {
        if (user.userInfo.role === props.permittedRoles[i]) {
          isPermitted = true;
          break;
        }
      }
      if (!isPermitted) return navigate(MAIN);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return <>{props.children}</>;
};
