import { FC } from 'react';
import { IconProps } from '@/components/icons/types/IconProps.ts';

export const BasketIcon: FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      viewBox="0 0 36 36"
      fillOpacity={'0'}
    >
      <g clipPath="url(#clip3_10)">
        <path
          id="path"
          d="M7.5 10.5L5.53 10.5C4.18 10.5 3.13 11.67 3.29 13.01L5.33 30.17C5.42 30.93 6.06 31.5 6.82 31.5L29.6 31.5C30.37 31.5 31.02 30.91 31.09 30.14L32.76 12.96C32.88 11.64 31.85 10.5 30.52 10.5L28.5 10.5"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="path"
          d="M3.75 16.5L32.25 16.5"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="path"
          d="M11.25 21.75L24.75 21.75"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="path"
          d="M12.75 27L23.25 27"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="path"
          d="M12 16.1C12 16.23 12 16.36 12 16.5L23.99 16.5C23.99 16.36 24 16.23 24 16.1C24 9.69 21.31 4.5 18 4.5C14.68 4.5 12 9.69 12 16.1Z"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
