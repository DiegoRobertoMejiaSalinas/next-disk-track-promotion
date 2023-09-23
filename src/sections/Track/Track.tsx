"use client";

import Image from "next/image";
import { FC, useState } from "react";
import LargeHeading2 from "@/ui/LargeHeading2";
import styles from "./Track.module.css";
import { cn } from "@/lib/cn";
import { useCycle, motion, useAnimate, useAnimation } from "framer-motion";
import React from "react";
import Link from "next/link";

interface TrackProps {}

const FULL_ROTATE_DEGREE = 360;

const MotionImage = motion(Image);

const imageVariants = {
  visible: ({ delayLevel = 0 }: { delayLevel: number }) => ({
    opacity: 1,
    transition: {
      delay: 0.15 * (delayLevel + 1),
    },
  }),
  hidden: ({ delayLevel = 0 }: { delayLevel: number }) => ({
    opacity: 0,
    transition: {
      delay: 0.15 * (delayLevel + 1),
    },
  }),
};

const variantsRotate = {
  rotate: ({
    spinNumber,
    delayLevel = 0,
  }: {
    spinNumber: number;
    delayLevel?: number;
  }) => ({
    rotate: FULL_ROTATE_DEGREE * (spinNumber + 1),
    transition: {
      duration: 1.5,
      type: "tween",
      delay: 0.15 * delayLevel,
    },
  }),
};

const Track: FC<TrackProps> = ({}) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [scope, animate] = useAnimate();
  const controls = useAnimation();
  const [rotateValue, cycleRotateValue] = useCycle(0, 360);

  const onHandleChangeTrack = () => {
    controls.start("rotate");
    setIsRotating(true);
    setRotate(rotate + 1);
    if (currentTrack == 2) {
      setCurrentTrack(0);
    } else {
      setCurrentTrack(currentTrack + 1);
    }
    setTimeout(() => {
      setIsRotating(false);
    }, 1800);
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden ">
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-1 bg-slate-100 dark:bg-slate-900"
        style={{ overflow: "hidden" }}
        ref={scope}
      >
        <motion.div
          custom={{ spinNumber: rotate }}
          animate={controls}
          variants={variantsRotate}
          className={cn(
            "absolute w-full h-full z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            styles.first_circle
          )}
          style={{
            translate: "-50% -50%",
          }}
        >
          <MotionImage
            alt="Slow dancing in the dark"
            src={
              "https://res.cloudinary.com/purplesoda/image/upload/v1695479593/Test%20Projects/Joji%20Album%20Collection/pexels-isaac-weatherly-2131647_fgj8gs.webp"
            }
            animate={currentTrack == 0 ? "visible" : "hidden"}
            custom={{ delayLevel: 0 }}
            variants={imageVariants}
            className={cn("object-cover", styles.image_track)}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
          />
          <MotionImage
            alt="Slow dancing in the dark"
            src={
              "https://res.cloudinary.com/purplesoda/image/upload/v1695479594/Test%20Projects/Joji%20Album%20Collection/ilona-bellotto-rbPplWrpgcU-unsplash_djyw93.webp"
            }
            animate={currentTrack == 1 ? "visible" : "hidden"}
            custom={{ delayLevel: 0 }}
            variants={imageVariants}
            className={cn("object-cover", styles.image_track)}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
          />
          <MotionImage
            alt="Slow dancing in the dark"
            src={
              "https://res.cloudinary.com/purplesoda/image/upload/v1695479594/Test%20Projects/Joji%20Album%20Collection/pexels-alex-umbelino-18280489_f5kdqu.webp"
            }
            animate={currentTrack == 2 ? "visible" : "hidden"}
            custom={{ delayLevel: 0 }}
            variants={imageVariants}
            className={cn("object-cover", styles.image_track)}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
          />
        </motion.div>
        <motion.div
          custom={{ spinNumber: rotate, delayLevel: 1 }}
          animate={controls}
          variants={variantsRotate}
          className={cn(
            "absolute w-full h-full z-10 left-1/2 top-1/2",
            styles.second_circle
          )}
          style={{
            translate: "-50% -50%",
          }}
        >
          <MotionImage
            alt="Slow dancing in the dark"
            src={
              "https://res.cloudinary.com/purplesoda/image/upload/v1695479593/Test%20Projects/Joji%20Album%20Collection/pexels-isaac-weatherly-2131647_fgj8gs.webp"
            }
            animate={currentTrack == 0 ? "visible" : "hidden"}
            custom={{ delayLevel: 1 }}
            variants={imageVariants}
            className={cn("object-cover", styles.image_track)}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
          />
          <MotionImage
            alt="Slow dancing in the dark"
            src={
              "https://res.cloudinary.com/purplesoda/image/upload/v1695479594/Test%20Projects/Joji%20Album%20Collection/ilona-bellotto-rbPplWrpgcU-unsplash_djyw93.webp"
            }
            animate={currentTrack == 1 ? "visible" : "hidden"}
            custom={{ delayLevel: 1 }}
            variants={imageVariants}
            className={cn("object-cover", styles.image_track)}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
          />
          <MotionImage
            alt="Slow dancing in the dark"
            src={
              "https://res.cloudinary.com/purplesoda/image/upload/v1695479594/Test%20Projects/Joji%20Album%20Collection/pexels-alex-umbelino-18280489_f5kdqu.webp"
            }
            animate={currentTrack == 2 ? "visible" : "hidden"}
            custom={{ delayLevel: 1 }}
            variants={imageVariants}
            className={cn("object-cover", styles.image_track)}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
          />
        </motion.div>
        <motion.div
          custom={{ spinNumber: rotate, delayLevel: 2 }}
          animate={controls}
          variants={variantsRotate}
          className={cn(
            "absolute w-full h-full z-0 left-1/2 top-1/2",
            styles.third_circle
          )}
          style={{
            translate: "-50% -50%",
          }}
        >
          <MotionImage
            alt="Slow dancing in the dark"
            src={
              "https://res.cloudinary.com/purplesoda/image/upload/v1695479593/Test%20Projects/Joji%20Album%20Collection/pexels-isaac-weatherly-2131647_fgj8gs.webp"
            }
            animate={currentTrack == 0 ? "visible" : "hidden"}
            custom={{ delayLevel: 2 }}
            variants={imageVariants}
            className={cn("object-cover", styles.image_track)}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
          />
          <MotionImage
            alt="Slow dancing in the dark"
            src={
              "https://res.cloudinary.com/purplesoda/image/upload/v1695479594/Test%20Projects/Joji%20Album%20Collection/ilona-bellotto-rbPplWrpgcU-unsplash_djyw93.webp"
            }
            animate={currentTrack == 1 ? "visible" : "hidden"}
            custom={{ delayLevel: 2 }}
            variants={imageVariants}
            className={cn("object-cover", styles.image_track)}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
          />
          <MotionImage
            alt="Slow dancing in the dark"
            src={
              "https://res.cloudinary.com/purplesoda/image/upload/v1695479594/Test%20Projects/Joji%20Album%20Collection/pexels-alex-umbelino-18280489_f5kdqu.webp"
            }
            animate={currentTrack == 2 ? "visible" : "hidden"}
            custom={{ delayLevel: 2 }}
            variants={imageVariants}
            className={cn("object-cover", styles.image_track)}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
          />
        </motion.div>
        <div className="absolute top-0 left-0 opacity-40 w-full h-full bg-slate-950 z-40"></div>
      </motion.div>
      <div
        className={cn(
          "relative container max-w-7xl mx-auto w-full h-full z-50",
          styles.text_container
        )}
      >
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start ">
          <LargeHeading2 size={"lg"}>Slow dancing in the dark</LargeHeading2>
          <button
            disabled={isRotating}
            onClick={onHandleChangeTrack}
            style={{ color: "white" }}
          >
            Rotate {rotateValue} {isRotating ? "true" : "false"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Track;
