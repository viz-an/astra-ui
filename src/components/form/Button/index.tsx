import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { ComponentProps, forwardRef } from "react";

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const buttonVariants = cva(
  `inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 ease-in-out transform-gpu focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98]`,
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:brightness-110 focus:ring-primary/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary/50",
        ghost: "bg-transparent hover:bg-secondary focus:ring-secondary/50",
        outline:
          "bg-transparent border border-input hover:bg-secondary focus:ring-secondary/50",
        destructive:
          "bg-destructive text-destructive-foreground hover:brightness-110 focus:ring-destructive/50",
      },
      size: {
        sm: "text-xs px-3 py-1.5 gap-1.5",
        md: "text-sm px-4 py-2 gap-2",
        lg: "text-base px-5 py-2.5 gap-2.5",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      fullWidth: false,
      size: "md",
    },
  }
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      fullWidth,
      icon,
      iconPosition = "left",
      isLoading = false,
      disabled,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const iconOnly =
      !children && icon
        ? size === "sm"
          ? "p-1.5"
          : size === "md"
          ? "p-2"
          : "p-2.5"
        : "";

    const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          iconOnly,
          (disabled || isLoading) && disabledStyles,
          className
        )}
        ref={ref}
      >
        {/* {isLoading && <Spinner />} USE SPINNER COMPONENT HERE*/}
        {!isLoading && icon && iconPosition === "left" && (
          <span className="inline-flex">{icon}</span>
        )}
        {children && <span>{children}</span>}
        {!isLoading && icon && iconPosition === "right" && (
          <span className="inline-flex">{icon}</span>
        )}
      </button>
    );
  }
);
