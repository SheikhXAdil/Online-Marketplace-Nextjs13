"use client"
import Menu from '@/components/Menu'
import Image from 'next/image'
import Logo from "/public/Logo.png"

import { AlignJustify, SearchIcon, ShoppingCartIcon, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleMenu = (state: boolean) => {
        setToggleMenu(state)
    }

    return (
        <>
            <header className='w-10/12 mx-auto lg:flex my-8 hidden'>
                <Link href={"/"}>
                    <Image src={Logo} alt='logo' className='object-contain mt-0 lg:mt-[0.6rem]' />
                </Link>

                <Menu handleMenu={handleMenu} />

                <div className='flex mx-auto border border-input'>
                    <SearchIcon className='my-auto w-5 h-5' />
                    <Input className='w-72 mx-auto' placeholder={`What are you searching for`} />
                </div>

                <div className='relative'>
                    <ShoppingCartIcon className='flex w-11 h-11 p-3 rounded-full bg-[#f1f1f1] justify-center items-center' />
                    <span className='flex justify-center items-center w-4 h-4 absolute -top-1 -right-1 bg-red-500 rounded-full text-white'>1</span>
                </div>

            </header>

            <div className='lg:hidden w-10/12 mx-auto flex justify-between my-8'>
                <Link href={"/"} >
                    <Image src={Logo} alt='logo' className='object-contain mt-0 lg:mt-[0.6rem]' />
                </Link>
                <AlignJustify className='scale-125' onClick={() => handleMenu(true)} />


                {toggleMenu && (
                    <div className='fixed top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center z-10'>
                        <Link href={"/"} onClick={() => handleMenu(false)} >
                            <Image src={Logo} alt='logo' width={140} height={25} className='object-contain mt-0 lg:mt-[0.6rem] absolute top-12 left-12' />
                        </Link>
                        <X className='absolute top-12 right-12 scale-125' onClick={() => handleMenu(false)} />
                        <div className='my-4 lg:my-0 relative'>
                            <ShoppingCartIcon className='flex w-10 h-10 p-3 rounded-full bg-slate-200 justify-center items-center' />
                            <span className='flex justify-center items-center w-5 h-5 absolute -top-1 -right-1 bg-red-500 rounded-full text-white'>1</span>
                        </div>
                        <Menu handleMenu={handleMenu} />
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar
