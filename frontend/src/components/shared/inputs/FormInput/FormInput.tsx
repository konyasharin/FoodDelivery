import { Input } from '@/components/ui/Input/Input.tsx';
import { ErrorBlock } from '@/components/shared/errors/ErrorBlock/ErrorBlock.tsx';
import { forwardRef, InputHTMLAttributes } from 'react';

export type FormInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  error?: string;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ placeholder, error, value, className, ...attributes }, ref) => {
    return (
      <ErrorBlock className={className} error={error}>
        <Input
          variant={'underlined'}
          size={'small'}
          placeholder={placeholder}
          value={value}
          isError={!!error}
          ref={ref}
          {...attributes}
        />
      </ErrorBlock>
    );
  },
);
