import {
    pgTable,
    varchar,
    smallint
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const usersTable = pgTable("dineusers", {
    id: varchar("userid", { length: 255 }).primaryKey(),
    email: varchar("email", { length: 255 }).notNull(),
    password: varchar("password", { length: 255 }).notNull()
})

export const cartTable = pgTable("dinecart", {
    productid: varchar("productid", { length: 255 }).primaryKey(),
    userid: varchar("userid", { length: 255 }).notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    quantity: smallint("quantity").notNull(),
    price: smallint("price").notNull(),
    size: varchar("size", { length: 255 }).notNull()
})

export type Cart = InferModel<typeof cartTable>
export type newCart = InferModel<typeof cartTable, "insert">

export type User = InferModel<typeof usersTable>
export type newUser = InferModel<typeof usersTable, "insert">


export const db = drizzle(sql)
