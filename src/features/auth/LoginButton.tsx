import { Button } from "@/components/ui/button";
import { LogInIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export function LoginButton() {
  return (
    <div className="flex items-center gap-2">
      <Link href="/auth/signin">
        <Button variant="outline">
          <LogInIcon size={16} />
          Sign In
        </Button>
      </Link>
      <Link href="/auth/signup">
        <Button variant="outline">
          <UserIcon size={16} />
          Sign Up
        </Button>
      </Link>
    </div>
  );
}
