"use client"
import Menu from '@/components/Menu'
import Image from 'next/image'
import Logo from "/public/Logo.png"

import { AlignJustify, SearchIcon, X, ShoppingCartIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import Link from 'next/link'
import Cookies from "js-cookie"




const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const handleMenu = (state: boolean) => {
        setToggleMenu(state)
    }

    const userid = Cookies.get("userid")

    return (
        <>
            <header className='w-10/12 mx-auto lg:flex my-8 hidden gap-2'>

                {/* Logo */}
                <Link href={"/"}>
                    <Image src={Logo} alt='logo' className='object-contain mt-0 lg:mt-[0.6rem]' />
                </Link>

                {/* Product Menu */}
                <Menu handleMenu={handleMenu} />


                {/* Search */}
                <div className='flex mx-auto border border-input'>
                    <SearchIcon className='my-auto w-5 h-5' />
                    <Input className='w-72 mx-auto' placeholder={`What are you searching for`} />
                </div>


                {/* Account and Cart */}
                <div className='flex justify-between gap-3 items-center'>
                    {
                        userid
                            ?
                            <>
                                <Link className="w-full" href={"/cart"} >
                                    <div className='relative'>
                                        <ShoppingCartIcon className='flex w-11 h-11 p-3 rounded-full bg-[#f1f1f1] justify-center items-center' />
                                        <span className='flex justify-center items-center w-4 h-4 absolute -top-1 -right-1 bg-red-500 rounded-full text-white'></span>
                                    </div>
                                </Link>
                                <Link className="text-lg font-medium cursor-pointer" href={"/log-out"}>Logout</Link>
                            </>
                            :
                            <>
                                <Link className="text-lg font-medium cursor-pointer" href={"/sign-in"}>Sign In</Link>
                                <Link className="text-lg font-medium cursor-pointer" href={"/sign-up"}>Sign Up</Link>
                            </>
                    }
                </div>

            </header>

            {/* Mobile Header */}
            <header className='lg:hidden w-10/12 mx-auto flex justify-between my-8'>

                {/* Logo */}
                <Link href={"/"} >
                    <Image src={Logo} alt='logo' className='object-contain mt-0 lg:mt-[0.6rem]' />
                </Link>

                {/* Menu Trigger */}
                <AlignJustify className='scale-125 cursor-pointer' onClick={() => handleMenu(true)} />


                {/* Menu */}
                {toggleMenu && (
                    <div className='fixed top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center z-10'>

                        {/* Logo in menu */}
                        <Link href={"/"} onClick={() => handleMenu(false)} >
                            <Image src={Logo} alt='logo' width={140} height={25} className='object-contain mt-0 lg:mt-[0.6rem] absolute top-12 left-12' />
                        </Link>

                        {/* Menu close */}
                        <X className='absolute top-12 right-12 scale-125 cursor-pointer' onClick={() => handleMenu(false)} />

                        {/* Product Menu */}
                        <Menu handleMenu={handleMenu} />

                        {/* Account and cart details */}
                        <div className='flex flex-col gap-4 my-4'>
                            <div className='h-px bg-black w-full mx-auto' />
                            {
                                userid
                                    ?
                                    <>
                                        <Link className="w-full" href={"/cart"} onClick={() => handleMenu(false)} >
                                            <div className='relative'>
                                                <ShoppingCartIcon className='flex w-11 h-11 p-3 rounded-full bg-[#f1f1f1] justify-center items-center' />
                                                <span className='flex justify-center items-center w-4 h-4 absolute top-0 right-3 bg-red-500 rounded-full text-white text-sm'></span>
                                            </div>
                                        </Link>
                                        <Link className="text-lg font-medium cursor-pointer" href={"/log-out"} onClick={() => handleMenu(false)}>Logout</Link>
                                    </>
                                    :
                                    <>
                                        <Link className="text-lg font-medium cursor-pointer" href={"/sign-in"} onClick={() => handleMenu(false)}>Sign In</Link>
                                        <Link className="text-lg font-medium cursor-pointer" href={"/sign-up"} onClick={() => handleMenu(false)}>Sign Up</Link>
                                    </>
                            }
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default Navbar
