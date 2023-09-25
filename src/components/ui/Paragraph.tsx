import { cn } from "@/lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import { Raleway } from "next/font/google";
import { FC, HTMLAttributes, forwardRef } from "react";
import { Balancer } from "react-wrap-balancer";

const raleway = Raleway({ subsets: ["latin"] });

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const paragraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
        lg: "text-lg md:text-xl",
        xl: "text-xl md:text-2xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, size, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(
          paragraphVariants({ size, className }),
          raleway.className
        )}
      >
        <Balancer>{children}</Balancer>
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
