import { PropsWithChildren } from "react";

export const LayoutHeader = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export const LayoutContent = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export const LayoutFooter = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};
