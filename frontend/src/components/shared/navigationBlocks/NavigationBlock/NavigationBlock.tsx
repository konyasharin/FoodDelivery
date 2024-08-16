import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import { FC, ReactNode } from 'react';
import styles from './NavigationBlock.module.css';

type NavigationBlockProps = {
  children?: ReactNode;
};

export const NavigationBlock: FC<NavigationBlockProps> = props => {
  return <Wrapper className={styles.block}>{props.children}</Wrapper>;
};
