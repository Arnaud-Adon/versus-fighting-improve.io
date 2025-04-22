import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Layout = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "max-w-3xl flex-wrap w-full flex gap-4 m-auto px-4 mt-4",
        props.className
      )}
    />
  );
};

export const LayoutHeader = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "flex items-start gap-1 flex-col w-full md:flex-1 min-w-[200px]",
        props.className
      )}
    ></div>
  );
};

export const LayoutContent = (props: ComponentPropsWithoutRef<"div">) => {
  return <div {...props} className={cn("w-full", props.className)}></div>;
};
