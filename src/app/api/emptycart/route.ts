import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { eq } from 'drizzle-orm';
import { headers } from "next/headers";



export async function POST(request: NextRequest) {

    const userid = headers().get("userid")


    try {
        if (userid) {
            const res = await db.delete(cartTable).where(eq(cartTable.userid, userid)).returning().execute()
            return NextResponse.json({ message: "Data deleted Successfully", date: res })
        } else {
            throw new Error("User not found")
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: (error as { message: string }).message })

    }

}