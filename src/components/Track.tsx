"use client";

import { FC, useState } from "react";
import LargeHeading2 from "@/ui/LargeHeading2";
import { cn } from "@/lib/cn";
import React from "react";
import { TRACKS, TRACK_TITLES } from "@/constants/tracks";
import Player from "@/components/Player/Player";
import TrackImages from "@/components/TrackImages/TrackImages";

interface TrackProps {}

const Track: FC<TrackProps> = ({}) => {
  const [currentTrack, setCurrentTrack] = useState(0);

  const onNextTrack = async () => {
    if (currentTrack == TRACKS.length - 1) {
      setCurrentTrack(0);
    } else {
      setCurrentTrack(currentTrack + 1);
    }
  };

  return (
    <div
      className={cn(
        "relative h-screen flex items-center justify-center overflow-x-hidden bg-slate-100 dark:bg-slate-950"
      )}
    >
      <TrackImages currentTrack={currentTrack} />

      <div
        className={cn(
          "relative container max-w-7xl mx-auto w-full h-full z-50"
        )}
      >
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start ">
          <LargeHeading2 className="sator" size={"extraXl"} variant={"clear"}>
            {TRACKS[currentTrack].title}
          </LargeHeading2>
        </div>

        <Player
          onHandleNextTrack={onNextTrack}
          className="absolute left-1/2 bottom-10 w-60 -translate-x-1/2"
          currentTrack={currentTrack}
        />
      </div>
    </div>
  );
};

export default Track;
