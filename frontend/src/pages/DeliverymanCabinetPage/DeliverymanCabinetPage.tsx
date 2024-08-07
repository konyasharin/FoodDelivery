import { RequireAuth } from '@/components/hocs/RequireAuth/RequireAuth.tsx';
import { ROLES } from '@/shared/types/UserRole.ts';
import { CabinetBlock } from '@/components/screens/cabinets/CabinetBlock/CabinetBlock.tsx';
import { CabinetTextGroup } from '@/components/screens/cabinets/CabinetTextGroup/CabinetTextGroup.tsx';
import { CabinetWrapper } from '@/components/screens/cabinets/CabinetWrapper/CabinetWrapper.tsx';
import { CabinetColumn } from '@/components/screens/cabinets/CabinetColumn/CabinetColumn.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';
import styles from './DeliverymanCabinetPage.module.css';
import { CabinetTextGroups } from '@/components/screens/cabinets/CabinetTextGroups/CabinetTextGroups.tsx';

export const DeliverymanCabinetPage = () => {
  return (
    <RequireAuth permittedRoles={[ROLES.DELIVERYMAN]}>
      <CabinetWrapper>
        <CabinetColumn>
          <CabinetBlock title={'Основная информация'}>
            <CabinetTextGroup title={'Должность'} content={'Доставщик'} />
          </CabinetBlock>
          <CabinetBlock title={'Основная информация'}>
            <CabinetTextGroups>
              <CabinetTextGroup title={'Должность'} content={'Доставщик'} />
              <CabinetTextGroup title={'Должность'} content={'Доставщик'} />
            </CabinetTextGroups>
          </CabinetBlock>
        </CabinetColumn>
        <CabinetColumn>
          <CabinetBlock title={'Основная информация правая'}>
            <CabinetTextGroups>
              <CabinetTextGroup title={'Должность'} content={'Доставщик'} />
              <CabinetTextGroup title={'Должность'} content={'Доставщик'} />
            </CabinetTextGroups>
            <Button variant={'primary'} className={styles.button}>
              Завершить заказ
            </Button>
          </CabinetBlock>
        </CabinetColumn>
      </CabinetWrapper>
    </RequireAuth>
  );
};
