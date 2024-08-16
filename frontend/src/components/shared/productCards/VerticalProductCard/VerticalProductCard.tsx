import { FC } from 'react';
import { ProductCardProps } from '@/components/shared/productCards/types/ProductCardProps.ts';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import { Counter } from '@/components/shared/Counter/Counter.tsx';
import styles from './VerticalProductCard.module.css';
import clsx from 'clsx';
import { Counter as CounterType } from '@/shared/types/Counter.ts';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

export const VerticalProductCard: FC<
  ProductCardProps & { counter: CounterType }
> = props => {
  return (
    <Wrapper className={clsx(styles.card, props.className)}>
      <img src={props.product.img} alt="product" />
      <Typography variant={'text_bold'} className={styles.title}>
        {props.product.title}
      </Typography>
      <Typography className={styles.description}>
        {props.product.description}
      </Typography>
      <div className={styles.bottom_block}>
        <Typography variant={'h3'}>{props.product.price}₽</Typography>
        <Counter
          value={props.counter.value}
          onIncrement={props.counter.onIncrement}
          onDecrement={props.counter.onDecrement}
        />
      </div>
    </Wrapper>
  );
};
