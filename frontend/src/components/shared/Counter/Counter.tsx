import React from 'react';
import styles from './Counter.module.css';
import { Counter as CounterType } from '@/shared/types/Counter.ts';
import { Typography } from '@/components/ui/Typography/Typography.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';

export const Counter: React.FC<CounterType> = props => {
  return (
    <div className={styles.counter}>
      <div className={styles.inner}>
        <Typography
          onClick={props.onDecrement}
          variant={'text_bold'}
          className={styles.changer}
        >
          -
        </Typography>
        <Button>{props.value}</Button>
        <Typography
          onClick={props.onIncrement}
          variant={'text_bold'}
          className={styles.changer}
        >
          +
        </Typography>
      </div>
    </div>
  );
};
