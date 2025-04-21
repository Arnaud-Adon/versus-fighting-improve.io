"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunIcon className="h-[1.5rem] w-[1.5rem] dark:hidden" />
      <MoonIcon className="h-[1.5rem] w-[1.5rem] hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
