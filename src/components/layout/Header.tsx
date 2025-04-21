import { Auth } from "@/features/auth/Auth";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex items-center">
      <Link href="/">
        <Image src="/next.svg" alt="logo" width={100} height={100} />
      </Link>
      <div className="ml-auto">
        <Auth />
      </div>
    </div>
  );
}
