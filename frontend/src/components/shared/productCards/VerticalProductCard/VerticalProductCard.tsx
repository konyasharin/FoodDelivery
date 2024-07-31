import { FC } from 'react';
import { ProductCardProps } from '@/shared/types/ProductCardProps.ts';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import { Counter, CounterProps } from '@/components/shared/Counter/Counter.tsx';
import styles from './VerticalProductCard.module.css';
import clsx from 'clsx';

export const VerticalProductCard: FC<
  ProductCardProps & { counter: CounterProps }
> = props => {
  return (
    <Wrapper className={clsx(styles.card, props.className)}>
      <img src={props.product.img} alt="product" />
      <div className={clsx('text_bold', styles.title)}>
        {props.product.title}
      </div>
      <div className={clsx('text', styles.description)}>
        {props.product.description}
      </div>
      <div className={styles.bottom_block}>
        <span className={styles.price}>{props.product.price}₽</span>
        <Counter
          value={props.counter.value}
          onIncrement={props.counter.onIncrement}
          onDecrement={props.counter.onDecrement}
        />
      </div>
    </Wrapper>
  );
};
