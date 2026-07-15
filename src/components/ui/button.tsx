import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-11 px-5",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--eo-gold)] text-[var(--eo-navy)] hover:bg-[#e8ad12] focus-visible:ring-[var(--eo-gold)] shadow-[6px_6px_18px_rgba(164,123,0,0.28),-2px_-2px_10px_rgba(255,255,255,0.25)]",
        secondary:
          "bg-white/12 text-white border border-white/25 hover:bg-white/20 focus-visible:ring-white/60 backdrop-blur-md",
        outline:
          "bg-white/50 text-[var(--eo-navy)] border border-white/80 hover:bg-white/80 focus-visible:ring-[var(--eo-navy)] backdrop-blur-md shadow-[4px_4px_12px_rgba(155,172,196,0.25)]",
        ghost:
          "bg-transparent text-[var(--eo-navy)] hover:bg-white/45 focus-visible:ring-[var(--eo-navy)]",
        navy: "bg-[var(--eo-navy)] text-white hover:bg-[var(--eo-dark-blue)] focus-visible:ring-[var(--eo-navy)] shadow-[6px_6px_16px_rgba(7,31,70,0.25)]",
      },
      size: {
        default: "min-h-11 px-5 py-2.5",
        sm: "min-h-10 px-4 text-sm",
        lg: "min-h-12 px-7 text-[15px]",
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
