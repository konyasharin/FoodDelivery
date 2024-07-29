import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import { Burger } from '@/components/layouts/burgerMenu/Burger/Burger.tsx';
import { BurgerPanel } from '@/components/layouts/burgerMenu/BurgerPanel/BurgerPanel.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';
import { BasketIcon } from '@/components/icons/BasketIcon.tsx';
import { Container } from '@/components/layouts/Container/Container.tsx';

export const Header = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
            <NavLink
              to={'#delivery'}
              className={clsx('text_upper', styles.link)}
            >
              Доставка
            </NavLink>
            <NavLink
              to={'#delivery'}
              className={clsx('text_upper', styles.link)}
            >
              Акции
            </NavLink>
            <NavLink
              to={'#delivery'}
              className={clsx('text_upper', styles.link)}
            >
              Продукты
            </NavLink>
            <NavLink
              to={'#delivery'}
              className={clsx('text_upper', styles.link)}
            >
              Вход
            </NavLink>
          </div>
          <Button
            onClick={() => console.log('Корзина')}
            className={styles.basket_button}
            variant={'dash'}
          >
            <BasketIcon size={36} />
            <span className={'text_bold'}>129₽</span>
          </Button>
        </Container>
      </header>
    </>
  );
};
