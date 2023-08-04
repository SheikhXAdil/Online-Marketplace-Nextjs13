import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { eq } from 'drizzle-orm';
import { cookies } from "next/headers";




export async function GET(request: NextRequest) {

    // const req = request.nextUrl
    const userid = cookies().get("userid")?.value

    try {
        if (userid) {
            const res = await db.select().from(cartTable).where(eq(cartTable.userid, userid))
            return NextResponse.json({ data: res, count: res.length })
        } else {
            return NextResponse.json({ message: "Falied to get user" })
        }

    } catch (error) {
        return NextResponse.json({ message: (error as { message: string }).message })
    }

}