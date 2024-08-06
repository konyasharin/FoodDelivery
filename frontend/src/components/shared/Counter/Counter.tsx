import React from 'react';
import styles from './Counter.module.css';
import clsx from 'clsx';
import { Counter as CounterType } from '@/shared/types/Counter.ts';

export const Counter: React.FC<CounterType> = props => {
  return (
    <div className={styles.counter}>
      <div className={styles.inner}>
        <span
          onClick={() => {
            props.onDecrement();
          }}
          className={clsx('text_bold', styles.changer)}
        >
          -
        </span>
        <span className={'button'}>{props.value}</span>
        <span
          onClick={() => {
            props.onIncrement();
          }}
          className={clsx('text_bold', styles.changer)}
        >
          +
        </span>
      </div>
    </div>
  );
};
