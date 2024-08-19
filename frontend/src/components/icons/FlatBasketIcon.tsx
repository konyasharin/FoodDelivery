import { IconProps } from '@/components/icons/types/IconProps.ts';
import { FC } from 'react';
import clsx from 'clsx';
import styles from './Icon.module.css';

export const FlatBasketIcon: FC<IconProps> = ({ className, ...attributes }) => {
  return (
    <svg
      className={clsx(className, clsx(styles.icon))}
      width="40.000000"
      height="40.000000"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g clipPath="url(#clip26_252)">
        <path
          id="path"
          d="M32.5 26.66L10.83 26.66L6.66 10L36.66 10L32.5 26.66Z"
          fill={'currentColor'}
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="path"
          d="M2.5 5L5.41 5L6.66 10L10.83 26.66L32.5 26.66L36.66 10L6.66 10"
          stroke={'currentColor'}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle
          id="circle"
          cx="10.833496"
          cy="32.500000"
          r="2.500000"
          stroke={'currentColor'}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
        <circle
          id="circle"
          cx="32.500000"
          cy="32.500000"
          r="2.500000"
          stroke={'currentColor'}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
