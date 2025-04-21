import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
