import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import styles from './Slider.module.css';
import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type SliderProps = {
  children: ReactNode;
  className?: string;
  activeElemIndex: number;
  countElements: number;
  setActiveElemIndex: (index: number) => void;
};

export const Slider: FC<SliderProps> = props => {
  const paginationElements: ReactNode[] = [];
  for (let i = 0; i < props.countElements; i++) {
    paginationElements.push(
      <div
        className={clsx(
          styles.pagination_elem,
          i === props.activeElemIndex ? styles.pagination_elem_active : null,
        )}
        onClick={() => props.setActiveElemIndex(i)}
      ></div>,
    );
  }

  return (
    <div className={props.className}>
      <Wrapper className={styles.wrapper}>{props.children}</Wrapper>
      <div className={styles.pagination}>{...paginationElements}</div>
    </div>
  );
};
