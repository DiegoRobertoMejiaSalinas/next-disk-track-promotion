import { TRACK_MP3_URL } from "@/constants/tracks";
import { cn } from "@/lib/cn";
import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Player.module.css";
import { Pause, Play, SkipForward } from "lucide-react";
import canAutoPlay from "can-autoplay";

interface PlayerProps extends HTMLAttributes<HTMLDivElement> {
  currentTrack: number;
  onHandleNextTrack: () => void;
}

const Player: FC<PlayerProps> = ({
  currentTrack,
  className,
  onHandleNextTrack,
  ...props
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const musicRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);

  const onPlayPause = () => {
    if (isPlaying) {
      musicRef.current?.pause();
      setIsPlaying(false);
    } else {
      musicRef.current?.play();

      setIsPlaying(true);
    }
  };

  const onPlayerNextTrack = () => {
    setIsRotating(true);

    onHandleNextTrack();

    setTimeout(() => {
      setIsRotating(false);
    }, 1800);
  };

  const handleChangeTrack = async () => {
    setIsPlaying(false);

    if (progressRef?.current && musicRef?.current) {
      musicRef.current.pause();
      musicRef.current.currentTime = 0;
      musicRef.current.src = TRACK_MP3_URL[currentTrack];

      const canBrowserPlayAudio = await canAutoPlay.audio();

      if (!!canBrowserPlayAudio.result) {
        musicRef.current.play();
        setIsPlaying(true);
      }

      progressRef.current.max = String(musicRef.current.duration);
      progressRef.current.value = String(musicRef.current.currentTime);
    }
  };

  useEffect(() => {
    handleChangeTrack();
  }, [currentTrack]);

  return (
    <div className={cn("", className)} {...props}>
      <audio ref={musicRef} controls style={{ display: "none" }}>
        <source src={TRACK_MP3_URL[currentTrack]} type="audio/mp3" />
      </audio>
      <motion.input
        layout
        ref={progressRef}
        readOnly
        type="range"
        value={musicRef?.current?.currentTime}
        className={cn(
          "w-full h-1.5 rounded cursor-pointer",
          styles.progress_bar
        )}
      />

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
