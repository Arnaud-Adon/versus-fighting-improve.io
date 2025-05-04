import { Auth } from "@/features/auth/Auth";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

export function Header() {
  return (
    <div className="flex items-center border-b border-zinc-400 py-4 px-8">
      <Link href="/">
        <h1 className="text-2xl font-bold">VSF.io</h1>
      </Link>
      <div className="ml-auto flex items-center gap-4">
        <Auth />
        <ThemeToggle />
      </div>
    </div>
  );
}
