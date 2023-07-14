"use client"
import { Button } from "@/components/ui/button"
import getStipePromise from "@/lib/stripe";
import { Cart } from "@/lib/drizzle";
import { useState } from "react";



const CheckoutBtn = ({ cartData }: { cartData: Cart[] }) => {

    const [isUpdating, setIsUpdating] = useState(false)

    const handleCheckout = async () => {

        setIsUpdating(true)

        try {

            const stripe = await getStipePromise();
            const response = await fetch("/api/stripe-session", {
                method: "POST",
                cache: "no-cache",
                body: JSON.stringify({ cartData })
            });

            const data = await response.json();

            if (data.session) {
                stripe?.redirectToCheckout({ sessionId: data.session.id });
            }

        } catch (error) {
            console.log(error)
        }


        setIsUpdating(false)

    };


    return (
        <Button className={`${isUpdating ? "bg-gray-400 hover:bg-gray-400" : "bg-gray-800"}`} onClick={handleCheckout}>Checkout</Button>

    )
}

export default CheckoutBtn
