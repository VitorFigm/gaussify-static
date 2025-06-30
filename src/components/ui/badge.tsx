import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "",
      },
      format: {
        circle: "text-lg rounded-full aspect-square",
      },
      color: {
        purple: "bg-purple",
        teal: "bg-teal",
        orange: "bg-orange",
        green: "bg-green",
        pink: "bg-pink",
        turquoise: "bg-turquoise",
        brown: "bg-brown",
        gray: "bg-gray",
        primary: "",
        secondary: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        color: "secondary",
        className:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      {
        variant: "outline",
        color: ["purple", "teal", "orange", "green", "pink", "turquoise", "brown", "gray"],
        className: "border-[currentcolor]",
      }
    ],
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, format, color, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, format, color }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
