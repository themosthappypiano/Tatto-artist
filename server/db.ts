import dotenv from "dotenv";
dotenv.config();

import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "@shared/schema";

const databasePath = process.env.DATABASE_URL 
  ? process.env.DATABASE_URL.replace("file:", "")
  : "local.db";

const sqlite = new Database(databasePath);
export const db = drizzle(sqlite, { schema });
