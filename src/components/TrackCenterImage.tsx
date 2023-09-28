import { FC, HTMLAttributes } from "react";
import {
  AnimatePresence,
  AnimationControls,
  Variants,
  motion,
  useAnimation,
} from "framer-motion";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { TRACKS } from "@/constants/tracks";

interface MusicCenterTrackProps extends HTMLAttributes<HTMLDivElement> {
  rotate: number;
  currentTrack: number;
  delayLevel: number;
  isPlaying: boolean;
}

const MotionImage = motion(Image);

const imageVariants: Variants = {
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.375,
      type: "tween",
    },
  },
  hidden: {
    opacity: 0,
    rotate: -270,
    transition: {
      duration: 0.75,
      type: "tween",
    },
  },
};

const TrackCenterImage: FC<MusicCenterTrackProps> = ({
  rotate,
  currentTrack,
  className,
  children,
  isPlaying,
  ...props
}) => {
  return (
    <div
      className={cn(
        `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full`,
        className
      )}
    >
      <AnimatePresence>
        {currentTrack % 3 == 0 ? (
          <MotionImage
            alt={"Diego Mejia Joji BicoDev"}
            src={TRACKS[currentTrack].imageUrl}
            initial={{
              opacity: 0,
            }}
            animate={isPlaying ? "visible" : "hidden"}
            exit={{
              opacity: 0,
              rotate: 360,
              transition: {
                duration: 1,
                type: "tween",
              },
            }}
            variants={imageVariants}
            className={cn("object-cover rounded-full")}
            style={{
              opacity: 0,
            }}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {currentTrack % 3 == 1 ? (
          <MotionImage
            alt={"Diego Mejia Joji BicoDev"}
            src={TRACKS[currentTrack].imageUrl}
            initial={{
              opacity: 0,
            }}
            animate={isPlaying ? "visible" : "hidden"}
            exit={{
              opacity: 0,
              rotate: 360,
              transition: {
                duration: 1,
                type: "tween",
              },
            }}
            variants={imageVariants}
            className={cn("object-cover rounded-full")}
            style={{
              opacity: 0,
            }}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {currentTrack % 3 == 2 ? (
          <MotionImage
            alt={"Diego Mejia Joji BicoDev"}
            src={TRACKS[currentTrack].imageUrl}
            initial={{
              opacity: 0,
            }}
            animate={isPlaying ? "visible" : "hidden"}
            exit={{
              opacity: 0,
              rotate: 360,
              transition: {
                duration: 1,
                type: "tween",
              },
            }}
            variants={imageVariants}
            className={cn("object-cover rounded-full")}
            style={{
              opacity: 0,
            }}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default TrackCenterImage;
