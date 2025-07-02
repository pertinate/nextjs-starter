import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/lib/utils';

const cardVariants = cva('rounded-lg bg-card text-card-foreground shadow-sm', {
    variants: {
        variant: {
            default: '',
        },
        size: {
            default: '',
        },
        border: {
            default: 'border',
            copper: 'border border-onyx-copper-20',
            gold: 'border border-onyx-gold-20',
            amber: 'border border-onyx-amber-20',
            teal: 'border border-onyx-teal-20',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
        border: 'default',
    },
});

export interface CardProps
    extends React.ButtonHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardVariants> {
    asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, size, border, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(cardVariants({ variant, size, border }), className)}
            {...props}
        />
    )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
    />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'text-2xl font-semibold leading-none tracking-tight',
            className
        )}
        {...props}
    />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex items-center p-6 pt-0', className)}
        {...props}
    />
));
CardFooter.displayName = 'CardFooter';

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
};
