import { ProductCardProps } from '@/components/shared/productCards/types/ProductCardProps.ts';
import { FC, ReactNode } from 'react';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import styles from './HorizontalProductCard.module.css';
import clsx from 'clsx';

type HorizontalProductCardProps = ProductCardProps & {
  rightBottomBlock?: ReactNode;
};

export const HorizontalProductCard: FC<HorizontalProductCardProps> = props => {
  return (
    <Wrapper className={clsx(styles.card, props.className)}>
      <img src={props.product.img} alt="product" className={styles.img} />
      <div className={styles.right_block}>
        <div className={styles.text}>
          <span className={clsx('text_bold', styles.title)}>
            {props.product.title}
          </span>
          <span className={'text'}>{props.product.description}</span>
        </div>
        <div className={styles.bottom_block}>
          <span className={styles.price}>{props.product.price}₽</span>
          {props.rightBottomBlock}
        </div>
      </div>
    </Wrapper>
  );
};
