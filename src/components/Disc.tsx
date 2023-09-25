"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { FC, HTMLAttributes, useRef } from "react";
import { Variants, motion, useInView } from "framer-motion";

interface DiscProps extends HTMLAttributes<HTMLDivElement> {}

const MotionImage = motion(Image);

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
      delay: 0.5,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      type: "tween",
    },
  },
};

const Disc: FC<DiscProps> = ({ className, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px -100px -300px 0px" });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={cn("", className)}
    >
      {/* VINYL COVER */}
      <motion.div variants={imageVariants} className="relative aspect-square ">
        <MotionImage
          alt="Joji Smithereens"
          src={
            "https://res.cloudinary.com/purplesoda/image/upload/v1695566498/Test%20Projects/Joji%20Album%20Collection/replicate-prediction-wedthezb4u6p422hlehcgeibuq_s85pwv.webp"
          }
          quality={100}
          className="object-contain"
          fill
        />
      </motion.div>

      {/* DISC */}
      <motion.div
        variants={imageVariants}
        className="relative pt-5 lg:pt-0 w-full max-w-lg lg:max-w-md lg:-right-[15rem] aspect-square lg:absolute lg:top-1/2 -translate-y-1/2"
      >
        <MotionImage
          alt="Joji Smithereens"
          src={
            "https://res.cloudinary.com/purplesoda/image/upload/v1695566500/Test%20Projects/Joji%20Album%20Collection/SMITHEREENS_D2C_Exclusive_Vinyl_A_1_nc950f.webp"
          }
          quality={100}
          className="object-contain"
          fill
        />
      </motion.div>

      {/* PROFILE PIC JOJI */}
      <motion.div
        variants={imageVariants}
        className="relative pt-5 lg:pt-0 w-full max-w-lg lg:max-w-[13rem] shadow-2xl lg:-left-20 aspect-square lg:absolute lg:-bottom-10"
      >
        <MotionImage
          alt="Joji Smithereens"
          src={
            "https://res.cloudinary.com/purplesoda/image/upload/v1695566566/Test%20Projects/Joji%20Album%20Collection/e516ef8c0d6d-joji_xmuveb.webp"
          }
          quality={100}
          className="object-contain"
          fill
        />
      </motion.div>
    </motion.div>
  );
};

export default Disc;
