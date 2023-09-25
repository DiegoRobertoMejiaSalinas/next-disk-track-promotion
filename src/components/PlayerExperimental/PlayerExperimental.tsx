import { FC, HTMLAttributes, useEffect, useRef } from "react";
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
  const musicRef = useRef<HTMLAudioElement>(null);

  const onChange = async () => {
    setIsPlaying(true);
    setIsPaused(false);

    const canBrowserPlayAudio = await canAutoPlay.audio();

    if (!!canBrowserPlayAudio.result) {
      await musicRef.current!.load();
      await musicRef.current!.play();
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      setIsPaused(true);
      setIsPlaying(false);
    }
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
  };

  const onPlayerBackTrack = async () => {
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
      />
    </div>
  );
};

function PlayerControls({
  onPause,
  onPlay,
  onSkipNext,
  onSkipBack,
}: {
  onPause: () => void;
  onPlay: () => void;
  onSkipNext: () => void;
  onSkipBack: () => void;
}) {
  const { isPaused, isPlaying } = useMusicContext();

  return (
    <div className="mt-6">
      <div className="w-full flex items-center justify-between">
        <Button
          onClick={onSkipBack}
          className="w-12 h-12 p-3 rounded-full"
          variant={"clear"}
        >
          <SkipBack className="w-full h-full" />
        </Button>

        {isPlaying && (
          <Button
            onClick={onPause}
            className="w-12 h-12 p-3 rounded-full"
            variant={"clear"}
          >
            <Pause className="w-full h-full" />
          </Button>
        )}

        {isPaused && (
          <Button
            onClick={onPlay}
            className="w-12 h-12 p-3 rounded-full"
            variant={"clear"}
          >
            <Play className="w-full h-full" />
          </Button>
        )}

        <Button
          onClick={onSkipNext}
          className="w-12 h-12 p-3 rounded-full"
          variant={"clear"}
        >
          <SkipForward className="w-full h-full" />
        </Button>
      </div>
    </div>
  );
}

export default PlayerExperimental;
