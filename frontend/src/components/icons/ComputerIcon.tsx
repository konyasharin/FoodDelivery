import { IconProps } from '@/components/icons/types/IconProps.ts';
import { FC } from 'react';
import styles from './Icon.module.css';
import clsx from 'clsx';

export const ComputerIcon: FC<IconProps> = ({ className, ...attributes }) => {
  return (
    <svg
      className={clsx(styles.icon, className)}
      width="76.000000"
      height="76.000000"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g clipPath="url(#clip20_112)">
        <rect
          id="rect"
          x="30.083313"
          y="50.666748"
          width="15.833334"
          height="14.250000"
          stroke={'currentColor'}
          strokeOpacity="1.000000"
          strokeWidth="3.000000"
          strokeLinejoin="round"
        />
        <rect
          id="rect"
          x="7.916687"
          y="12.666748"
          rx="2.000000"
          width="60.166668"
          height="38.000000"
          fill={'currentColor'}
          fillOpacity="1.000000"
        />
        <rect
          id="rect"
          x="7.916687"
          y="12.666748"
          rx="2.000000"
          width="60.166668"
          height="38.000000"
          stroke={'currentColor'}
          strokeOpacity="1.000000"
          strokeWidth="3.000000"
        />
        <path
          id="path"
          d="M34.83 42.75L41.16 42.75"
          stroke="#FFFFFF"
          strokeOpacity="1.000000"
          strokeWidth="3.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="path"
          d="M22.16 64.91L53.83 64.91"
          stroke={'currentColor'}
          strokeOpacity="1.000000"
          strokeWidth="3.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
