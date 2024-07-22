import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Header.module.css';
import { useState } from 'react';
import { Burger } from '@/components/layouts/burgerMenu/Burger/Burger.tsx';
import { BurgerPanel } from '@/components/layouts/burgerMenu/BurgerPanel/BurgerPanel.tsx';
import {ButtonBase} from "@/components/shared/buttons/ButtonBase/ButtonBase.tsx";
import {BasketIcon} from "@/components/icons/BasketIcon.tsx";

export const Header = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  return (
    <>
      <BurgerPanel isActive={burgerIsActive} setIsActive={setBurgerIsActive} />
      <header className={styles.header}>
        <Burger isActive={burgerIsActive} setIsActive={setBurgerIsActive} />
        <div className={styles.links}>
          <NavLink to={'#delivery'} className={clsx('text_upper', styles.link)}>
            Доставка
          </NavLink>
          <NavLink to={'#delivery'} className={clsx('text_upper', styles.link)}>
            Акции
          </NavLink>
          <NavLink to={'#delivery'} className={clsx('text_upper', styles.link)}>
            Продукты
          </NavLink>
          <NavLink to={'#delivery'} className={clsx('text_upper', styles.link)}>
            Вход
          </NavLink>
        </div>
        <ButtonBase onClick={() => console.log('Корзина')}>
          <BasketIcon width={36} height={36} />
        </ButtonBase>
      </header>
    </>
  );
};
