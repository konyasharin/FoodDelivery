import { IconProps } from '@/components/icons/types/IconProps.ts';
import { FC } from 'react';

export const FlatBasketIcon: FC<IconProps> = props => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip26_252)">
        <path
          id="path"
          d="M32.5 26.66L10.83 26.66L6.66 10L36.66 10L32.5 26.66Z"
          fill="current"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="path"
          d="M6.66 10L10.83 26.66L32.5 26.66L36.66 10L6.66 10ZM2.52 5.73L2.5 5.75C2.08 5.75 1.75 5.42 1.75 5C1.75 4.58 2.08 4.25 2.5 4.25L2.52 4.27L2.52 5.73Z"
          fill="current"
          fillOpacity="0"
          fillRule="nonzero"
        />
        <path
          id="path"
          d="M2.5 5L5.41 5L6.66 10L10.83 26.66L32.5 26.66L36.66 10L6.66 10"
          stroke="current"
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
          fill="current"
          fillOpacity="0"
        />
        <circle
          id="circle"
          cx="10.833496"
          cy="32.500000"
          r="2.500000"
          stroke="current"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
        <circle
          id="circle"
          cx="32.500000"
          cy="32.500000"
          r="2.500000"
          fill="current"
          fillOpacity="0"
        />
        <circle
          id="circle"
          cx="32.500000"
          cy="32.500000"
          r="2.500000"
          stroke="current"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
