import { cn } from "@/lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes, forwardRef } from "react";
import Balancer from "react-wrap-balancer";

interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof largeHeadingVariants> {}

const largeHeadingVariants = cva(
  "text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        sm: "text-2xl md:text-3xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
      },
      variant: {
        default: "text-black dark:text-white",
        inverted: "text-white dark:text-black",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(largeHeadingVariants({ className, variant, size }))}
      >
        <Balancer>{children}</Balancer>
      </h1>
    );
  }
);

LargeHeading.displayName = "LargeHeading";

export default LargeHeading;
