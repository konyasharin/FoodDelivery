import { NavigationBlock } from '@/components/shared/navigationBlocks/NavigationBlock/NavigationBlock.tsx';
import { NavigationBlockGroup } from '@/components/shared/navigationBlocks/NavigationBlockGroup/NavigationBlockGroup.tsx';
import { NavigationBlockLink } from '@/components/shared/navigationBlocks/NavigationBlockLink/NavigationBlockLink.tsx';
import { EDIT_PRODUCTS } from '@/shared/constants/routes.ts';
import { FlatBasketIcon } from '@/components/icons/FlatBasketIcon.tsx';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import { useOutlet } from 'react-router-dom';
import styles from './AdminPage.module.css';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

export const AdminPage = () => {
  const outlet = useOutlet();
  return (
    <section className={styles.admin}>
      <Typography tag={'h2'} variant={'h2'}>
        Админ-панель
      </Typography>
      <div className={styles.blocks}>
        <NavigationBlock>
          <NavigationBlockGroup title={'Контент'}>
            <NavigationBlockLink icon={<FlatBasketIcon />} to={EDIT_PRODUCTS}>
              Продукты
            </NavigationBlockLink>
          </NavigationBlockGroup>
        </NavigationBlock>
        {outlet && <Wrapper className={styles.content}>{outlet}</Wrapper>}
      </div>
    </section>
  );
};
