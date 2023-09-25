import { FC, HTMLAttributes } from "react";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { TRACKS } from "@/constants/tracks";

interface MusicSingleTrackProps extends HTMLAttributes<HTMLDivElement> {
  rotate: number;
  currentTrack: number;
  delayLevel: number;
  controls: AnimationControls;
}

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

const TrackSingleImage: FC<MusicSingleTrackProps> = ({
  rotate,
  currentTrack,
  delayLevel,
  controls,
  className,
  children,
  ...props
}) => {
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

        // ease: "linear",
        delay: 0.15 * delayLevel,
      },
    }),
  };

  return (
    <motion.div
      custom={{ spinNumber: rotate, delayLevel }}
      animate={controls}
      variants={variantsRotate}
      className={cn(
        "absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        className
      )}
      style={{
        translate: "-50% -50%",
      }}
    >
      {children}
      {TRACKS.map((trackItem, index) => (
        <MotionImage
          key={index}
          alt={trackItem.title}
          src={trackItem.imageUrl}
          animate={currentTrack == index ? "visible" : "hidden"}
          custom={{ delayLevel }}
          variants={imageVariants}
          className={cn("object-cover")}
          style={{
            opacity: 0,
          }}
          fill
          sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
        />
      ))}
    </motion.div>
  );
};

export default TrackSingleImage;
