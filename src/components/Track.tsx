"use client";

import { FC } from "react";
import LargeHeading2 from "@/ui/LargeHeading2";
import { cn } from "@/lib/cn";
import React from "react";
import { TRACKS } from "@/constants/tracks";
import TrackImages from "@/components/TrackImages/TrackImages";
import { useMusicContext } from "@/providers/MusicProviders";
import PlayerExperimental from "@/components/PlayerExperimental/PlayerExperimental";

interface TrackProps {}

const Track: FC<TrackProps> = ({}) => {
  const { currentTrack, isPlaying } = useMusicContext();

  return (
    <div
      className={cn(
        "relative h-screen flex items-center justify-center overflow-x-hidden bg-slate-100 dark:bg-slate-950"
      )}
    >
      <TrackImages currentTrack={currentTrack} isPlaying={isPlaying} />

      <div
        className={cn(
          "absolute container max-w-7xl mx-auto w-full h-full z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        )}
      >
        <div className="h-full gap-6 flex flex-col justify-center items-center lg:items-start ">
          <LargeHeading2 className="sator" size={"extraXl"} variant={"clear"}>
            {TRACKS[currentTrack].title}
          </LargeHeading2>
        </div>
      </div>

      {/* <Player
        className="absolute left-1/2 bottom-10 w-60 -translate-x-1/2 z-50"
        currentTrack={currentTrack}
      /> */}

      <PlayerExperimental className="absolute left-1/2 bottom-10 w-60 -translate-x-1/2 z-50" />
    </div>
  );
};

export default Track;
