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
} from '@/shared/routes/routes.ts';
import { HashLink } from 'react-router-hash-link';
import { useCart } from '@/hooks/useCart.ts';

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
            <HashLink to={DELIVERY} className={clsx('text_upper', styles.link)}>
              Доставка
            </HashLink>
            <HashLink
              to={PROMOTIONS}
              className={clsx('text_upper', styles.link)}
            >
              Акции
            </HashLink>
            <HashLink to={PRODUCTS} className={clsx('text_upper', styles.link)}>
              Продукты
            </HashLink>
            <Link to={SIGN_IN} className={clsx('text_upper', styles.link)}>
              Вход
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
            <BasketIcon size={36} />
            <span className={'text_bold'}>{price}₽</span>
          </Button>
        </Container>
      </header>
    </>
  );
};
