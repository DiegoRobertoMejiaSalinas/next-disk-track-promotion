"use client";

import React, { createContext, useContext, useState } from "react";

interface IMusicContextProps {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  isPaused: boolean;
  setIsPaused: (value: boolean) => void;
  isSkipped: boolean;
  setIsSkipped: (value: boolean) => void;
  currentTrack: number;
  setCurrentTrack: (value: number) => void;
}

const initialValue: IMusicContextProps = {
  currentTrack: 0,
  isPlaying: false,
  isPaused: true,
  isSkipped: false,
  setCurrentTrack: () => {},
  setIsPlaying: () => {},
  setIsPaused: () => {},
  setIsSkipped: () => {},
};

const MusicContext = createContext<IMusicContextProps>(initialValue);

export const useMusicContext = () => useContext(MusicContext);

interface Props {
  children: React.ReactNode;
}

export const MusicProvider = ({ children }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [isSkipped, setIsSkipped] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const values: IMusicContextProps = {
    currentTrack,
    isPlaying,
    setCurrentTrack,
    setIsPlaying,
    isPaused,
    isSkipped,
    setIsPaused,
    setIsSkipped,
  };

  return (
    <MusicContext.Provider value={values}>{children}</MusicContext.Provider>
  );
};
