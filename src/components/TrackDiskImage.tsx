import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { TRACKS } from "@/constants/tracks";
import { useMusicContext } from "@/providers/MusicProviders";
import { findClosestRotateMultiple } from "@/helpers/getClosestRotateMultiple";

interface MusicSingleTrackProps extends HTMLAttributes<HTMLDivElement> {
  rotate: number;
  currentTrack: number;
  delayLevel: number;
  controls: AnimationControls;
}

const MotionImage = motion(Image);
const regexPattern = /rotate\(([\d.]+)deg\)/;

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

const template = ({
  rotate,
  x,
  y,
}: {
  rotate: number;
  x: string | number;
  y: string | number;
}) => {
  return `translateX(-${x}) translateY(-${y}) rotate(${rotate})`;
};

const extractRotateDegree = (transformString: string) => {
  const coincidence = transformString!.match(regexPattern) as RegExpMatchArray;
  const realCurrentDegree = Number(coincidence[1]) || 0;
  return findClosestRotateMultiple(realCurrentDegree);
};

const TrackDiskImage: FC<MusicSingleTrackProps> = ({
  rotate,
  delayLevel,
  className,
  children,
}) => {
  const { isPlaying, currentTrack, isPaused, isSkipped } = useMusicContext();
  const controls = useAnimation();
  const [currentDegree, setCurrentDegree] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const startRotation = () => {
    controls.start({
      rotate: [currentDegree, currentDegree + 360],
      transition: { repeat: Infinity, duration: 5, ease: "linear" },
    });
  };

  const stopRotation = () => {
    const transformString = ref.current?.style.transform;
    const coincidence = transformString!.match(
      regexPattern
    ) as RegExpMatchArray;
    const realCurrentDegree = Number(coincidence[1]);
    const closestMultiple = extractRotateDegree(ref!.current!.style.transform);

    setCurrentDegree(realCurrentDegree - closestMultiple);
    controls.stop();
  };

  const restartRotation = async () => {
    const transformString = ref.current?.style.transform;
    const coincidence = transformString!.match(
      regexPattern
    ) as RegExpMatchArray;
    const realCurrentDegree = Number(coincidence[1]);
    const closestMultiple = findClosestRotateMultiple(realCurrentDegree);

    // await controls.stop();
    await controls.start({
      rotate: 720,
      transition: {
        duration: 1,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    if (isPlaying) {
      startRotation();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPaused) {
      stopRotation();
    }
  }, [isPaused]);

  return (
    <motion.div
      custom={{ spinNumber: rotate, delayLevel }}
      ref={ref}
      transformTemplate={template}
      initial={{ rotate: 0 }}
      animate={controls}
      style={{
        x: "50%",
        y: "50%",
      }}
      className={cn("absolute w-full h-full left-1/2 top-1/2 ", className)}
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

export default TrackDiskImage;
