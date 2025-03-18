import { pgTable, text, serial, varchar, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const scripts = pgTable("scripts", {
  id: serial("id").primaryKey(),
  input: text("input").notNull(),
  tone: varchar("tone", { length: 50 }).notNull(),
  pace: varchar("pace", { length: 50 }).notNull(),
  emotion: varchar("emotion", { length: 50 }).notNull(),
  slang: boolean("slang").notNull().default(false),
  output: text("output").notNull(),
});

export const scriptConversionSchema = z.object({
  script: z.string().min(1, "Script is required"),
  tone: z.enum(["friendly", "professional", "casual"]),
  pace: z.enum(["slow", "moderate", "fast"]),
  emotion: z.enum(["neutral", "excited", "serious"]),
  slang: z.boolean(),
});

export type ScriptConversion = z.infer<typeof scriptConversionSchema>;
export type Script = typeof scripts.$inferSelect;