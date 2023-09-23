import { FC, HTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/cn";
import { Raleway } from "next/font/google";

const openSans = Raleway({ subsets: ["latin"] });

interface LargeHeading2Props
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const headingVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 font-medium mx-auto",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        sm: "text-2xl md:text-3xl",
        lg: "text-5xl md:text-6x lg:text-8xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const LargeHeading2: FC<LargeHeading2Props> = forwardRef<
  HTMLHeadingElement,
  LargeHeading2Props
>(({ className, children, size, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      {...props}
      className={cn(headingVariants({ size, className }), openSans.className)}
    >
      <Balancer>{children}</Balancer>
    </h2>
  );
});

LargeHeading2.displayName = "LargeH2Heading";

export default LargeHeading2;
