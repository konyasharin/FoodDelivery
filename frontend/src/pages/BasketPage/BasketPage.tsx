import styles from './BasketPage.module.css';
import { HorizontalProductCard } from '@/components/shared/productCards/HorizontalProductCard/HorizontalProductCard.tsx';
import { Counter } from '@/components/shared/Counter/Counter.tsx';
import { PromotionsSlider } from '@/components/shared/sliders/PromotionsSlider/PromotionsSlider.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';
import { useCart } from '@/hooks/useCart.ts';
import clsx from 'clsx';

export const BasketPage = () => {
  const { cart, price, createCounterHandle } = useCart();

  return (
    <section className={styles.basket_page}>
      <h2>Корзина</h2>
      {cart.products.map((product, i) => {
        const counter = createCounterHandle(product);
        return (
          <HorizontalProductCard
            product={product}
            className={styles.card}
            rightBottomBlock={
              <Counter
                value={counter.value}
                onIncrement={counter.onIncrement}
                onDecrement={counter.onDecrement}
              />
            }
            key={i}
          />
        );
      })}
      {cart.products.length === 0 && (
        <div className={clsx(styles.cart_empty_block, 'text_small')}>
          Корзина пуста
        </div>
      )}
      <PromotionsSlider />
      <Button
        className={styles.button}
        variant={'primary'}
        onClick={() => console.log('Оформить заказ')}
        disabled={price <= 0}
      >
        Оформить заказ за {price}₽
      </Button>
    </section>
  );
};
