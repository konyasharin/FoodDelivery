import { FC } from 'react';
import { IconProps } from '@/components/icons/types/IconProps.ts';

export const CloseIcon: FC<IconProps> = ({ className, ...attributes }) => {
  return (
    <svg
      className={className}
      width="50.000000"
      height="50.000000"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g clipPath="url(#clip23_268)">
        <path
          id="path"
          d="M8.33 8.33L41.66 41.66"
          stroke={'currentColor'}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="path"
          d="M8.33 41.66L41.66 8.33"
          stroke={'currentColor'}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
