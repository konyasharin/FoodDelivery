import styles from './BasketPage.module.css';
import { HorizontalProductCard } from '@/components/shared/productCards/HorizontalProductCard/HorizontalProductCard.tsx';
import { Counter } from '@/components/shared/Counter/Counter.tsx';
import { PromotionsSlider } from '@/components/shared/sliders/PromotionsSlider/PromotionsSlider.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';
import { useCart } from '@/hooks/useCart.ts';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

export const BasketPage = () => {
  const { cart, price, createCounterHandle } = useCart();

  return (
    <section className={styles.basket_page}>
      <Typography tag={'h2'} variant={'h2'}>
        Корзина
      </Typography>
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
        <Typography variant={'text_small'} className={styles.cart_empty_block}>
          Корзина пуста
        </Typography>
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
