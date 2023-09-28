import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { cn } from "@/lib/cn";
import { useMusicContext } from "@/providers/MusicProviders";
import { TRACKS } from "@/constants/tracks";
import canAutoPlay from "can-autoplay";
import Button from "../ui/Button";

interface PlayerExperimentalProps extends HTMLAttributes<HTMLDivElement> {}

const PlayerExperimental: FC<PlayerExperimentalProps> = ({ className }) => {
  const { setIsPlaying, setIsPaused, currentTrack, setCurrentTrack } =
    useMusicContext();

  const [canChange, setCanChange] = useState(true);
  const musicRef = useRef<HTMLAudioElement>(null);

  const onChange = async () => {
    setCanChange(false);
    setIsPlaying(true);
    setIsPaused(false);

    const canBrowserPlayAudio = await canAutoPlay.audio();

    if (!!canBrowserPlayAudio.result) {
      musicRef.current!.load();
      musicRef.current!.play();
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      setIsPaused(true);
      setIsPlaying(false);
    }

    setTimeout(() => {
      setCanChange(true);
    }, 1800);
  };

  useEffect(() => {
    onChange();
  }, [currentTrack]);

  const onPause = () => {
    setIsPaused(true);
    setIsPlaying(false);
    musicRef.current?.pause();
  };

  const onPlay = () => {
    setIsPaused(false);
    setIsPlaying(true);
    musicRef.current?.play();
  };

  const onPlayerNextTrack = async () => {
    await setCanChange(false);

    const setTrack = () => {
      if (currentTrack == TRACKS.length - 1) {
        return 0;
      } else {
        return currentTrack + 1;
      }
    };

    const track = setTrack();
    setCurrentTrack(track);
    musicRef.current!.src = TRACKS[track].musicUrl;

    setTimeout(() => {
      setCanChange(true);
    }, 1800);
  };

  const onPlayerBackTrack = async () => {
    setCanChange(false);

    const setTrack = () => {
      if (currentTrack == 0) {
        return TRACKS.length - 1;
      } else {
        return currentTrack - 1;
      }
    };
    const track = setTrack();

    setCurrentTrack(track);

    musicRef.current!.src = TRACKS[track].musicUrl;

    setTimeout(() => {
      setCanChange(true);
    }, 1800);
  };

  return (
    <div className={cn(className)}>
      <audio
        onEnded={onPlayerNextTrack}
        ref={musicRef}
        controls
        style={{
          display: "none",
        }}
      >
        <source src={TRACKS[currentTrack].musicUrl} type="audio/mp3" />
      </audio>

      <PlayerControls
        onPause={onPause}
        onPlay={onPlay}
        onSkipNext={onPlayerNextTrack}
        onSkipBack={onPlayerBackTrack}
        canChange={canChange}
      />
    </div>
  );
};

function PlayerControls({
  onPause,
  onPlay,
  onSkipNext,
  onSkipBack,
  canChange,
}: {
  onPause: () => void;
  onPlay: () => void;
  onSkipNext: () => void;
  onSkipBack: () => void;
  canChange: boolean;
}) {
  const { isPaused, isPlaying } = useMusicContext();

  return (
    <div className="mt-6">
      <div className="w-full flex items-center justify-between">
        <Button
          onClick={onSkipBack}
          className="w-12 h-12 p-3 rounded-full"
          variant={"clear"}
          disabled={!canChange}
        >
          <SkipBack className="w-full h-full" />
        </Button>

        {isPlaying && (
          <Button
            onClick={onPause}
            className="w-12 h-12 p-3 rounded-full"
            variant={"clear"}
            disabled={!canChange}
          >
            <Pause className="w-full h-full" />
          </Button>
        )}

        {isPaused && (
          <Button
            onClick={onPlay}
            className="w-12 h-12 p-3 rounded-full"
            variant={"clear"}
            disabled={!canChange}
          >
            <Play className="w-full h-full" />
          </Button>
        )}

        <Button
          onClick={onSkipNext}
          className="w-12 h-12 p-3 rounded-full"
          variant={"clear"}
          disabled={!canChange}
        >
          <SkipForward className="w-full h-full" />
        </Button>
      </div>
    </div>
  );
}

export default PlayerExperimental;
