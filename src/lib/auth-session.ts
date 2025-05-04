import { headers } from "next/headers";
import { unauthorized } from "next/navigation";
import { auth } from "./auth";

export async function getUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user;
}

export async function getRequiredUser() {
  const user = await getUser();

  if (!user) unauthorized();

  return user;
}
