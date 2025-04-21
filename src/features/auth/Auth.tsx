import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUser } from "@/lib/auth-session";
import Link from "next/link";

import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export async function Auth() {
  const user = await getUser();

  if (user)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user.image ?? ""} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/auth/signout">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

  return <LoginButton />;
}
