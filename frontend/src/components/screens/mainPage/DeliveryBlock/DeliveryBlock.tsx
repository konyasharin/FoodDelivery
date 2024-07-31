import { FC } from 'react';
import styles from './DeliveryBlock.module.css';
import clsx from 'clsx';

export type DeliveryBlockElementType = {
  title: string;
  description: string;
  icon: string;
};

type DeliveryBlockProps = {
  title: string;
  className?: string;
  elements: DeliveryBlockElementType[];
};

export const DeliveryBlock: FC<DeliveryBlockProps> = props => {
  return (
    <div className={clsx(styles.delivery_block, props.className)}>
      <h3>{props.title}</h3>
      {props.elements.map((element, i) => {
        return (
          <div className={styles.content_block} key={i}>
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
