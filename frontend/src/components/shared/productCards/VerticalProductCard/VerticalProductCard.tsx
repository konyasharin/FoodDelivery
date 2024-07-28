import React from 'react';
import { ProductCardProps } from '@/shared/types/ProductCardProps.ts';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import { Counter } from '@/components/shared/Counter/Counter.tsx';
import styles from './VerticalProductCard.module.css';
import clsx from 'clsx';

export const VerticalProductCard: React.FC<ProductCardProps> = props => {
  return (
    <Wrapper className={clsx(styles.card, props.className)}>
      <img src={props.img} alt="product" />
      <div className={clsx('text_bold', styles.title)}>{props.title}</div>
      <div className={clsx('text', styles.description)}>
        {props.description}
      </div>
      <div className={styles.bottom_block}>
        <span className={styles.price}>{props.price}₽</span>
        <Counter />
      </div>
    </Wrapper>
  );
};
