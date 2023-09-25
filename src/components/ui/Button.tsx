import { cn } from "@/lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, FC, forwardRef } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900",
  {
    variants: {
      round: {
        default: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        "non-rounded": "",
      },
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100",
        destructive: "text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "text-slate-900 hover:text-slate-300 dark:text-slate-300 dark:hover:text-slate-900 bg-transparent  hover:bg-slate-900 dark:hover:bg-slate-100 border border-slate-900 dark:border-slate-300",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 text-sm",
        lg: "h-12 px-12 text-md",
        xl: "h-12 px-12 text-lg",
      },
    },
    defaultVariants: {
      round: "default",
      size: "default",
      variant: "default",
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, isLoading, round, size, variant, ...props }, ref) => {
    return (
      <button
        {...props}
        disabled={isLoading}
        ref={ref}
        className={cn(buttonVariants({ className, round, size, variant }))}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
