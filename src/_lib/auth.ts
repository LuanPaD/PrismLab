import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/_db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
});