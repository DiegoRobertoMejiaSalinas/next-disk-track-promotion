"use client";

import { cn } from "@/lib/cn";
import { Variants, useInView, motion } from "framer-motion";
import Image from "next/image";
import { FC, HTMLAttributes, useRef } from "react";

const variant: Variants = {
  visible: {
    filter: "blur(0px)",
    transition: {
      duration: 1,
      type: "linear",
      delay: 0.6,
    },
  },
  hidden: {
    filter: "blur(8px)",
    transition: {
      duration: 2,
      type: "linear",
      //   delay: 1.5,
    },
  },
};

const MotionImage = motion(Image);

interface JojiPersonProps extends HTMLAttributes<HTMLDivElement> {}

const JojiPerson: FC<JojiPersonProps> = ({ className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px -100px -200px 0px" });

  return (
    <div
      className={cn(
        "aspect-square w-full md:w-4/5 md:mx-auto lg:w-2/5 dark:opacity-50",
        className
      )}
    >
      <MotionImage
        ref={ref}
        variants={variant}
        animate={isInView ? "visible" : "hidden"}
        className="object-contain"
        src={
          "https://res.cloudinary.com/purplesoda/image/upload/v1695680332/Test%20Projects/Joji%20Album%20Collection/GettyImages-1178153807_1_1_camu83.webp"
        }
        alt="Diego Mejia Joji"
        fill
      />
    </div>
  );
};

export default JojiPerson;
