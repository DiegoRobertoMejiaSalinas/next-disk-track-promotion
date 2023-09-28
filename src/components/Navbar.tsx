"use client";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import { buttonVariants } from "@/ui/Button";
import ThemeToggle from "./ThemeToggle";
import { Playfair_Display } from "next/font/google";
import BuyDiscButton from "@/components/BuyDiscButton";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

const Navbar: FC<NavbarProps> = ({ className, ...props }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: {
          y: 0,
        },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      // {...props}
      className={cn(
        "sticky backdrop-filter backdrop-blur-lg bg-white/50 dark:bg-slate-900/50 z-[100] top-0 left-0 right-0 h-20 shadow-sm flex items-center justify-between px-5 md:px-32 lg:px-16",
        className
      )}
    >
      <Link href={"/"} className={buttonVariants({ variant: "link" })}>
        <p className="logo_title text-4xl flex items-center">
          JOJI{" "}
          <span
            className={cn(playfair_display.className, "text-sm ml-3 md:ml-5")}
          >
            Unofficial Page
          </span>
        </p>
      </Link>

      <div className="md:hidden">
        <ThemeToggle />
      </div>

      <div className="hidden md:flex gap-4">
        <ThemeToggle />
        <BuyDiscButton className="px-10 h-15 sator" />
      </div>
    </motion.div>
  );
};

export default Navbar;
