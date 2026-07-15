import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-11 px-5",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--eo-gold)] text-[var(--eo-navy)] hover:bg-[#e5aa10] focus-visible:ring-[var(--eo-gold)] shadow-sm",
        secondary:
          "bg-white/10 text-white border border-white/25 hover:bg-white/15 focus-visible:ring-white/60 backdrop-blur-sm",
        outline:
          "bg-transparent text-[var(--eo-navy)] border border-[var(--eo-border)] hover:border-[var(--eo-slate)] hover:bg-[var(--eo-surface)] focus-visible:ring-[var(--eo-navy)]",
        ghost:
          "bg-transparent text-[var(--eo-navy)] hover:bg-[var(--eo-surface)] focus-visible:ring-[var(--eo-navy)]",
        navy: "bg-[var(--eo-navy)] text-white hover:bg-[var(--eo-dark-blue)] focus-visible:ring-[var(--eo-navy)] shadow-sm",
      },
      size: {
        default: "min-h-11 px-5 py-2.5",
        sm: "min-h-10 px-4 text-sm",
        lg: "min-h-12 px-7 text-base",
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
