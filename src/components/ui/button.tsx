import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold tracking-wide transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-11 px-5",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--md-primary)] text-[var(--md-on-primary)] hover:brightness-110 focus-visible:ring-[var(--eo-navy)] shadow-[var(--md-elev-1)]",
        secondary:
          "bg-[var(--md-secondary)] text-[var(--md-on-secondary)] hover:brightness-105 focus-visible:ring-[var(--eo-gold)] shadow-[var(--md-elev-1)]",
        tonal:
          "bg-[color-mix(in_srgb,var(--eo-navy)_10%,white)] text-[var(--eo-navy)] hover:bg-[color-mix(in_srgb,var(--eo-navy)_16%,white)] focus-visible:ring-[var(--eo-navy)]",
        outline:
          "bg-transparent text-[var(--eo-navy)] border border-[var(--md-outline)] hover:bg-[var(--md-surface-container-high)] focus-visible:ring-[var(--eo-navy)]",
        ghost:
          "bg-transparent text-[var(--eo-navy)] hover:bg-[color-mix(in_srgb,var(--eo-navy)_8%,white)] focus-visible:ring-[var(--eo-navy)]",
        navy: "bg-[var(--eo-navy)] text-white hover:bg-[var(--eo-dark-blue)] focus-visible:ring-[var(--eo-navy)] shadow-[var(--md-elev-1)]",
      },
      size: {
        default: "min-h-11 px-5 py-2.5",
        sm: "min-h-10 px-4 text-sm rounded-lg",
        lg: "min-h-12 px-7 text-[15px] rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
