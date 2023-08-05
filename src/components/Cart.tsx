import React, { useEffect } from 'react'
import { ShoppingCartIcon } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import Cookies from 'js-cookie';
import { userActions } from '@/store/userSlice';



const Cart = () => {

    const userid = Cookies.get("userid") as string

    const cartCount = useAppSelector(state => state.cartSlice.totalQuantity)
    const dispatch = useAppDispatch()

    useEffect(() => {

        dispatch(userActions.setUser(userid))


    }, [])

    return (
        <div className='relative'>
            <ShoppingCartIcon className='flex w-11 h-11 p-3 rounded-full bg-[#f1f1f1] justify-center items-center' />
            <span className='flex justify-center items-center w-4 h-4 absolute top-0 right-0 bg-red-500 rounded-full text-white text-sm'>
                {cartCount}
            </span>
        </div>
    )
}

export default Cart
