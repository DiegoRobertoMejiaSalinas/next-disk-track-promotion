import {
  animate,
  LayoutGroup,
  motion,
  useDragControls,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/cn";
import { useMusicContext } from "@/providers/MusicProviders";

const DURATION = 186;

interface PlayerExperimentalProps extends HTMLAttributes<HTMLDivElement> {}

const PlayerExperimental: FC<PlayerExperimentalProps> = ({ className }) => {
  const { isPlaying, setIsPlaying, setIsPaused, isPaused } = useMusicContext();
  let [currentTime, setCurrentTime] = useState(0);

  return (
    <div className={cn(className)}>
      <ProgressBar
        playing={isPlaying}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />

      <PlayerControls
        playing={isPlaying}
        onPause={() => {
          setIsPaused(true);
          setIsPlaying(false);
        }}
        onPlay={() => {
          setIsPaused(false);
          setIsPlaying(true);
        }}
      />
    </div>
  );
};

function ProgressBar({ playing, currentTime, setCurrentTime }) {
  let [dragging, setDragging] = useState(false);
  let constraintsRef = useRef();
  let fullBarRef = useRef();
  let scrubberRef = useRef();
  let scrubberX = useMotionValue(0);
  let currentTimePrecise = useMotionValue(currentTime);
  let progressPrecise = useTransform(
    currentTimePrecise,
    (v) => (v / DURATION) * 100
  );
  let progressPreciseWidth = useMotionTemplate`${progressPrecise}%`;
  let dragControls = useDragControls();

  let mins = Math.floor(currentTime / 60);
  let secs = `${currentTime % 60}`.padStart(2, "0");
  let timecode = `${mins}:${secs}`;
  let minsRemaining = Math.floor((DURATION - currentTime) / 60);
  let secsRemaining = `${(DURATION - currentTime) % 60}`.padStart(2, "0");
  let timecodeRemaining = `${minsRemaining}:${secsRemaining}`;
  let progress = (currentTime / DURATION) * 100;

  useInterval(
    () => {
      if (currentTime < DURATION) {
        setCurrentTime((t) => t + 1);
      }
    },
    playing ? 1000 : null
  );

  useInterval(
    () => {
      if (currentTime < DURATION) {
        currentTimePrecise.set(currentTimePrecise.get() + 0.01);
        let newX = getXFromProgress({
          containerRef: fullBarRef,
          progress: currentTimePrecise.get() / DURATION,
        });
        scrubberX.set(newX);
      }
    },
    playing ? 10 : null
  );

  return (
    <div className="relative w-full mt-[25px]">
      <div
        className="relative"
        onPointerDown={(event) => {
          let newProgress = getProgressFromX({
            containerRef: fullBarRef,
            x: event.clientX,
          });
          dragControls.start(event, { snapToCursor: true });
          setCurrentTime(Math.floor(newProgress * DURATION));
          currentTimePrecise.set(newProgress * DURATION);
        }}
      >
        <div
          ref={fullBarRef}
          className="w-full h-[3px] bg-[#5A526F] rounded-full"
        ></div>
        <motion.div
          layout
          style={{ width: progressPreciseWidth }}
          className="absolute top-0"
        >
          <div className="absolute inset-0 h-[3px] bg-[#A29CC0] rounded-full"></div>
        </motion.div>
        <div
          className="absolute inset-0 -ml-[15px] -mr-[17px]"
          ref={constraintsRef}
        >
          <motion.button
            ref={scrubberRef}
            drag="x"
            dragConstraints={constraintsRef}
            dragControls={dragControls}
            dragElastic={0}
            dragMomentum={false}
            style={{ x: scrubberX }}
            onDrag={() => {
              let scrubberBounds = scrubberRef.current.getBoundingClientRect();
              let middleOfScrubber =
                scrubberBounds.x + scrubberBounds.width / 2;
              let newProgress = getProgressFromX({
                containerRef: fullBarRef,
                x: middleOfScrubber,
              });
              setCurrentTime(Math.floor(newProgress * DURATION));
              currentTimePrecise.set(newProgress * DURATION);
            }}
            onDragStart={() => {
              setDragging(true);
            }}
            onPointerDown={() => {
              setDragging(true);
            }}
            onPointerUp={() => {
              setDragging(false);
            }}
            onDragEnd={() => {
              setDragging(false);
            }}
            className="absolute flex items-center justify-center rounded-full cursor-grab active:cursor-grabbing"
          >
            <motion.div
              animate={{ scale: dragging ? 1 : 0.25 }}
              transition={{ type: "tween", duration: 0.15 }}
              initial={false}
              className="w-[33px] h-[33px] bg-[#A29CC0] rounded-full -mt-[15px]"
            ></motion.div>
          </motion.button>
        </div>
      </div>
      <div className="flex justify-between mt-[11px]">
        <motion.p
          className="absolute left-0 text-[11px] font-medium tracking-wide text-white/20 tabular-nums"
          animate={{ y: dragging && progress < 12 ? 15 : 0 }}
        >
          {timecode}
        </motion.p>

        <motion.p
          className="absolute right-0 text-[11px] font-medium tracking-wide text-white/20 tabular-nums"
          animate={{ y: dragging && progress > 85 ? 15 : 0 }}
        >
          -{timecodeRemaining}
        </motion.p>
      </div>
    </div>
  );
}

function PlayerControls({ playing, onPause, onPlay }) {
  const { isPaused, isPlaying } = useMusicContext();

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between px-4">
        {isPlaying && (
          <Button onClick={onPause} className="w-12 h-12 p-3">
            <Pause className="w-full h-full" />
          </Button>
        )}

        {isPaused && (
          <Button onClick={onPlay} className="w-12 h-12 p-3">
            <Play className="w-full h-full" />
          </Button>
        )}
      </div>
    </div>
  );
}

function Button({ children, onClick = () => {}, className }) {
  let [pressing, setPressing] = useState(false);

  return (
    <motion.button
      onTapStart={() => {
        setPressing(true);
      }}
      onTap={() => {
        setPressing(false);
        onClick();
      }}
      initial={false}
      animate={pressing ? "pressed" : "unpressed"}
      variants={{
        pressed: {
          scale: 0.85,
          opacity: 0.7,
        },
        unpressed: {
          scale: [null, 0.85, 1],
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        duration: 0.3,
        bounce: 0.5,
      }}
      className={`flex items-center justify-center relative text-white rounded-full ${className}`}
    >
      {children}
    </motion.button>
  );
}

function getProgressFromX({ x, containerRef }) {
  let bounds = containerRef.current.getBoundingClientRect();
  let progress = (x - bounds.x) / bounds.width;

  return clamp(progress, 0, 1);
}

function getXFromProgress({ progress, containerRef }) {
  let bounds = containerRef.current.getBoundingClientRect();

  return progress * bounds.width;
}

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

function useInterval(callback, delay) {
  const intervalRef = useRef(null);
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === "number") {
      intervalRef.current = window.setInterval(tick, delay);
      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay]);
  return intervalRef;
}

export default PlayerExperimental;
