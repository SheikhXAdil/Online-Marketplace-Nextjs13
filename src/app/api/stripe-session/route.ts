import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Cart } from "@/lib/drizzle";



const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2022-11-15",
});



export async function POST(request: NextRequest) {

    const { cartData }: { cartData: Cart[] } = await request.json();

    try {
        if (cartData.length > 0) {
            const session = await stripe.checkout.sessions.create({
                submit_type: "pay",
                mode: "payment",
                payment_method_types: ["card"],
                billing_address_collection: "auto",
                shipping_options: [
                    { shipping_rate: "shr_1NTSPZJVHwL8EkTNtDd8NGUU" },
                    { shipping_rate: "shr_1NTSQVJVHwL8EkTN3SDKMze9" },
                ],
                discounts: [{
                    coupon: "Panl9ojH"
                }],
                line_items: cartData.map((item: Cart) => {
                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.title,
                                description: `Size is ${item.size}`
                            },
                            unit_amount: item.price * 100,
                        },
                        quantity: item.quantity,
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                            maximum: 10,
                        },
                    };
                }),
                invoice_creation: {
                    enabled: true,
                },
                phone_number_collection: {
                    enabled: true,
                },
                success_url: `${request.headers.get("origin")}/order-success`,
                cancel_url: `${request.headers.get("origin")}/`,
            });
            return NextResponse.json({ session });
        } else {
            return NextResponse.json({ message: "No Data Found" });
        }
    } catch (err: any) {
        console.log(err);
        return NextResponse.json(err.message);
    }
}