import {FC, ReactNode} from 'react';
import styles from './DeliveryBlock.module.css';
import clsx from 'clsx';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

export type DeliveryBlockElementType = {
  title: string;
  description: string;
  icon: ReactNode;
};

type DeliveryBlockProps = {
  title: string;
  className?: string;
  elements: DeliveryBlockElementType[];
};

export const DeliveryBlock: FC<DeliveryBlockProps> = props => {
  return (
    <div className={clsx(styles.delivery_block, props.className)}>
      <Typography variant={'h3'} className={styles.title}>
        {props.title}
      </Typography>
      {props.elements.map((element, i) => {
        return (
          <div className={styles.content_block} key={i}>
            <div>{element.icon}</div>
            <div className={styles.description}>
              <Typography variant={'h4'}>{element.title}</Typography>
              <Typography>{element.description}</Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};
