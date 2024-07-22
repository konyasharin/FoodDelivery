import React from 'react';
import { IconProps } from '@/utils/IconProps.ts';
import { FILL, HEIGHT, WIDTH } from '@/shared/constants/iconBaseValues.ts';

export const CloseIcon: React.FC<IconProps> = ({
  fill = FILL,
  height = HEIGHT,
  width = WIDTH,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip23_268)">
        <path
          id="path"
          d="M8.33 8.33L41.66 41.66"
          stroke={fill}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="path"
          d="M8.33 41.66L41.66 8.33"
          stroke={fill}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
