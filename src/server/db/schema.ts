// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  boolean,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `quizzoto_${name}`);

export const quizzes = createTable(
  "quizzes",
  {
    id: serial("id").primaryKey(),
    quizzName: varchar("quizzName", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.quizzName),
  }),
);

export const questions = createTable("questions", {
  id: serial("id").primaryKey(),
  question: varchar("question", { length: 256 }),
  quizzId: integer("quizz_id").references(() => quizzes.id),
});

export const answers = createTable("answers", {
  id: serial("id").primaryKey(),
  answer: varchar("answer", { length: 256 }),
  isCorrect: boolean("isCorrect").default(false),
  questionId: integer("quizz_id").references(() => questions.id),
});
