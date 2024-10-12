import { createEnv } from "@t3-oss/env-nextjs";

export const clientEnv = createEnv({
  client: {
    // example of client-side env validation
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    // example of client-side env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
});
