"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { FC, HTMLAttributes, useRef } from "react";
import Paragraph from "@/ui/Paragraph";
import { Variants, useInView, motion } from "framer-motion";

const imageVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
    filter: "blur(4px)",
  },
  visible: {
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
};

const textVariants: Variants = {
  hidden: {
    filter: "blur(4px)",
  },
  visible: {
    filter: "blur(0px)",
    transition: {
      duration: 1,
      delay: 0.5,
      type: "tween",
    },
  },
};

const MotionParagraph = motion(Paragraph);

interface MerchProps extends HTMLAttributes<HTMLDivElement> {}

const Merch: FC<MerchProps> = ({ className }) => {
  const cdRef = useRef(null);
  const hoodieRef = useRef(null);
  const vinylRef = useRef(null);

  const cdTextRef = useRef(null);
  const hoodieTextRef = useRef(null);
  const vinylTextRef = useRef(null);

  const isCdInView = useInView(cdRef);
  const isHoodieInView = useInView(hoodieRef);
  const isVinylInView = useInView(vinylRef);

  const isCdTextInView = useInView(cdTextRef);
  const isHoodieTextInView = useInView(hoodieTextRef);
  const isVinylTextInView = useInView(vinylTextRef);

  return (
    <div className={cn(className, "")}>
      <div className="w-full store_cd">
        <motion.div
          ref={cdRef}
          variants={imageVariants}
          animate={isCdInView ? "visible" : "hidden"}
          className="relative aspect-square"
        >
          <Image
            className="object-contain"
            alt="Diego Mejia BicoDev Joji"
            src={
              "https://res.cloudinary.com/purplesoda/image/upload/v1695590296/Test%20Projects/Joji%20Album%20Collection/SMITHEREENS_Standard_CD_58e3cf9b-3060-409c-87c7-4887794aea05_1_x5imcw.webp"
            }
            fill
          />
        </motion.div>
        <MotionParagraph
          ref={cdTextRef}
          variants={textVariants}
          animate={isCdTextInView ? "visible" : "hidden"}
          size={"xl"}
          className="text-dark-gold dark:text-light-gold font-regular mt-5 md:mt-0 sator"
        >
          SMITHEREENS CD
        </MotionParagraph>
      </div>
      <div className="w-full store_hoodie">
        <motion.div
          ref={hoodieRef}
          variants={imageVariants}
          animate={isHoodieInView ? "visible" : "hidden"}
          className="relative aspect-square"
        >
          <Image
            className="object-contain"
            alt="Diego Mejia BicoDev Joji"
            src={
              "https://res.cloudinary.com/purplesoda/image/upload/v1695590296/Test%20Projects/Joji%20Album%20Collection/JOJI-Sudadera-con-cuello-redondo-para-hombre-y-mujer-jersey-de-manga-larga-estilo-urbano-Invierno_1_tukcg9.webp"
            }
            fill
          />
        </motion.div>
        <MotionParagraph
          size={"xl"}
          ref={hoodieTextRef}
          variants={textVariants}
          animate={isHoodieTextInView ? "visible" : "hidden"}
          className="text-dark-gold dark:text-light-gold font-regular mt-5 md:mt-0 sator"
        >
          SMITHEREENS HOODIE
        </MotionParagraph>
      </div>
      <div className="w-full lg:w-1/2 store_vinyl">
        <motion.div
          ref={vinylRef}
          variants={imageVariants}
          animate={isVinylInView ? "visible" : "hidden"}
          className="relative aspect-square"
        >
          <Image
            className="object-contain"
            alt="Diego Mejia BicoDev Joji"
            src={
              "https://res.cloudinary.com/purplesoda/image/upload/v1695610072/Test%20Projects/Joji%20Album%20Collection/replicate-prediction-i5v3zxrb2fafnpyex3vq6db5r4_wsz5dn.webp"
            }
            fill
          />
        </motion.div>
        <MotionParagraph
          ref={vinylTextRef}
          variants={textVariants}
          animate={isVinylTextInView ? "visible" : "hidden"}
          size={"xl"}
          className={`text-dark-gold dark:text-light-gold font-regular mt-5 md:mt-0 sator`}
        >
          SMITHEREENS VINYL
        </MotionParagraph>
      </div>
    </div>
  );
};

export default Merch;
