"use client";

import { ButtonHTMLAttributes, FC } from "react";
import Button from "@/ui/Button";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/cn";

interface BuyDiscButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const BuyDiscButton: FC<BuyDiscButtonProps> = ({ className }) => {
  const openInfoToast = () => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-lg w-full bg-white dark:bg-slate-950 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5"></div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  This isn&apos;t an official website
                </p>
                <p className="mt-1 text-sm text-gray-800 dark:text-gray-300">
                  This is a personal project created by Diego Mejia.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <a
              href="https://www.linkedin.com/in/diego-roberto-mejia-salinas-73a931198/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-700 dark:text-indigo-400 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Go to LinkedIn
            </a>
          </div>
        </div>
      ),
      {
        duration: 5000,
      }
    );

    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-lg w-full bg-white dark:bg-slate-950 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5"></div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Joji Store
                </p>
                <p className="mt-1 text-sm text-gray-800 dark:text-gray-300">
                  If you want to watch all Joji merchandise
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <a
              href="https://shop.jojimusic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-700 dark:text-indigo-400 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Go to Joji Store
            </a>
          </div>
        </div>
      ),
      {
        duration: 5000,
      }
    );
  };

  return (
    <Button
      onClick={openInfoToast}
      size={"default"}
      variant={"outline"}
      round={"non-rounded"}
      className={cn(className)}
    >
      Buy disc
    </Button>
  );
};

export default BuyDiscButton;
