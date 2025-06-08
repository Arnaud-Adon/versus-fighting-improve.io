"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

export const LoadingButton = (props: React.ComponentProps<typeof Button>) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props} disabled={pending}>
      {pending ? <Loader className="size-4 animate-spin" /> : props.children}
    </Button>
  );
};
