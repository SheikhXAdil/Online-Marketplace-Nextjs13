"use client"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { useRouter } from 'next/navigation';
import { useState, useTransition } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '@/hooks/hooks'
import { cartActions } from '@/store/cartSlice'




const CartItem = ({ productid, title, price, quantity, size }: { productid: string, title: string, price: number, quantity: number, size: string }) => {

    const router = useRouter()
    const dispatch = useAppDispatch()


    const [isUpdating, setIsUpdating] = useState(false)
    const [isPending, startTransition] = useTransition();
    const isMutating = isUpdating || isPending

    const handleDeleteItem = async (productid: string, router: any) => {

        setIsUpdating(true)


        try {
            const res = await fetch(`/api/cart?productid=${productid}`, {
                method: "DELETE",
            }
            )
            if (!res.ok) {
                throw new Error(`HTTP Error: ${res.status}`);
            }
            else {
                toast.success("Item Deleted successfully")
                startTransition(async () => {
                    dispatch(cartActions.removeFromCart())
                    router.refresh()
                })
            }

        } catch (error) {
            toast.error((error as { message: string }).message)
        }

        setIsUpdating(false)


    }


    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    <p className="text-lg">Size: {size}</p>
                    <p className="text-lg">Quantity: {quantity}</p>
                    <p className="text-lg">Price per item: $ {price}.00</p>
                    <p className="text-lg">Total Price: $ {price * quantity}.00</p>
                </CardContent>
                <CardFooter className="self-end">
                    <Button className={`${isMutating ? "bg-gray-400 hover:bg-gray-400" : "bg-gray-800"}`} onClick={() => handleDeleteItem(productid, router)}>Delete Item</Button>
                </CardFooter>
            </Card>

            <ToastContainer />
        </>

    )
}

export default CartItem
