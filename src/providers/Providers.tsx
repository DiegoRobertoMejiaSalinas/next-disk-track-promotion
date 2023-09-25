"use client";

import { ThemeProvider } from "next-themes";
import React, { FC } from "react";
import { NextUIProvider } from "@nextui-org/system";
interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
};

export default Providers;
