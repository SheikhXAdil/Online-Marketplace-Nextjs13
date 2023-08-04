"use client"
import { Button } from "@/components/ui/button"
import { ShoppingCartIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
import { useAppDispatch } from '@/hooks/hooks'
import { cartActions } from '@/store/cartSlice'




const AddToCart = ({ title, price, quantity, size }: { title: string, price: number, quantity: number, size: string }) => {


    const router = useRouter()
    const dispatch = useAppDispatch()

    const [isUpdating, setIsUpdating] = useState(false)
    const [isPending, startTransition] = useTransition();
    const isMutating = isUpdating || isPending

    const handleAddToCart = async (router: any) => {

        const userid = Cookies.get("userid")

        setIsUpdating(true)

        try {
            if (userid) {
                const res = await fetch("/api/cart", {
                    method: "POST",
                    cache: "no-store",
                    body: JSON.stringify({
                        userid: userid,
                        price: price,
                        title: title,
                        quantity: quantity,
                        size: size
                    })
                })
                if (!res.ok) {
                    throw new Error(`HTTP Error: ${res.status}`);
                }
                else {
                    toast.success("Added to cart successfully")
                    startTransition(async () => {
                        dispatch(cartActions.addToCart())
                        router.refresh()
                    })
                }
            }
            else {
                throw new Error("Unauthorized. Make sure you are logged in");
            }


        } catch (error) {
            toast.error((error as { message: string }).message)
        }

        setIsUpdating(false)

    }


    return (
        <>
            <Button className={`w-40 h-12 rounded-none ${isMutating ? "bg-gray-400 hover:bg-gray-400" : "bg-gray-800"}`} onClick={async () => handleAddToCart(router)}>
                <div className="flex w-max gap-2">
                    <ShoppingCartIcon />
                    <p>Add to Cart</p>
                </div>
            </Button>

            <ToastContainer />
        </>

    )
}

export default AddToCart
