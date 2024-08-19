import { AdminInfoCard } from '@/components/screens/adminPanel/AdminInfoCard/AdminInfoCard.tsx';
import { FlatBasketIcon } from '@/components/icons/FlatBasketIcon.tsx';
import { AdminAddBlock } from '@/components/screens/adminPanel/AdminAddBlock/AdminAddBlock.tsx';
import styles from './AdminProductsPage.module.css';

export const AdminProductsPage = () => {
  return (
    <section>
      <div className={styles.top}>
        <AdminInfoCard
          icon={<FlatBasketIcon />}
          title={'Отсутствующих продуктов'}
          info={'54'}
        />
        <AdminAddBlock description={'Добавить продукт'} to={''} />
      </div>
    </section>
  );
};
