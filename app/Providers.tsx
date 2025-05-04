"use client";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
