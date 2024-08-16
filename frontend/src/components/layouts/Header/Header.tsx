import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import { Burger } from '@/components/layouts/burgerMenu/Burger/Burger.tsx';
import { BurgerPanel } from '@/components/layouts/burgerMenu/BurgerPanel/BurgerPanel.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';
import { BasketIcon } from '@/components/icons/BasketIcon.tsx';
import { Container } from '@/components/layouts/Container/Container.tsx';
import {
  BASKET,
  DELIVERY,
  PRODUCTS,
  PROMOTIONS,
  SIGN_IN,
} from '@/shared/constants/routes.ts';
import { HashLink } from 'react-router-hash-link';
import { useCart } from '@/hooks/useCart.ts';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

export const Header = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { price } = useCart();
  function handleScroll() {
    setIsScrolled(window.scrollY > 100);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <BurgerPanel isActive={burgerIsActive} setIsActive={setBurgerIsActive} />
      <div className={styles.header_fixed}></div>
      <header
        className={clsx(styles.header, isScrolled ? styles.header_active : '')}
      >
        <Container className={styles.content_block}>
          <Burger isActive={burgerIsActive} setIsActive={setBurgerIsActive} />
          <div className={styles.links}>
            <HashLink to={DELIVERY} className={styles.link}>
              <Typography variant={'text_upper'}>Доставка</Typography>
            </HashLink>
            <HashLink to={PROMOTIONS} className={styles.link}>
              <Typography variant={'text_upper'}>Акции</Typography>
            </HashLink>
            <HashLink to={PRODUCTS} className={styles.link}>
              <Typography variant={'text_upper'}>Продукты</Typography>
            </HashLink>
            <Link to={SIGN_IN} className={styles.link}>
              <Typography variant={'text_upper'}>Вход</Typography>
            </Link>
          </div>
          <Button
            className={
              price > 0
                ? clsx(styles.basket_button_active, styles.basket_button)
                : styles.basket_button
            }
            variant={price > 0 ? 'primary' : 'dash'}
            to={BASKET}
          >
            <BasketIcon />
            <Typography variant={'text_bold'}>{price}₽</Typography>
          </Button>
        </Container>
      </header>
    </>
  );
};
