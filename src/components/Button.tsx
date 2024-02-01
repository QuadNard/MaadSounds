import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-[#383732] text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-gray-800 text-white",
        link: "text-primary underline-offset-4 hover:underline text-blue-400",
        lavender:
          "focusable   py-2 px-2.5 font-medium  shadow-lg  transition   bg-lavender-400 text-zinc-900 shadow-lavender-400/10 selection:bg-metal-900/30 hover:bg-lavender-400/80 hover:shadow-lavender-400/5 focus:ring-lavender-400/4",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

/* 
focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-lavender-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-lavender-500/10 transition selection:bg-white/30 hover:bg-lavender-500/80 hover:shadow-lavender-500/5 focus:ring-lavender-500/40 dark:bg-lavender-400 dark:text-zinc-900 dark:shadow-lavender-400/10 dark:selection:bg-metal-900/30 dark:hover:bg-lavender-400/80 dark:hover:shadow-lavender-400/5 dark:focus:ring-lavender-400/40 md:w-auto md:px-3 md:pl-2.5


*/
