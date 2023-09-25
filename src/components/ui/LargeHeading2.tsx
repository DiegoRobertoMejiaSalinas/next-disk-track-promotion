import { FC, HTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/cn";
import { Raleway } from "next/font/google";

const openSans = Raleway({ subsets: ["latin"] });

interface LargeHeading2Props
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const headingVariants = cva("max-w-prose font-medium mx-auto text-center", {
  variants: {
    size: {
      default: "text-4xl md:text-5xl lg:text-6xl",
      sm: "text-2xl md:text-3xl",
      lg: "text-4xl md:text-5xl lg:text-6xl",
      extraXl: "text-7xl md:text-8xl lg:text-9xl",
    },
    variant: {
      default: "text-slate-700 dark:text-slate-300",
      inverted: "text-slate-300 dark:text-slate-700",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

const LargeHeading2: FC<LargeHeading2Props> = forwardRef<
  HTMLHeadingElement,
  LargeHeading2Props
>(({ className, children, size, variant, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      {...props}
      className={cn(
        headingVariants({ size, variant, className }),
        openSans.className
      )}
    >
      <Balancer>{children}</Balancer>
    </h2>
  );
});

LargeHeading2.displayName = "LargeH2Heading";

export default LargeHeading2;
