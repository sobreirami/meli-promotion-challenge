import { InputHTMLAttributes, forwardRef } from 'react';
import classNameMerge from '@/utils/classNameMerge';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={classNameMerge(
          'w-full appearance-none rounded border border-border bg-white px-4 py-3 leading-tight text-primary focus:outline-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
