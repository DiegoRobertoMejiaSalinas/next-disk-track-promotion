"use client";

import { FC, useState } from "react";
import LargeHeading2 from "@/ui/LargeHeading2";
import styles from "./Track.module.css";
import { cn } from "@/lib/cn";
import React from "react";
import { TRACK_TITLES } from "@/constants/tracks";
import Player from "@/components/Player/Player";
import TrackImages from "@/components/TrackImages/TrackImages";

interface TrackProps {}

const Track: FC<TrackProps> = ({}) => {
  const [currentTrack, setCurrentTrack] = useState(0);

  const onNextTrack = async () => {
    if (currentTrack == 2) {
      setCurrentTrack(0);
    } else {
      setCurrentTrack(currentTrack + 1);
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden ">
      <TrackImages currentTrack={currentTrack} />

      <div
        className={cn(
          "relative container max-w-7xl mx-auto w-full h-full z-50",
          styles.text_container
        )}
      >
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start ">
          <LargeHeading2 size={"lg"}>
            {TRACK_TITLES[currentTrack]}
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
