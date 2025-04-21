"use client";
import { signOut } from "@/lib/auth-client";
import { Loader2, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ComponentPropsWithRef, useState } from "react";

export function LogoutButton(props: ComponentPropsWithRef<"button">) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  return (
    <button
      {...props}
      onClick={() =>
        signOut(undefined, {
          onRequest: () => setIsLoading(true),
          onSuccess: () => {
            setIsLoading(false);
            router.push("/");
            router.refresh();
          },
        })
      }
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <>
          <LogOutIcon className="mr-2 h-4 w-4" /> Logout
        </>
      )}
    </button>
  );
}
