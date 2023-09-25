import { cn } from "@/lib/cn";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import Button, { buttonVariants } from "@/ui/Button";
import ThemeToggle from "./ThemeToggle";
import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

const Navbar: FC<NavbarProps> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "fixed backdrop-filter backdrop-blur-lg bg-white/50 dark:bg-slate-900/50 z-50 top-0 left-0 right-0 h-20 shadow-sm flex items-center justify-between px-32",
        className
      )}
    >
      <Link href={"/"} className={buttonVariants({ variant: "link" })}>
        <p className="logo_title text-4xl flex items-center">
          JOJI{" "}
          <span className={cn(playfair_display.className, "text-sm ml-5")}>
            Unofficial Page
          </span>
        </p>
      </Link>

      <div className="md:hidden"></div>

      <div className="hidden md:flex gap-4">
        <ThemeToggle />
        <Button
          size={"default"}
          variant={"outline"}
          round={"non-rounded"}
          className="px-10 h-15 sator"
        >
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
