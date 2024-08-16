import { ProductCardProps } from '@/components/shared/productCards/types/ProductCardProps.ts';
import { FC, ReactNode } from 'react';
import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import styles from './HorizontalProductCard.module.css';
import clsx from 'clsx';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

type HorizontalProductCardProps = ProductCardProps & {
  rightBottomBlock?: ReactNode;
};

export const HorizontalProductCard: FC<HorizontalProductCardProps> = props => {
  return (
    <Wrapper className={clsx(styles.card, props.className)}>
      <img src={props.product.img} alt="product" className={styles.img} />
      <div className={styles.right_block}>
        <div className={styles.text}>
          <Typography variant={'text_bold'} className={styles.title}>
            {props.product.title}
          </Typography>
          <Typography>{props.product.description}</Typography>
        </div>
        <div className={styles.bottom_block}>
          <Typography variant={'h3'}>{props.product.price}₽</Typography>
          {props.rightBottomBlock}
        </div>
      </div>
    </Wrapper>
  );
};
