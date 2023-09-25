import { TRACKS } from "@/constants/tracks";
import { cn } from "@/lib/cn";
import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import { motion, useTime, useTransform } from "framer-motion";
import styles from "./Player.module.css";
import { Pause, Play, SkipForward } from "lucide-react";
import canAutoPlay from "can-autoplay";
import { useMusicContext } from "@/providers/MusicProviders";
import { clearInterval } from "timers";

interface PlayerProps extends HTMLAttributes<HTMLDivElement> {
  currentTrack: number;
}

const Player: FC<PlayerProps> = ({ currentTrack, className, ...props }) => {
  const {
    isPlaying,
    setIsPlaying,
    setIsPaused,
    setIsSkipped,
    isPaused,
    isSkipped,
    setCurrentTrack,
  } = useMusicContext();
  const [isRotating, setIsRotating] = useState(false);
  let fullBarRef = useRef();
  const [duration, setDuration] = useState(0);
  const [width, setWidth] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const musicRef = useRef<HTMLAudioElement>(null);
  // const progressRef = useRef<HTMLInputElement>(null);

  const onPlayPause = () => {
    // const interval = setInterval(() => {
    //   setWidth(width + 100);
    // }, 1000);

    if (isPlaying) {
      musicRef.current?.pause();
      setIsPlaying(false);
      setIsPaused(true);
      // clearInterval(interval);
    } else {
      musicRef.current?.play();

      setIsPaused(false);
      setIsPlaying(true);
      // clearInterval(interval);
    }
  };

  const trackToSet = () => {
    if (currentTrack == TRACKS.length - 1) {
      return 0;
    } else {
      return currentTrack + 1;
    }
  };

  const onPlayerNextTrack = async () => {
    await setIsRotating(true);
    await setIsPaused(false);
    await setIsPlaying(false);
    await setIsSkipped(true);

    const valueToSet = trackToSet();

    setCurrentTrack(valueToSet);

    if (musicRef?.current) {
      musicRef.current.pause();
      musicRef.current.currentTime = 0;
      musicRef.current.src = TRACKS[valueToSet].musicUrl;
      // setTimeout(() => {
      //   console.log(musicRef.current.duration);
      //   setDuration(musicRef.current.duration);
      // }, 300);
      setWidth(0);

      const canBrowserPlayAudio = await canAutoPlay.audio();

      if (!!canBrowserPlayAudio.result) {
        musicRef.current.play();

        console.log(musicRef.current.played);
        setIsPaused(false);
        setIsPlaying(true);
      }

      // progressRef.current.max = String(musicRef.current.duration);
      // progressRef.current.value = String(musicRef.current.currentTime);
    }

    setTimeout(async () => {
      setIsRotating(false);
      setIsSkipped(false);
    }, 1800);
  };

  const handleChangeTrack = async () => {
    // setIsPlaying(false);
    // setIsPaused(false);
    setIsRotating(true);

    if (musicRef?.current) {
      musicRef.current.pause();
      musicRef.current.currentTime = 0;
      musicRef.current.src = TRACKS[currentTrack].musicUrl;

      const canBrowserPlayAudio = await canAutoPlay.audio();

      if (!!canBrowserPlayAudio.result) {
        musicRef.current.play();

        console.log(musicRef.current.played);
        // setIsPaused(false);
        // setIsPlaying(true);
      }
      setIsRotating(false);

      // progressRef.current.max = String(musicRef.current.duration);
      // progressRef.current.value = String(musicRef.current.currentTime);
    }
  };

  const setTrackDuration = () => {
    if (musicRef?.current) {
      setDuration(musicRef!.current!.duration);
    }
    setWidth(0);
  };

  useEffect(() => {
    // handleChangeTrack();
    // setTrackDuration();

    if (!isNaN(musicRef!.current!.duration)) {
      console.log(musicRef.current!.duration);
      setDuration(musicRef.current!.duration);
    }
  }, [musicRef.current?.duration]);

  return (
    <div className={cn("", className)} {...props}>
      <audio
        onEnded={onPlayerNextTrack}
        ref={musicRef}
        controls
        style={{ display: "none" }}
      >
        <source src={TRACKS[currentTrack].musicUrl} type="audio/mp3" />
      </audio>
      {/* <motion.input
        layout
        ref={progressRef}
        readOnly
        type="range"
        value={musicRef?.current?.currentTime}
        className={cn(
          "w-full h-1.5 rounded cursor-pointer",
          styles.progress_bar
        )}
      /> */}

      <div
        ref={fullBarRef}
        className="w-full h-[3px] bg-[#5A526F] rounded-full"
      ></div>

      <div className="relative h-2 w-full rounded bg-slate-800">
        <motion.div
          className="absolute left-0 top-0 h-full bg-dark-gold rounded"
          style={{
            width,
          }}
          layout
        ></motion.div>
      </div>

      <div className="control w-full mx-auto grid grid-cols-3 justify-items-center mt-5 ">
        <div></div>
        {isPlaying ? (
          <Pause
            className="h-8 w-8 text-white cursor-pointer"
            onClick={onPlayPause}
          />
        ) : (
          <Play
            className="h-8 w-8 text-white cursor-pointer"
            onClick={onPlayPause}
          />
        )}
        <button disabled={isRotating} onClick={onPlayerNextTrack}>
          <SkipForward className="h-8 w-8 text-white cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Player;
