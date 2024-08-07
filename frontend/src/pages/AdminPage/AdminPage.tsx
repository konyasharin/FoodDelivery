import { NavigationBlock } from '@/components/shared/navigationBlocks/NavigationBlock/NavigationBlock.tsx';
import { NavigationBlockGroup } from '@/components/shared/navigationBlocks/NavigationBlockGroup/NavigationBlockGroup.tsx';
import { NavigationBlockLink } from '@/components/shared/navigationBlocks/NavigationBlockLink/NavigationBlockLink.tsx';
import { EDIT_PRODUCTS } from '@/shared/constants/routes.ts';
import { FlatBasketIcon } from '@/components/icons/FlatBasketIcon.tsx';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import { Outlet } from 'react-router-dom';
import styles from './AdminPage.module.css';

export const AdminPage = () => {
  return (
    <section className={styles.admin}>
      <h2>Админ-панель</h2>
      <div className={styles.blocks}>
        <NavigationBlock>
          <NavigationBlockGroup title={'Контент'}>
            <NavigationBlockLink icon={<FlatBasketIcon />} to={EDIT_PRODUCTS}>
              Продукты
            </NavigationBlockLink>
          </NavigationBlockGroup>
        </NavigationBlock>
        <Wrapper className={styles.content}>
          <Outlet />
        </Wrapper>
      </div>
    </section>
  );
};
