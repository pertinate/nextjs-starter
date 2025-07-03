import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xs text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-sm px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
            border: {
                default: '',
                copper: 'border border-onyx-copper-20 hover:bg-onyx-copper hover:text-white',
                gold: 'border border-onyx-gold-20 hover:bg-onyx-gold hover:text-white',
                amber: 'border border-onyx-amber-20 hover:bg-onyx-amber hover:text-white',
                teal: 'border border-onyx-teal-20 hover:bg-onyx-teal hover:text-white',
            },
            rounded: {
                default: 'rounded-lg',
                sm: 'rounded-sm',
                md: 'rounded-md',
                lg: 'rounded-lg',
                full: 'rounded-full',
                none: 'rounded-none',
                xs: 'rounded-xs',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            border: 'default',
            rounded: 'xs',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            border,
            rounded,
            asChild = false,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(
                    buttonVariants({
                        variant,
                        size,
                        className,
                        border,
                        rounded,
                    })
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
