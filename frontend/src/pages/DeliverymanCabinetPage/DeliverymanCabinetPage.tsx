import { EmployeeCabinetLayout } from '@/components/layouts/EmployeeCabinetLayout/EmployeeCabinetLayout.tsx';
import { RequireAuth } from '@/components/hocs/RequireAuth/RequireAuth.tsx';
import { ROLES } from '@/shared/types/UserRole.ts';
import styles from './DeliverymanCabinetPage.module.css';

export const DeliverymanCabinetPage = () => {
  return (
    <RequireAuth permittedRoles={[ROLES.DELIVERYMAN]}>
      <EmployeeCabinetLayout>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <h4>Основная информация</h4>
          </div>
          <div className={styles.block}>
            <h4>Текущий заказ</h4>
          </div>
        </div>
      </EmployeeCabinetLayout>
    </RequireAuth>
  );
};
