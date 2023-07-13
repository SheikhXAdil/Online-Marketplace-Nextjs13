import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { db, usersTable, newUser, User } from "@/lib/drizzle";
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { cookies } from "next/headers";
import { headers } from "next/headers";



export async function GET(request: NextRequest) {

    const headersList = headers()
    let email = headersList.get("email")
    let password = headersList.get("password")

    try {
        if (email && password) {
            const res: User[] = await db.select().from(usersTable).where(and(eq(usersTable.email, email), eq(usersTable.password, password)))
            if (res.length === 0) {
                return NextResponse.json({ message: "User does not exist. Check credentials" }, { status: 403 })
            }

            cookies().set("userid", res[0].id)
            return NextResponse.json({ message: "User exists", data: res })
        }
        else {
            throw new Error("Email or Password not provided")
        }
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json("Something Went Wrong")
    }

}



export async function POST(request: NextRequest) {

    let req: newUser = await request.json()

    try {
        if (req.email && req.password) {
            await sql`CREATE TABLE IF NOT EXISTS dineusers(userid varchar(255), email varchar(255), password varchar(255))`

            const confirmUserExistence = await db.select().from(usersTable).where(eq(usersTable.email, req.email)).execute()

            if (confirmUserExistence.length > 0) {
                return NextResponse.json({ message: "User Already Exists" }, { status: 403 })
            } else {


                const res = await db.insert(usersTable).values({
                    id: uuidv4(),
                    email: req.email,
                    password: req.password
                }).returning().execute()

                return NextResponse.json({ message: "Data Added Successfully", data: res })
            }
        }
        else {
            return NextResponse.json({ message: "Inputs do not meet requirements" }, { status: 406 })
        }
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json("Something Went Wrong", { status: 500 })
    }

}