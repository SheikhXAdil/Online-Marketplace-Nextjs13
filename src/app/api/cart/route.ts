import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { db, cartTable, newCart } from "@/lib/drizzle";
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { cookies } from "next/headers";




export async function GET(request: NextRequest) {

    // const req = request.nextUrl
    const userid = cookies().get("userid")?.value as string

    try {
        const res = await db.select().from(cartTable)
        return NextResponse.json({ data: res, count: res.length })

    } catch (error) {
        return NextResponse.json({ message: (error as { message: string }).message })
    }

}


export async function POST(request: NextRequest) {

    const req: newCart = await request.json()

    try {
        await sql`CREATE TABLE IF NOT EXISTS dinecart(productid varchar(255), userid varchar(255), title varchar(255), size varchar(255), quantity smallint, price smallint)`
        if (req.title && req.quantity && req.size && req.price && req.userid) {
            const res = await db.insert(cartTable).values({
                productid: uuidv4(),
                userid: req.userid,
                price: req.price,
                title: req.title,
                quantity: req.quantity,
                size: req.size
            }).returning().execute()

            return NextResponse.json({ message: "Data Added Successfully", data: res })
        } else {
            throw new Error("Something went wrong")
        }

    } catch (error) {
        return NextResponse.json({ message: (error as { message: string }).message }, { status: 500 })

    }

}


export async function DELETE(request: NextRequest) {

    const productid = request.nextUrl.searchParams.get("productid")

    try {
        if (productid) {
            const res = await db.delete(cartTable).where(eq(cartTable.productid, productid)).returning().execute()
            return NextResponse.json({ message: "Data deleted Successfully", date: res })
        }

    } catch (error) {
        return NextResponse.json({ message: (error as { message: string }).message })

    }

}
