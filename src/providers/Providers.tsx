"use client";

import { ThemeProvider } from "next-themes";
import React, { FC } from "react";
import { NextUIProvider } from "@nextui-org/system";
import { MusicProvider } from "./MusicProviders";
interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextUIProvider>
        <MusicProvider>{children}</MusicProvider>
      </NextUIProvider>
    </ThemeProvider>
  );
};

export default Providers;
