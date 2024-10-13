import { hc } from "hono/client";

import { AppTypes } from "@/app/api/[[...route]]/route";
import { clientEnv } from "@/env/client.env";

export const client = hc<AppTypes>(clientEnv.NEXT_PUBLIC_APP_URL);
