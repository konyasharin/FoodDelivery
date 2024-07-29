import { FC } from 'react';
import styles from './DeliveryBlock.module.css';
import { DeliveryBlockElement } from '@/shared/types/DeliveryBlockElement.ts';
import clsx from 'clsx';

type DeliveryBlockProps = {
  title: string;
  className?: string;
  elements: DeliveryBlockElement[];
};

export const DeliveryBlock: FC<DeliveryBlockProps> = props => {
  return (
    <div className={clsx(styles.delivery_block, props.className)}>
      <h3>{props.title}</h3>
      {props.elements.map(element => {
        return (
          <div className={styles.content_block}>
            <img src={element.icon} alt="element" />
            <div>
              <h4>{element.title}</h4>
              <span>{element.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
