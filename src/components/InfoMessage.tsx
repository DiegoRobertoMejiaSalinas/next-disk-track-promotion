"use client";

import { cn } from "@/lib/cn";
import { HelpCircle, Info, Menu, X } from "lucide-react";
import { FC, HTMLAttributes, useState } from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

interface InfoMessageProps extends HTMLAttributes<HTMLDivElement> {}

const InfoMessage: FC<InfoMessageProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className={cn(className, "")}>
      <div className="flex flex-col gap-5 lg:hidden">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={isModalOpen ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.75,
                type: "tween",
              },
            },
            hidden: {
              opacity: 0,
              y: 20,
              transition: {
                duration: 0.75,
                type: "tween",
              },
            },
          }}
          className="flex backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white/50 dark:bg-slate-900/50 border-1 border-gray-200 rounded-lg p-5 gap-5 items-center"
        >
          <p>
            This isn&apos;t an official Joji <br /> website,this is a personal{" "}
            <br />
            project made by Diego <br /> Mejia, a big Joji fan.
          </p>
          <Button
            className="self-start"
            variant={"clear"}
            onClick={() => setIsModalOpen(false)}
          >
            <X className="w-5 h-5 cursor-pointer" />
          </Button>
        </motion.div>
        <Button
          round={"full"}
          variant={"outline"}
          className="w-12 h-12 flex justify-center items-center rounded-full"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <HelpCircle className="w-full h-full" />
        </Button>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={isModalOpen ? "visible" : "hidden"}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.75,
              type: "tween",
            },
          },
          hidden: {
            opacity: 0,
            y: 20,
            transition: {
              duration: 0.75,
              type: "tween",
            },
          },
        }}
        className="hidden lg:flex backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white/50 dark:bg-slate-900/50 border-1 border-gray-200 rounded-lg p-5 gap-5 items-center"
      >
        <Info className="w-5 h-5" />
        <p>
          This isn&apos;t an official Joji website, <br /> this is a personal
          project made by <br /> Diego Mejia, a big Joji fan.
        </p>
        <Button
          className="self-start"
          variant={"clear"}
          onClick={() => setIsModalOpen(false)}
        >
          <X className="w-5 h-5 cursor-pointer" />
        </Button>
      </motion.div>
    </div>
  );
};

export default InfoMessage;
