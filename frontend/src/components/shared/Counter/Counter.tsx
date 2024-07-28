import { useCount } from '@/hooks/useCount.ts';
import React from 'react';
import styles from './Counter.module.css';
import clsx from 'clsx';

type CounterProps = {
  onIncrement?: () => void;
  onDecrement?: () => void;
};

export const Counter: React.FC<CounterProps> = props => {
  const { value, increment, decrement } = useCount({ min: 0, max: 99 });
  return (
    <div className={styles.counter}>
      <div className={styles.inner}>
        <span
          onClick={() => {
            decrement();
            props.onDecrement?.();
          }}
          className={clsx('text_bold', styles.changer)}
        >
          -
        </span>
        <span className={'button'}>{value}</span>
        <span
          onClick={() => {
            increment();
            props.onIncrement?.();
          }}
          className={clsx('text_bold', styles.changer)}
        >
          +
        </span>
      </div>
    </div>
  );
};
