import { cn } from "@/lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

interface ParallaxTextProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof parallaxTextVariants> {}

const parallaxTextVariants = cva(
  "max-w-prose text-slate-600 dark:text-slate-300 font-medium mr-5 ",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl lg:leading-[.75]",
        sm: "text-2xl md:text-3xl lg:text-4xl lg:leading-[.75]",
        lg: "text-7xl md:text-8xl lg:text-9xl lg:leading-[.70]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const ParallaxText = forwardRef<HTMLHeadingElement, ParallaxTextProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(parallaxTextVariants({ className, size }))}
        {...props}
      >
        {children}
      </h2>
    );
  }
);

ParallaxText.displayName = "ParallaxText";

export default ParallaxText;
