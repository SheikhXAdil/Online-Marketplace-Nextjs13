import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { db, Cart, cartTable, newCart } from "@/lib/drizzle";
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers'
import { headers } from "next/headers";



export async function GET(request: NextRequest) {



}