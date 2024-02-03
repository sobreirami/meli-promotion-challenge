import * as React from 'react';
import { VariantProps, tv } from 'tailwind-variants';
import classNameMerge from '@/utils/classNameMerge';

const buttonVariant = tv({
  base: 'flex items-center justify-center rounded-md gap-2 disabled:opacity-60 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary:
        'data-[variant=primary]:bg-primary text-white shadow data-[variant=primary]:hover:bg-dark',
      secondary:
        'data-[variant=secondary]:bg-secondary text-white shadow data-[variant=secondary]:hover:bg-dark',
      tertiary:
        'data-[variant=tertiary]:bg-tertiary text-white shadow data-[variant=tertiary]:hover:bg-dark',
      outline:
        'border border-input data-[variant=outline]:bg-background shadow-sm data-[variant=outline]:hover:bg-accent data-[variant=outline]:hover:text-white',
    },
    size: {
      md: 'h-9 px-4 py-2',
      lg: 'h-10 px-6 py-2',
      icon: 'h-9 w-9',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        data-variant={variant}
        className={classNameMerge(buttonVariant({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
