import styles from './BasketPage.module.css';
import { HorizontalProductCard } from '@/components/shared/productCards/HorizontalProductCard/HorizontalProductCard.tsx';
import { Counter } from '@/components/shared/Counter/Counter.tsx';
import { PromotionsSlider } from '@/components/shared/sliders/PromotionsSlider/PromotionsSlider.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';
import { useEffect, useState } from 'react';
import { useCart } from '@/hooks/useCart.ts';

export const BasketPage = () => {
  const { cart, createCounterHandle } = useCart();
  const getPrice = () => {
    let price = 0;
    cart.products.forEach(product => (price += product.price));
    return price;
  };
  const [price, setPrice] = useState(getPrice());

  useEffect(() => {
    setPrice(getPrice());
  }, [cart]);

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
      <PromotionsSlider />
      <Button onClick={() => console.log('Оформить заказ')}>
        Оформить заказ за {price}₽
      </Button>
    </section>
  );
};
