import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";

import { loginSchema } from "../schemas";

const app = new Hono().post(
  "/login",
  zValidator("json", loginSchema),
  async (ctx) => {
    // const { email, password } = ctx.req.valid("json");
    return ctx.json({ message: "Hello world" });
  }
);

export default app;
