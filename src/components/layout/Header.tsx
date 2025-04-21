import { Auth } from "@/features/auth/Auth";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex items-center border-b border-zinc-400 py-4 px-8">
      <Link href="/">
        <h1 className="text-2xl font-bold">VSF.io</h1>
      </Link>
      <div className="ml-auto">
        <Auth />
      </div>
    </div>
  );
}
