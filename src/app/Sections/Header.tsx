"use client"
import Menu from '@/components/Menu'
import Image from 'next/image'
import Logo from "/public/Logo.png"
import { AlignJustify, SearchIcon, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Cookies from "js-cookie"
import AccountDetails from '@/components/AccountDetails'





const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const handleMenu = (state: boolean) => {
        setToggleMenu(state)
    }
    const [userid, serUserid] = useState("")

    useEffect(() => {
        const id = Cookies.get("userid")
        serUserid(id ? id : "")

    }, [])

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
                <AccountDetails userid={userid} />


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

                        {/* Account and Cart */}
                        <div className='w-32 h-px my-3 bg-black' />
                        <AccountDetails userid={userid} />
                    </div>
                )}
            </header>
        </>
    )
}

export default Navbar
