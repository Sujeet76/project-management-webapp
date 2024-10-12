import { createEnv } from "@t3-oss/env-nextjs";
import { ZodError, z } from "zod";

export const serverEnv = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1);
  },
  emptyStringAsUndefined: true,
  isServer: typeof window === "undefined",
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
});
