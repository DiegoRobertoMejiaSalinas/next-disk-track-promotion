import { cn } from "@/lib/cn";
import { FC, HTMLAttributes, forwardRef } from "react";

interface ParallaxWrapperProps extends HTMLAttributes<HTMLDivElement> {}

const ParallaxWrapper = forwardRef<HTMLDivElement, ParallaxWrapperProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "parallax overflow-hidden -tracking-tight leading-3 whitespace-nowrap flex flex-nowrap",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ParallaxWrapper.displayName = "ParallaxWrapper";

export default ParallaxWrapper;
