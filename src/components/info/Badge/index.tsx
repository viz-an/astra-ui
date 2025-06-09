import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const badgeVariants = cva(
  "inline-flex items-center font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "border border-border bg-transparent",
        success:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
        warning:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
        danger: "bg-destructive text-destructive-foreground",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-2.5 py-0.5",
        lg: "text-base px-3 py-1",
      },
      rounded: {
        true: "rounded-full",
        false: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({
  children,
  className,
  variant,
  size,
  rounded,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(badgeVariants({ variant, size, rounded }), className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
