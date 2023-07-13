"use client"
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti'


const OrderSuccess = () => {

    const [windowSize, setWindowSize] = useState({ width: 1, height: 1 })


    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
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
