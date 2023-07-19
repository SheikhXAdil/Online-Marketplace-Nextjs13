"use client"
import { Cart } from "@/lib/drizzle"
import { cookies } from "next/dist/client/components/headers"
import CardItem from "@/components/CartItem"
import CheckoutBtn from "@/components/CheckoutBtn";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/cartSlice";


const checkEnvironment = () => {
    let base_url =
        process.env.VERCEL_ENV === "development"
            ? "http://localhost:3000"
            : "https://online-marketplace-adil.vercel.app";
    return base_url;
};

async function getCartData() {
    const res = await fetch(`${checkEnvironment()}/api/cart?userid=${cookies().get("userid")?.value}`, {
        next: { revalidate: 2 }
    })


    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Cart() {

    const { data }: { data: Cart[] } = await getCartData()

    const totalPrice = () => {

        let arr: number[] = []
        data.map((item) => {
            arr.push(item.price * item.quantity)
        })

        return arr.reduce((a, b) => a + b)
    }



    return (
        data.length > 0
            ?
            <main className="w-10/12 mx-auto flex flex-col gap-24">

                <section className="grid grid-cols-3 gap-4">
                    {data.map((item) => {
                        return (
                            <div className="col-span-3 sm:col-span-2 lg:col-span-1" key={item.productid}>
                                <CardItem productid={item.productid} title={item.title} price={item.price} quantity={item.quantity} size={item.size} />
                            </div>
                        )
                    })}
                </section>

                <section>
                    <h1 className='text-2xl sm:text-3xl font-semibold'>Checkout Information:</h1>

                    <div className="mt-8">

                        <div className="flex gap-2 my-4">
                            <h2 className="text-xl font-semibold">Subtotal:</h2>
                            <p className="text-xl font-bold">{`$ ${totalPrice()}.00`}</p>
                        </div>

                        <CheckoutBtn cartData={data} />
                    </div>

                    <div className="my-4 flex flex-col w-11/12 md:w-3/5 lg:w-2/5 p-4 bg-slate-200 gap-2">
                        <h1 className="font-semibold text-lg">Note:</h1>
                        <div>
                            <p>Use following fake details made for testing at checkout to test the app:</p>
                            <p>Card Number: 4242 4242 4242 4242</p>
                            <p>Name on Card: Sample Card</p>
                            <p>CVC: 123</p>
                        </div>
                    </div>

                </section>

            </main>
            :
            <main className="w-10/12 mx-auto flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <div className="text-2xl font-bold">Your cart is empty</div>
                </div>
            </main>
    )
}