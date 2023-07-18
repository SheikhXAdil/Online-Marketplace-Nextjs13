"use client"
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti'
import Cookies from 'js-cookie';


async function handleEmptyCart() {

    const userid = Cookies.get("userid") as string

    try {
        const res = await fetch(`/api/emptycart`, {
            method: "POST",
            headers: [["userid", userid]]
        })
        const message = await res.json()
        console.log(message)
        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

    } catch (error) {
        console.log(error)
    }

}

const OrderSuccess = () => {

    const [windowSize, setWindowSize] = useState({ width: 1, height: 1 })


    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
        handleEmptyCart()
    }, [])



    return (
        <main className="w-10/12 mx-auto flex items-center justify-center">
            <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">Your order was successful</div>
            </div>

            <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={1500}
                recycle={false}
            />
        </main>
    )
}

export default OrderSuccess
