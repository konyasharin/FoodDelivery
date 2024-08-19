import { IconProps } from '@/components/icons/types/IconProps.ts';
import { FC } from 'react';
import clsx from 'clsx';
import styles from './Icon.module.css';

export const AddIcon: FC<IconProps> = ({ className, ...attributes }) => {
  return (
    <svg
      className={clsx(className, styles.icon)}
      width="40.000000"
      height="40.000000"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g clipPath="url(#clip27_216)">
        <rect
          id="rect"
          x="5.000000"
          y="5.000000"
          rx="3.000000"
          width="30.000000"
          height="30.000000"
          fill={'currentColor'}
          fillOpacity="1.000000"
        />
        <rect
          id="rect"
          x="5.000000"
          y="5.000000"
          rx="3.000000"
          width="30.000000"
          height="30.000000"
          stroke={'currentColor'}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
        <path
          id="path"
          d="M20 13.33L20 26.66"
          stroke="#FFFFFF"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="path"
          d="M13.33 20L26.66 20"
          stroke="#FFFFFF"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
