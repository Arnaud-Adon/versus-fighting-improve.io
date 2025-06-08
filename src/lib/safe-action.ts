import { createSafeActionClient } from "next-safe-action";
import { getUser } from "./auth-session";

export class SafeActionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SafeActionError";
  }
}

export const actionClient = createSafeActionClient({
  handleServerError: (e) => {
    if (e instanceof SafeActionError) {
      return e.message;
    }

    return "An unexpected error occurred";
  },
});

export const userAction = actionClient.use(async ({ next }) => {
  const user = await getUser();
  if (!user) {
    throw new SafeActionError("User not found");
  }

  return next({ ctx: { user } });
});
