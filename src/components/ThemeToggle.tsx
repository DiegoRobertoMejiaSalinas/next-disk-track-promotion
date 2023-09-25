"use client";

import { FC } from "react";
import Button from "./ui/Button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { setTheme, systemTheme } = useTheme();

  return (
    <Button variant="ghost" size="default">
      <Sun
        className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100"
        onClick={() => {
          setTheme("dark");
        }}
      />
      <Moon
        className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100"
        onClick={() => {
          setTheme("light");
        }}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
